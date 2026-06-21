-- ============================================================================
-- VALIDATION QUERIES
-- ============================================================================

-- Total users

SELECT COUNT(*) AS total_users
FROM app_users;


-- Total products

SELECT COUNT(*) AS total_products
FROM products;


-- Total orders

SELECT COUNT(*) AS total_orders
FROM orders;


-- Total order items

SELECT COUNT(*) AS total_order_items
FROM order_items;


-- Verify every order belongs to a valid user

SELECT o.*
FROM orders o
LEFT JOIN app_users u
ON o.user_id = u.user_id
WHERE u.user_id IS NULL;


-- Verify every order item belongs to a valid order

SELECT oi.*
FROM order_items oi
LEFT JOIN orders o
ON oi.order_id = o.order_id
WHERE o.order_id IS NULL;


-- Verify every order item belongs to a valid product

SELECT oi.*
FROM order_items oi
LEFT JOIN products p
ON oi.product_id = p.product_id
WHERE p.product_id IS NULL;


-- Check duplicate emails

SELECT email, COUNT(*)
FROM app_users
GROUP BY email
HAVING COUNT(*) > 1;


-- Check duplicate SKUs

SELECT sku, COUNT(*)
FROM products
GROUP BY sku
HAVING COUNT(*) > 1;