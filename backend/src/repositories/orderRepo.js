import { getConnection } from "../config/databricks.js";

export async function getAllOrders() {
  const connection = await getConnection();

  const session = await connection.openSession();

  try {
    const operation = await session.executeStatement(`
      SELECT *
      FROM crud.crud.orders
      ORDER BY order_id
    `);

    const result = await operation.fetchAll();

    await operation.close();

    return result;
  } finally {
    await session.close();
  }
}