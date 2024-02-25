'use client';

import { useLiveQuery } from 'electric-sql/react';
import { Items as Item } from '@/generated/client';
import { useElectric } from '@/components/Provider';
import { ItemCard } from './ItemCard';

export function Shop() {
  const { db } = useElectric()!;
  const { results } = useLiveQuery(db.items.liveMany());

  const items: Item[] = results ?? [];

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {items.map((item: Item) => (
        <div
          key={item.id}
          className="flex flex-col gap-2"
        >
          <ItemCard item={item} />
        </div>
      ))}
    </div>
  );
}
