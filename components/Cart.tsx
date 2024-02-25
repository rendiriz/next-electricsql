'use client';

import { useLiveQuery } from 'electric-sql/react';
import CurrencyFormat from 'react-currency-format';
import {
  Items as Item,
  Basket_items as BasketItem,
  Electric,
} from '@/generated/client';
import { useElectric } from '@/components/Provider';
import { CartCard } from '@/components/CartCard';
import { Button } from '@/components/ui/button';

type BasketItemWithItem = BasketItem & {
  items: Item;
};

async function deduplicateBasketItems(
  db: Electric['db'],
  basket: BasketItem[],
) {
  const firstItem = new Map<string, BasketItem>();
  for (const item of basket) {
    const existingItem = firstItem.get(item.item_id);
    if (existingItem) {
      await db.basket_items.delete({
        where: {
          id: item.id,
        },
      });
      await db.basket_items.update({
        where: {
          id: existingItem.id,
        },
        data: {
          quantity: existingItem.quantity + item.quantity,
        },
      });
    } else {
      firstItem.set(item.item_id, item);
    }
  }
}

export function Cart() {
  const { db } = useElectric()!;
  const { results } = useLiveQuery(
    db.basket_items.liveMany({
      orderBy: {
        created_at: 'desc',
      },
      where: {
        order_id: null,
      },
      include: {
        items: true,
      },
    }),
  );
  const basket = results as BasketItemWithItem[];

  const totalCost = (basket ?? []).reduce((acc, item) => {
    return acc + item.quantity * item.items.price;
  }, 0);

  deduplicateBasketItems(db, basket ?? []);

  return (
    <div>
      {!basket?.length ? (
        <div className="flex border rounded-lg p-4 mb-4">Empty Cart</div>
      ) : (
        <div className="flex flex-col gap-4 mb-4">
          {basket.map((basket_item) => (
            <div key={basket_item.id}>
              <CartCard item={basket_item} />
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center justify-end gap-4">
        <div>
          Total: &nbsp;
          <CurrencyFormat
            value={totalCost}
            decimalSeparator={','}
            thousandSeparator={'.'}
            prefix={'Rp '}
            className="w-[120px]"
          />
        </div>
        <Button>Checkout</Button>
      </div>
    </div>
  );
}
