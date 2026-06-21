INSERT INTO orders
(
    order_code,
    user_id,
    total_amount,
    status,
    created_at,
    confirmed_at,
    completed_at,
    cancelled_at
)
VALUES

(
    'ORDER00001',
    3,
    83498.00,
    'COMPLETED',
    TIMESTAMP('2026-06-01 09:00:00'),
    TIMESTAMP('2026-06-01 10:00:00'),
    TIMESTAMP('2026-06-03 15:30:00'),
    NULL
),

(
    'ORDER00002',
    4,
    1499.00,
    'COMPLETED',
    TIMESTAMP('2026-06-02 11:00:00'),
    TIMESTAMP('2026-06-02 11:15:00'),
    TIMESTAMP('2026-06-04 14:00:00'),
    NULL
),

(
    'ORDER00003',
    5,
    5999.00,
    'CONFIRMED',
    TIMESTAMP('2026-06-03 13:00:00'),
    TIMESTAMP('2026-06-03 13:20:00'),
    NULL,
    NULL
),

(
    'ORDER00004',
    6,
    899.00,
    'PENDING',
    TIMESTAMP('2026-06-04 09:30:00'),
    NULL,
    NULL,
    NULL
),

(
    'ORDER00005',
    7,
    3999.00,
    'CANCELLED',
    TIMESTAMP('2026-06-05 10:00:00'),
    NULL,
    NULL,
    TIMESTAMP('2026-06-05 12:30:00')
),

(
    'ORDER00006',
    8,
    2499.00,
    'COMPLETED',
    TIMESTAMP('2026-06-06 14:00:00'),
    TIMESTAMP('2026-06-06 14:15:00'),
    TIMESTAMP('2026-06-08 16:00:00'),
    NULL
),

(
    'ORDER00007',
    9,
    999.00,
    'CONFIRMED',
    TIMESTAMP('2026-06-07 10:00:00'),
    TIMESTAMP('2026-06-07 10:20:00'),
    NULL,
    NULL
),

(
    'ORDER00008',
    10,
    7499.00,
    'COMPLETED',
    TIMESTAMP('2026-06-08 08:00:00'),
    TIMESTAMP('2026-06-08 08:30:00'),
    TIMESTAMP('2026-06-10 12:00:00'),
    NULL
),

(
    'ORDER00009',
    11,
    4999.00,
    'PENDING',
    TIMESTAMP('2026-06-09 18:00:00'),
    NULL,
    NULL,
    NULL
),

(
    'ORDER00010',
    12,
    3499.00,
    'CONFIRMED',
    TIMESTAMP('2026-06-10 11:00:00'),
    TIMESTAMP('2026-06-10 11:25:00'),
    NULL,
    NULL
),

(
    'ORDER00011',
    3,
    799.00,
    'COMPLETED',
    TIMESTAMP('2026-06-11 09:00:00'),
    TIMESTAMP('2026-06-11 09:10:00'),
    TIMESTAMP('2026-06-13 11:00:00'),
    NULL
),

(
    'ORDER00012',
    4,
    18999.00,
    'COMPLETED',
    TIMESTAMP('2026-06-12 12:00:00'),
    TIMESTAMP('2026-06-12 12:30:00'),
    TIMESTAMP('2026-06-15 17:00:00'),
    NULL
);