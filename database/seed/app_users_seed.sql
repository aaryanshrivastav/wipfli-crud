INSERT INTO app_users
(
    user_code,
    name,
    email,
    password_hash,
    role,
    created_at
)
VALUES

-- Admins

(
    'USER00001',
    'System Admin',
    'admin1@ecommerce.com',
    '$2b$10$adminhash001',
    'ADMIN',
    CURRENT_TIMESTAMP
),

(
    'USER00002',
    'Inventory Manager',
    'admin2@ecommerce.com',
    '$2b$10$adminhash002',
    'ADMIN',
    CURRENT_TIMESTAMP
),

-- Customers

(
    'USER00003',
    'Aaryan Shrivastav',
    'aaryan@example.com',
    '$2b$10$userhash003',
    'CUSTOMER',
    CURRENT_TIMESTAMP
),

(
    'USER00004',
    'Rahul Sharma',
    'rahul@example.com',
    '$2b$10$userhash004',
    'CUSTOMER',
    CURRENT_TIMESTAMP
),

(
    'USER00005',
    'Priya Verma',
    'priya@example.com',
    '$2b$10$userhash005',
    'CUSTOMER',
    CURRENT_TIMESTAMP
),

(
    'USER00006',
    'Arjun Singh',
    'arjun@example.com',
    '$2b$10$userhash006',
    'CUSTOMER',
    CURRENT_TIMESTAMP
),

(
    'USER00007',
    'Sneha Patel',
    'sneha@example.com',
    '$2b$10$userhash007',
    'CUSTOMER',
    CURRENT_TIMESTAMP
),

(
    'USER00008',
    'Vikram Gupta',
    'vikram@example.com',
    '$2b$10$userhash008',
    'CUSTOMER',
    CURRENT_TIMESTAMP
),

(
    'USER00009',
    'Ananya Rao',
    'ananya@example.com',
    '$2b$10$userhash009',
    'CUSTOMER',
    CURRENT_TIMESTAMP
),

(
    'USER00010',
    'Rohit Kumar',
    'rohit@example.com',
    '$2b$10$userhash010',
    'CUSTOMER',
    CURRENT_TIMESTAMP
),

(
    'USER00011',
    'Neha Joshi',
    'neha@example.com',
    '$2b$10$userhash011',
    'CUSTOMER',
    CURRENT_TIMESTAMP
),

(
    'USER00012',
    'Karan Malhotra',
    'karan@example.com',
    '$2b$10$userhash012',
    'CUSTOMER',
    CURRENT_TIMESTAMP
);