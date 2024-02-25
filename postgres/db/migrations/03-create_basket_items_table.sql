CREATE TABLE IF NOT EXISTS basket_items (
  id UUID PRIMARY KEY NOT NULL,
  item_id UUID NOT NULL REFERENCES items(id) ON DELETE SET NULL,
  quantity INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL,
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,  -- null until the item is purchased
  purchased_price INTEGER  -- null until the item is purchased
);
ALTER TABLE basket_items ENABLE ELECTRIC;

CREATE INDEX IF NOT EXISTS basket_items_order_id_idx ON basket_items(order_id);
CREATE INDEX IF NOT EXISTS basket_items_item_id_idx ON basket_items(item_id);