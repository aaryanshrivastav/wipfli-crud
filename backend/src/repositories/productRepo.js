import { getConnection } from "../config/databricks.js";

export async function getAllProducts() {
  const connection = await getConnection();

  const session = await connection.openSession();

  try {
    const operation = await session.executeStatement(`
      SELECT *
      FROM crud.crud.products
      ORDER BY product_id
    `);

    const result = await operation.fetchAll();

    await operation.close();

    return result;
  } finally {
    await session.close();
  }
}