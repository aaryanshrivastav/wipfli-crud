CREATE TABLE IF NOT EXISTS order_items
(
    order_item_id BIGINT GENERATED ALWAYS AS IDENTITY,

    item_code STRING NOT NULL,

    order_id BIGINT NOT NULL,

    product_id BIGINT NOT NULL,

    quantity INT NOT NULL,

    unit_price DECIMAL(10,2) NOT NULL,

    CONSTRAINT pk_order_items
        PRIMARY KEY (order_item_id),

    CONSTRAINT uq_order_items_item_code
        UNIQUE (item_code),

    CONSTRAINT uq_order_product
        UNIQUE (order_id, product_id),

    CONSTRAINT fk_order_items_order
        FOREIGN KEY (order_id)
        REFERENCES orders(order_id),

    CONSTRAINT fk_order_items_product
        FOREIGN KEY (product_id)
        REFERENCES products(product_id)
)
USING DELTA;