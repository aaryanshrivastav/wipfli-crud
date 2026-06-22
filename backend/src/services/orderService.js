import {
  createOrder,
  createOrderItem,
  getOrderById,
  getOrderItemsByOrderId,
  updateOrderStatus,
  setConfirmedAt,
  setCompletedAt,
  setCancelledAt,
} from "../repositories/orderRepo.js";

import {
  getProductById,
  reduceProductStock,
} from "../repositories/productRepo.js";

export async function placeOrder(userId, items) {
  if (!items || items.length === 0) {
    throw new Error("Order must contain at least one item");
  }

  let totalAmount = 0;

  const products = [];

  for (const item of items) {
    const result = await getProductById(item.productId);

    if (result.length === 0) {
      throw new Error(
        `Product ${item.productId} not found`
      );
    }

    const product = result[0];

    totalAmount +=
      Number(product.price) *
      Number(item.quantity);

    products.push({
      product,
      quantity: item.quantity,
    });
  }

  const orderCode = `ORDER${Date.now()}`;

  await createOrder({
    orderCode,
    userId,
    totalAmount,
  });

  const orderRows =
    await getOrdersByUserId(userId);

  const createdOrder = orderRows[0];

  for (const item of products) {
    await createOrderItem({
      itemCode: `ITEM${Date.now()}${Math.floor(
        Math.random() * 1000
      )}`,
      orderId: createdOrder.order_id,
      productId: item.product.product_id,
      quantity: item.quantity,
      unitPrice: item.product.price,
    });
  }

  return createdOrder;
}

export async function confirmOrder(orderId) {
  const orders = await getOrderById(orderId);

  if (orders.length === 0) {
    throw new Error("Order not found");
  }

  const order = orders[0];

  if (order.status !== "PENDING") {
    throw new Error(
      "Only pending orders can be confirmed"
    );
  }

  const orderItems =
    await getOrderItemsByOrderId(orderId);

  for (const item of orderItems) {
    const products =
      await getProductById(item.product_id);

    const product = products[0];

    if (
      Number(product.stock_quantity) <
      Number(item.quantity)
    ) {
      throw new Error(
        `Insufficient stock for ${product.name}`
      );
    }
  }

  for (const item of orderItems) {
    await reduceProductStock(
      item.product_id,
      item.quantity
    );
  }

  await updateOrderStatus(
    orderId,
    "CONFIRMED"
  );

  await setConfirmedAt(orderId);

  return {
    success: true,
  };
}

export async function completeOrder(orderId) {
  const orders = await getOrderById(orderId);

  if (orders.length === 0) {
    throw new Error("Order not found");
  }

  const order = orders[0];

  if (order.status !== "CONFIRMED") {
    throw new Error(
      "Only confirmed orders can be completed"
    );
  }

  await updateOrderStatus(
    orderId,
    "COMPLETED"
  );

  await setCompletedAt(orderId);

  return {
    success: true,
  };
}

export async function cancelOrder(orderId) {
  const orders = await getOrderById(orderId);

  if (orders.length === 0) {
    throw new Error("Order not found");
  }

  const order = orders[0];

  if (order.status !== "PENDING") {
    throw new Error(
      "Only pending orders can be cancelled"
    );
  }

  await updateOrderStatus(
    orderId,
    "CANCELLED"
  );

  await setCancelledAt(orderId);

  return {
    success: true,
  };
}