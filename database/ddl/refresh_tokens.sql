CREATE TABLE IF NOT EXISTS refresh_tokens
(
    token_id BIGINT GENERATED ALWAYS AS IDENTITY,

    user_id BIGINT NOT NULL,

    refresh_token STRING NOT NULL,

    expires_at TIMESTAMP NOT NULL,

    created_at TIMESTAMP NOT NULL,

    CONSTRAINT pk_refresh_tokens
        PRIMARY KEY (token_id)
)
USING DELTA;