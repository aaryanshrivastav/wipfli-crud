import {
  placeOrder as placeOrderService,
  confirmOrder as confirmOrderService,
  completeOrder as completeOrderService,
  cancelOrder as cancelOrderService,
} from "../services/orderService.js";

import {
  getOrderById,
  getOrdersByUserId,
  getAllOrders,
} from "../repositories/orderRepo.js";

export async function getOrders(
  req,
  res
) {
  try {
    const orders =
      await getAllOrders();

    return res.status(200).json(
      orders
    );

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message:
        "Failed to fetch orders",
    });
  }
}
export async function placeOrder(req, res) {
  try {
    const { items } = req.body;

    const order = await placeOrderService(
      req.user.userId,
      items
    );

    return res.status(201).json({
      message: "Order placed successfully",
      order,
    });

  } catch (error) {
    console.error(error);

    return res.status(400).json({
      message: error.message,
    });
  }
}

export async function getMyOrders(req, res) {
  try {
    const orders =
      await getOrdersByUserId(
        req.user.userId
      );

    return res.status(200).json(
      orders
    );

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch orders",
    });
  }
}

export async function getOrder(
  req,
  res
) {
  try {
    const { id } = req.params;

    const orders =
      await getOrderById(id);

    if (orders.length === 0) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    const order = orders[0];

    if (
      req.user.role === "CUSTOMER" &&
      Number(order.user_id) !==
        Number(req.user.userId)
    ) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }

    return res.status(200).json(
      order
    );

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch order",
    });
  }
}

export async function confirmOrder(
  req,
  res
) {
  try {
    const { id } = req.params;

    await confirmOrderService(id);

    return res.status(200).json({
      message:
        "Order confirmed successfully",
    });

  } catch (error) {
    console.error(error);

    return res.status(400).json({
      message: error.message,
    });
  }
}

export async function completeOrder(
  req,
  res
) {
  try {
    const { id } = req.params;

    await completeOrderService(id);

    return res.status(200).json({
      message:
        "Order completed successfully",
    });

  } catch (error) {
    console.error(error);

    return res.status(400).json({
      message: error.message,
    });
  }
}

export async function cancelOrder(
  req,
  res
) {
  try {
    const { id } = req.params;

    const orders =
      await getOrderById(id);

    if (orders.length === 0) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    const order = orders[0];

    if (
      req.user.role === "CUSTOMER" &&
      Number(order.user_id) !==
        Number(req.user.userId)
    ) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }

    await cancelOrderService(id);

    return res.status(200).json({
      message:
        "Order cancelled successfully",
    });

  } catch (error) {
    console.error(error);

    return res.status(400).json({
      message: error.message,
    });
  }
}