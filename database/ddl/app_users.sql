CREATE TABLE IF NOT EXISTS app_users
(
    user_id BIGINT GENERATED ALWAYS AS IDENTITY,

    user_code STRING NOT NULL,

    name STRING NOT NULL,

    email STRING NOT NULL,

    password_hash STRING NOT NULL,

    role STRING NOT NULL,

    created_at TIMESTAMP NOT NULL,

    CONSTRAINT pk_app_users
        PRIMARY KEY (user_id),

    CONSTRAINT uq_app_users_user_code
        UNIQUE (user_code),

    CONSTRAINT uq_app_users_email
        UNIQUE (email)
)
USING DELTA;