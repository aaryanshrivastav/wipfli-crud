-- ============================================================================
-- INVENTORY QUERIES
-- ============================================================================

-- Out Of Stock

SELECT *
FROM products
WHERE stock_quantity = 0;


-- Low Stock

SELECT *
FROM products
WHERE stock_quantity < 10;


-- Active Products

SELECT *
FROM products
WHERE is_active = TRUE;


-- Inventory Value

SELECT
    SUM(price * stock_quantity) AS inventory_value
FROM products;


-- Products By Category

SELECT
    category,
    COUNT(*) AS product_count
FROM products
GROUP BY category;


-- Stock Distribution

SELECT
    category,
    SUM(stock_quantity) AS total_stock
FROM products
GROUP BY category;


-- Products Never Ordered

SELECT
    p.product_code,
    p.name
FROM products p
LEFT JOIN order_items oi
ON p.product_id = oi.product_id
WHERE oi.order_item_id IS NULL;