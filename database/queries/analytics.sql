-- ============================================================================
-- ANALYTICS QUERIES
-- ============================================================================

-- Revenue

SELECT
    SUM(total_amount) AS total_revenue
FROM orders
WHERE status = 'COMPLETED';


-- Revenue By Status

SELECT
    status,
    SUM(total_amount) AS revenue
FROM orders
GROUP BY status;


-- Orders By Status

SELECT
    status,
    COUNT(*) AS order_count
FROM orders
GROUP BY status;


-- Top Customers

SELECT
    u.user_code,
    u.name,
    SUM(o.total_amount) AS total_spent
FROM app_users u
JOIN orders o
ON u.user_id = o.user_id
GROUP BY
    u.user_code,
    u.name
ORDER BY total_spent DESC;


-- Top Selling Products

SELECT
    p.product_code,
    p.name,
    SUM(oi.quantity) AS units_sold
FROM products p
JOIN order_items oi
ON p.product_id = oi.product_id
GROUP BY
    p.product_code,
    p.name
ORDER BY units_sold DESC;


-- Revenue By Product

SELECT
    p.product_code,
    p.name,
    SUM(oi.quantity * oi.unit_price) AS revenue
FROM products p
JOIN order_items oi
ON p.product_id = oi.product_id
GROUP BY
    p.product_code,
    p.name
ORDER BY revenue DESC;


-- Average Order Value

SELECT
    AVG(total_amount) AS avg_order_value
FROM orders;