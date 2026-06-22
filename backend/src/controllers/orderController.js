import { getAllOrders } from "../repositories/orderRepo.js";

export async function getOrders(req, res) {
  try {
    const products = await getAllOrders();

    res.status(200).json(products);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch orders"
    });
  }
}