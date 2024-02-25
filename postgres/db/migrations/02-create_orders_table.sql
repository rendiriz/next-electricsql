CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY NOT NULL,
  recipient_name TEXT NOT NULL,
  delivery_address TEXT NOT NULL,
  delivery_postcode TEXT NOT NULL,
  delivery_country TEXT NOT NULL,
  delivery_price INTEGER NOT NULL,  -- In cents
  status TEXT NOT NULL,  -- One of 'pending', 'paid', 'shipped', 'cancelled'
  created_at TIMESTAMP NOT NULL
);
ALTER TABLE orders ENABLE ELECTRIC;

CREATE INDEX IF NOT EXISTS orders_created_at_idx ON orders(created_at);