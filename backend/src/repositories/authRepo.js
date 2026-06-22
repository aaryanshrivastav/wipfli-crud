import { getConnection } from "../config/databricks.js";


export async function findUserByEmail(email) {
  const connection = await getConnection();

  const session = await connection.openSession();

  try {
    const operation = await session.executeStatement(`
        SELECT *
        FROM crud.crud.app_users
        WHERE email = '${email}'
    `);

    const result = await operation.fetchAll();

    await operation.close();

    return result;
  } finally {
    await session.close();
  }
}

export async function findUserById(userID) {
  const connection = await getConnection();

  const session = await connection.openSession();

  try {
    const operation = await session.executeStatement(`
        SELECT *
        FROM crud.crud.app_users
        WHERE user_id = '${userID}'
    `);

    const result = await operation.fetchAll();

    await operation.close();

    return result;
  } finally {
    await session.close();
  }
}

export async function createUser(user) {
  const connection = await getConnection();

  const session = await connection.openSession();

  try {
    operation=await session.executeStatement(`
        INSERT INTO crud.crud.app_users
      (
        user_code,
        name,
        email,
        password_hash,
        role,
        created_at
      )
      VALUES
      (
        '${user.userCode}',
        '${user.name}',
        '${user.email}',
        '${user.passwordHash}',
        '${user.role}',
        CURRENT_TIMESTAMP
      )
    `);
    let status;

    do {
    status = await operation.getStatus();
    } while (status !== "SUCCEEDED");

  } finally {
    await session.close();
  }
}

export async function saveRefreshToken(user_id, refresh_token, expires_at) {
  const connection = await getConnection();

  const session = await connection.openSession();

  try {
    await session.executeStatement(`
        INSERT INTO crud.crud.refresh_tokens
        (
        user_id,
        refresh_token,
        expires_at,
        created_at
        )
        VALUES (
        '${user_id}',
        '${refresh_token}',
        '${expires_at}',
        CURRENT_TIMESTAMP
        )
    `);
  } finally {
    await session.close();
  }
}

export async function findRefreshToken(refresh_token) {
  const connection = await getConnection();

  const session = await connection.openSession();

  try {
    const operation = await session.executeStatement(`
        SELECT *
        FROM crud.crud.refresh_tokens
        WHERE refresh_token = '${refresh_token}'
    `);

    const result = await operation.fetchAll();

    await operation.close();

    return result;
  } finally {
    await session.close();
  }
}

export async function deleteRefreshToken(refreshToken) {
  const connection = await getConnection();

  const session = await connection.openSession();

  try {
    await session.executeStatement(`
      DELETE FROM crud.crud.refresh_tokens
      WHERE refresh_token = '${refreshToken}'
    `);
  } finally {
    await session.close();
  }
}