import { getConnection } from "../config/databricks.js";


export async function getAllOrderItems() {
  const connection = await getConnection();

  const session = await connection.openSession();

  try {
    const operation = await session.executeStatement(`
      SELECT *
      FROM crud.crud.order_items
      ORDER BY order_item_id
    `);

    const result = await operation.fetchAll();

    await operation.close();

    return result;
  } finally {
    await session.close();
  }
}

export async function fetchOrderById(orderId) {
  const connection = await getConnection();

  const session = await connection.openSession();

  try {
    const operation = await session.executeStatement(`
        SELECT *
        FROM crud.crud.order_items
        WHERE order_id = ${orderId}
    `);

    const result = await operation.fetchAll();

    await operation.close();

    return result;
  } finally {
    await session.close();
  }
}