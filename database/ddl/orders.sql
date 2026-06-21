CREATE TABLE IF NOT EXISTS orders
(
    order_id BIGINT GENERATED ALWAYS AS IDENTITY,

    order_code STRING NOT NULL,

    user_id BIGINT NOT NULL,

    total_amount DECIMAL(12,2) NOT NULL,

    status STRING NOT NULL,

    created_at TIMESTAMP NOT NULL,

    confirmed_at TIMESTAMP,

    completed_at TIMESTAMP,

    cancelled_at TIMESTAMP,

    CONSTRAINT pk_orders
        PRIMARY KEY (order_id),

    CONSTRAINT uq_orders_order_code
        UNIQUE (order_code),

    CONSTRAINT fk_orders_user
        FOREIGN KEY (user_id)
        REFERENCES app_users(user_id)
)
USING DELTA;