INSERT INTO products
(
    product_code,
    sku,
    name,
    category,
    price,
    stock_quantity,
    description,
    is_active,
    created_at,
    updated_at
)
VALUES

-- Electronics

(
    'PROD00001',
    'ELEC-LAP-001',
    'Gaming Laptop',
    'Electronics',
    79999.00,
    15,
    'High performance gaming laptop',
    TRUE,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
),

(
    'PROD00002',
    'ELEC-KBD-001',
    'Mechanical Keyboard',
    'Electronics',
    3499.00,
    40,
    'RGB mechanical keyboard',
    TRUE,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
),

(
    'PROD00003',
    'ELEC-MSE-001',
    'Wireless Mouse',
    'Electronics',
    1499.00,
    50,
    'Ergonomic wireless mouse',
    TRUE,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
),

(
    'PROD00004',
    'ELEC-MON-001',
    '27 Inch Monitor',
    'Electronics',
    18999.00,
    8,
    'IPS 144Hz gaming monitor',
    TRUE,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
),

-- Books

(
    'PROD00005',
    'BOOK-DBMS-001',
    'Database System Concepts',
    'Books',
    899.00,
    25,
    'DBMS textbook',
    TRUE,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
),

(
    'PROD00006',
    'BOOK-DSA-001',
    'Data Structures and Algorithms',
    'Books',
    749.00,
    30,
    'DSA preparation book',
    TRUE,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
),

(
    'PROD00007',
    'BOOK-SQL-001',
    'SQL Interview Handbook',
    'Books',
    499.00,
    12,
    'SQL interview preparation',
    TRUE,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
),

(
    'PROD00008',
    'BOOK-SYS-001',
    'System Design Primer',
    'Books',
    999.00,
    6,
    'System design fundamentals',
    TRUE,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
),

-- Fashion

(
    'PROD00009',
    'FSHN-TSH-001',
    'Cotton T-Shirt',
    'Fashion',
    599.00,
    100,
    'Premium cotton t-shirt',
    TRUE,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
),

(
    'PROD00010',
    'FSHN-JNS-001',
    'Slim Fit Jeans',
    'Fashion',
    1499.00,
    60,
    'Comfort fit jeans',
    TRUE,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
),

(
    'PROD00011',
    'FSHN-SHO-001',
    'Running Shoes',
    'Fashion',
    2499.00,
    20,
    'Lightweight running shoes',
    TRUE,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
),

(
    'PROD00012',
    'FSHN-JKT-001',
    'Winter Jacket',
    'Fashion',
    3999.00,
    5,
    'Water resistant jacket',
    TRUE,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
),

-- Home

(
    'PROD00013',
    'HOME-CHA-001',
    'Office Chair',
    'Home',
    5999.00,
    10,
    'Ergonomic office chair',
    TRUE,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
),

(
    'PROD00014',
    'HOME-DESK-001',
    'Study Desk',
    'Home',
    7499.00,
    7,
    'Wooden study desk',
    TRUE,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
),

(
    'PROD00015',
    'HOME-LAMP-001',
    'Desk Lamp',
    'Home',
    899.00,
    18,
    'LED study lamp',
    TRUE,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
),

(
    'PROD00016',
    'HOME-SHELF-001',
    'Bookshelf',
    'Home',
    4499.00,
    0,
    '5-tier bookshelf',
    TRUE,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
),

-- Sports

(
    'PROD00017',
    'SPRT-CRK-001',
    'Cricket Bat',
    'Sports',
    2999.00,
    22,
    'English willow cricket bat',
    TRUE,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
),

(
    'PROD00018',
    'SPRT-FBL-001',
    'Football',
    'Sports',
    999.00,
    35,
    'Professional football',
    TRUE,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
),

(
    'PROD00019',
    'SPRT-DMB-001',
    'Dumbbell Set',
    'Sports',
    4999.00,
    4,
    'Adjustable dumbbell set',
    TRUE,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
),

(
    'PROD00020',
    'SPRT-YGA-001',
    'Yoga Mat',
    'Sports',
    799.00,
    28,
    'Anti-slip yoga mat',
    TRUE,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
);