import {  getAllProducts,
          getProductById,
          createProduct,
          updateProduct,
          deleteProduct } from "../repositories/productRepo.js";

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

export async function getProduct(req, res) {
  try {
    const { id } = req.params;

    const products = await getProductById(id);

    if (products.length === 0) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    return res.status(200).json(products[0]);

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch product"
    });
  }
}

export async function createProductController(req, res) {
  try {
    const {
      sku,
      name,
      description,
      category,
      price,
      stockQuantity
    } = req.body;

    const product = {
      productCode: `PROD${Date.now()}`,
      sku,
      name,
      description,
      category,
      price,
      stockQuantity
    };

    await createProduct(product);

    return res.status(201).json({
      message: "Product created successfully"
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to create product"
    });
  }
}

export async function updateProductController(req, res) {
  try {
    const { id } = req.params;

    await updateProduct(id, req.body);

    return res.status(200).json({
      message: "Product updated successfully"
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to update product"
    });
  }
}

export async function deleteProductController(req, res) {
  try {
    const { id } = req.params;

    await deleteProduct(id);

    return res.status(200).json({
      message: "Product deleted successfully"
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to delete product"
    });
  }
}