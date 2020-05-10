DROP TABLE IF EXISTS products;

CREATE TABLE products (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT NOT NULL, 
              price INT NOT NULL
);

INSERT INTO products
    (name, price)
VALUES
    ('Falcon 9', 1000000);
INSERT INTO products
    (name, price)
VALUES
    ('Falcon Heavy', 2500000);
INSERT INTO products
    (name, price)
VALUES
    ('Delta IV', 2000000);
INSERT INTO products
    (name, price)
VALUES
    ('Ariane V', 1300000);