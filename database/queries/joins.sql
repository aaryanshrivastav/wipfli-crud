-- ============================================================================
-- JOIN QUERIES
-- ============================================================================

-- User Orders

SELECT
    u.user_code,
    u.name,
    o.order_code,
    o.status,
    o.total_amount
FROM app_users u
INNER JOIN orders o
ON u.user_id = o.user_id;


-- Order Details

SELECT
    o.order_code,
    p.product_code,
    p.name,
    oi.quantity,
    oi.unit_price
FROM orders o
INNER JOIN order_items oi
ON o.order_id = oi.order_id
INNER JOIN products p
ON oi.product_id = p.product_id;


-- Complete Order View

SELECT
    o.order_code,
    u.name AS customer_name,
    p.name AS product_name,
    oi.quantity,
    oi.unit_price
FROM orders o
JOIN app_users u
ON o.user_id = u.user_id
JOIN order_items oi
ON o.order_id = oi.order_id
JOIN products p
ON oi.product_id = p.product_id;


-- Customers With No Orders

SELECT
    u.user_code,
    u.name
FROM app_users u
LEFT JOIN orders o
ON u.user_id = o.user_id
WHERE o.order_id IS NULL;