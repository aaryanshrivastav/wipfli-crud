CREATE TABLE IF NOT EXISTS products
(
    product_id BIGINT GENERATED ALWAYS AS IDENTITY,

    product_code STRING NOT NULL,

    sku STRING NOT NULL,

    name STRING NOT NULL,

    category STRING,

    price DECIMAL(10,2) NOT NULL,

    stock_quantity INT NOT NULL,

    description STRING,

    is_active BOOLEAN NOT NULL,

    created_at TIMESTAMP NOT NULL,

    updated_at TIMESTAMP,

    CONSTRAINT pk_products
        PRIMARY KEY (product_id),

    CONSTRAINT uq_products_product_code
        UNIQUE (product_code),

    CONSTRAINT uq_products_sku
        UNIQUE (sku)
)
USING DELTA;