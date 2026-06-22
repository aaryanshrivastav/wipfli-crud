import { getAllOrderItems, fetchOrderById } from "../repositories/orderitemsRepo.js";

export async function getOrderItems(req, res) {
  try {
    const products = await getAllOrderItems();

    res.status(200).json(products);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch order items"
    });
  }
}

export async function getOrderById(req, res) {
    try {
        const { orderId } = req.params;
        console.log(req.params);
        console.log(req.params.orderId);
        const order = await fetchOrderById(orderId);
        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }
        res.status(200).json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}