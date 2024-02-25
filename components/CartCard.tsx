'use client';

import Image from 'next/image';
import CurrencyFormat from 'react-currency-format';
import { useElectric } from '@/components/Provider';
import { Items as Item, Basket_items as BasketItem } from '@/generated/client';
import { Input } from '@/components/ui/input';

type BasketItemWithItem = BasketItem & {
  items: Item;
};

interface Props {
  readonly item: BasketItemWithItem;
}

export function CartCard({ item }: Props) {
  const { db } = useElectric()!;

  async function deleteItem(id: string) {
    await db.basket_items.delete({
      where: {
        id,
      },
    });
  }

  async function updateQuantity(id: string, quantity: number) {
    if (quantity === 0) {
      return await deleteItem(id);
    } else {
      await db.basket_items.update({
        where: {
          id,
        },
        data: {
          quantity,
        },
      });
    }
  }

  return (
    <div className="flex flex-row items-center justify-between gap-2 border rounded-lg p-4">
      <div className="flex flex-row items-center gap-4">
        <Image
          src={`/${item.items.slug}.png`}
          width={100}
          height={100}
          alt="Image Placeholder"
        />
        <div>
          <h3 className="md:text-lg">{item.items.name}</h3>
          <p>
            <CurrencyFormat
              value={item.items.price}
              decimalSeparator={','}
              thousandSeparator={'.'}
              prefix={'Rp '}
              className="w-[120px]"
            />
          </p>
        </div>
      </div>
      <Input
        type="number"
        value={item.quantity}
        className="w-20"
        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
      />
    </div>
  );
}
