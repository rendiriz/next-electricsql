'use client';

import Image from 'next/image';
import { genUUID } from 'electric-sql/util';
import CurrencyFormat from 'react-currency-format';
import { Items as Item } from '@/generated/client';
import { useElectric } from '@/components/Provider';
import { Button } from '@/components/ui/button';

interface Props {
  readonly item: Item;
}

export function ItemCard({ item }: Props) {
  const { db } = useElectric()!;

  async function addToCart() {
    await db.basket_items.create({
      data: {
        id: genUUID(),
        item_id: item.id,
        quantity: 1,
        created_at: new Date(),
      },
    });
  }

  return (
    <div className="flex flex-col gap-2">
      <Image
        src={`/${item.slug}.png`}
        width={500}
        height={500}
        alt="Image Placeholder"
      />
      <h3 className="md:text-xl">{item.name}</h3>
      <p className="mb-2.5">
        <CurrencyFormat
          value={item.price}
          decimalSeparator={','}
          thousandSeparator={'.'}
          prefix={'Rp '}
        />
      </p>

      <Button onClick={addToCart}>Add to cart</Button>
    </div>
  );
}
