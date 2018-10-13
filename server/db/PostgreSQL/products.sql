CREATE TABLE products (
  id              bigserial PRIMARY KEY,
  brand           VARCHAR(100),
  product_name    VARCHAR(100),
  product_price   VARCHAR(100),
  product_rating  DECIMAL(10, 1),
  product_loves   INTEGER,
  product_img     VARCHAR(250)
);