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

export async function createOrder(order) {
  const connection = await getConnection();
  const session = await connection.openSession();

  try {
    await session.executeStatement(`
      INSERT INTO crud.crud.orders
      (
        order_code,
        user_id,
        total_amount,
        status,
        created_at
      )
      VALUES
      (
        '${order.orderCode}',
        ${order.userId},
        ${order.totalAmount},
        'PENDING',
        CURRENT_TIMESTAMP
      )
    `);
  } finally {
    await session.close();
  }
}

export async function createOrderItem(item) {
  const connection = await getConnection();
  const session = await connection.openSession();

  try {
    await session.executeStatement(`
      INSERT INTO crud.crud.order_items
      (
        item_code,
        order_id,
        product_id,
        quantity,
        unit_price
      )
      VALUES
      (
        '${item.itemCode}',
        ${item.orderId},
        ${item.productId},
        ${item.quantity},
        ${item.unitPrice}
      )
    `);
  } finally {
    await session.close();
  }
}

export async function getOrderById(orderId) {
  const connection = await getConnection();
  const session = await connection.openSession();

  try {
    const operation = await session.executeStatement(`
      SELECT *
      FROM crud.crud.orders
      WHERE order_id = ${orderId}
    `);

    const result = await operation.fetchAll();

    await operation.close();

    return result;
  } finally {
    await session.close();
  }
}

export async function getOrdersByUserId(userId) {
  const connection = await getConnection();
  const session = await connection.openSession();

  try {
    const operation = await session.executeStatement(`
      SELECT *
      FROM crud.crud.orders
      WHERE user_id = ${userId}
      ORDER BY created_at DESC
    `);

    const result = await operation.fetchAll();

    await operation.close();

    return result;
  } finally {
    await session.close();
  }
}

export async function getAllOrders() {
  const connection = await getConnection();
  const session = await connection.openSession();

  try {
    const operation = await session.executeStatement(`
      SELECT *
      FROM crud.crud.orders
      ORDER BY created_at DESC
    `);

    const result = await operation.fetchAll();

    await operation.close();

    return result;
  } finally {
    await session.close();
  }
}

export async function getOrderItemsByOrderId(orderId) {
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

export async function updateOrderStatus(orderId, status) {
  const connection = await getConnection();
  const session = await connection.openSession();

  try {
    await session.executeStatement(`
      UPDATE crud.crud.orders
      SET status = '${status}'
      WHERE order_id = ${orderId}
    `);
  } finally {
    await session.close();
  }
}

export async function setConfirmedAt(orderId) {
  const connection = await getConnection();
  const session = await connection.openSession();

  try {
    await session.executeStatement(`
      UPDATE crud.crud.orders
      SET confirmed_at = CURRENT_TIMESTAMP
      WHERE order_id = ${orderId}
    `);
  } finally {
    await session.close();
  }
}

export async function setCompletedAt(orderId) {
  const connection = await getConnection();
  const session = await connection.openSession();

  try {
    await session.executeStatement(`
      UPDATE crud.crud.orders
      SET completed_at = CURRENT_TIMESTAMP
      WHERE order_id = ${orderId}
    `);
  } finally {
    await session.close();
  }
}

export async function setCancelledAt(orderId) {
  const connection = await getConnection();
  const session = await connection.openSession();

  try {
    await session.executeStatement(`
      UPDATE crud.crud.orders
      SET cancelled_at = CURRENT_TIMESTAMP
      WHERE order_id = ${orderId}
    `);
  } finally {
    await session.close();
  }
}