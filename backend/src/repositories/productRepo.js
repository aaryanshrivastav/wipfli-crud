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

export async function getProductById(productId) {
  const connection = await getConnection();
  const session = await connection.openSession();

  try {
    const operation = await session.executeStatement(`
      SELECT *
      FROM crud.crud.products
      WHERE product_id = ${productId}
    `);

    const result = await operation.fetchAll();

    await operation.close();

    return result;
  } finally {
    await session.close();
  }
}

export async function createProduct(product) {
  const connection = await getConnection();
  const session = await connection.openSession();

  try {
    await session.executeStatement(`
      INSERT INTO crud.crud.products
      (
        product_code,
        sku,
        name,
        description,
        category,
        price,
        stock_quantity,
        is_active,
        created_at,
        updated_at
      )
      VALUES
      (
        '${product.productCode}',
        '${product.sku}',
        '${product.name}',
        '${product.description}',
        '${product.category}',
        ${product.price},
        ${product.stockQuantity},
        true,
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP
      )
    `);
  } finally {
    await session.close();
  }
}

export async function updateProduct(productId, product) {
  const connection = await getConnection();
  const session = await connection.openSession();

  try {
    await session.executeStatement(`
      UPDATE crud.crud.products
      SET
        name='${product.name}',
        description='${product.description}',
        category='${product.category}',
        price=${product.price},
        stock_quantity=${product.stockQuantity},
        updated_at=CURRENT_TIMESTAMP
      WHERE product_id=${productId}
    `);
  } finally {
    await session.close();
  }
}

export async function deleteProduct(productId) {
  const connection = await getConnection();
  const session = await connection.openSession();

  try {
    await session.executeStatement(`
      DELETE
      FROM crud.crud.products
      WHERE product_id=${productId}
    `);
  } finally {
    await session.close();
  }
}

export async function reduceProductStock(
  productId,
  quantity
) {
  const connection = await getConnection();

  const session = await connection.openSession();

  try {
    await session.executeStatement(`
      UPDATE crud.crud.products
      SET stock_quantity =
          stock_quantity - ${quantity}
      WHERE product_id = ${productId}
    `);
  } finally {
    await session.close();
  }
}