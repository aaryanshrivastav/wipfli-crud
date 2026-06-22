import { getAllProducts } from "../repositories/productRepo.js";

export async function getProducts(req, res) {
  try {
    const products = await getAllProducts();

    res.status(200).json(products);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch products"
    });
  }
}