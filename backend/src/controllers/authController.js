import bcrypt from "bcrypt";

import {
  findUserByEmail,
  createUser,
  saveRefreshToken,
  findRefreshToken,
  deleteRefreshToken
} from "../repositories/authRepo.js";

import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../utils/jwt.js";

export async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required",
      });
    }

    const existingUser = await findUserByEmail(email);

    if (existingUser.length > 0) {
      return res.status(409).json({
        message: "Email already registered",
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const userCode = `USER${Date.now()}`;

    const user = {
      userCode,
      name,
      email,
      passwordHash,
      role: "CUSTOMER",
    };

    await createUser(user);

    return res.status(201).json({
      message: "User registered successfully",
      userCode,
    });

  } catch (error) {
    console.error("Register Error:", error);

    return res.status(500).json({
      message: "Failed to register user",
    });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const users = await findUserByEmail(email);

    if (users.length === 0) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const user = users[0];

    const isValidPassword = await bcrypt.compare(
      password,
      user.password_hash
    );

    if (!isValidPassword) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const payload = {
      userId: user.user_id,
      role: user.role,
    };

    const accessToken = generateAccessToken(payload);

    const refreshToken = generateRefreshToken(payload);

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);

    await saveRefreshToken(
      user.user_id,
      refreshToken,
      expiresAt.toISOString()
    );

    return res.status(200).json({
      accessToken,
      refreshToken,
      user: {
        userId: user.user_id,
        userCode: user.user_code,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);

    return res.status(500).json({
      message: "Failed to login",
    });
  }
}

export async function refresh(req, res) {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({
        message: "Refresh token is required",
      });
    }

    const tokenRows = await findRefreshToken(refreshToken);

    if (tokenRows.length === 0) {
      return res.status(401).json({
        message: "Invalid refresh token",
      });
    }

    let decoded;

    try {
      decoded = verifyRefreshToken(refreshToken);
    } catch (error) {
      return res.status(401).json({
        message: "Refresh token expired or invalid",
      });
    }

    const accessToken = generateAccessToken({
      userId: decoded.userId,
      role: decoded.role,
    });

    return res.status(200).json({
      accessToken,
    });
  } catch (error) {
    console.error("Refresh Error:", error);

    return res.status(500).json({
      message: "Failed to refresh token",
    });
  }
}

export async function me(req, res) {
  try {
    const users = await findUserById(
      req.user.userId
    );

    if (users.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const user = users[0];

    return res.status(200).json({
      userId: user.user_id,
      userCode: user.user_code,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.created_at,
    });

  } catch (error) {
    console.error("Me Error:", error);

    return res.status(500).json({
      message: "Failed to fetch profile",
    });
  }
}

export async function logout(req, res) {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({
        message: "Refresh token is required",
      });
    }

    await deleteRefreshToken(refreshToken);

    return res.status(200).json({
      message: "Logged out successfully",
    });

  } catch (error) {
    console.error("Logout Error:", error);

    return res.status(500).json({
      message: "Failed to logout",
    });
  }
}