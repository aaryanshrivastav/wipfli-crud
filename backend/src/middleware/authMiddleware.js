import { verifyAccessToken } from "../utils/jwt.js";

export async function authMiddleware(
  req,
  res,
  next
) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "Authorization header missing",
      });
    }

    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Invalid authorization format",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = verifyAccessToken(token);

    req.user = {
      userId: decoded.userId,
      role: decoded.role,
    };

    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired access token",
    });
  }
}