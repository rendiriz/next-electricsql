'use client';

import { useEffect } from 'react';
import { useLiveQuery } from 'electric-sql/react';
import { genUUID } from 'electric-sql/util';
import { Items as Item } from '@/generated/client';
import { useElectric } from '@/components/Provider';
import { Button } from '@/components/ui/button';

export default function Items() {
  const { db } = useElectric()!;
  const { results } = useLiveQuery(db.items.liveMany());

  useEffect(() => {
    const syncItems = async () => {
      const shape = await db.items.sync();
      await shape.synced;
    };

    syncItems();
  }, []);

  const addItem = async () => {
    await db.items.create({
      data: {
        id: genUUID(),
        slug: 'y',
        name: 'y',
        description: 'y',
        price: 3,
      },
    });
  };

  const items: Item[] = results ?? [];

  return (
    <main>
      <h2 className="mb-6 text-4xl">Items</h2>

      {items.map((item: Item) => (
        <div key={item.id}>
          <h3 className="mb-4 text-2xl">{item.name}</h3>
          <p> Price: {item.price}</p>
          <p> Description: {item.description}</p>
          <hr className="my-4" />
        </div>
      ))}

      <div className="flex gap-4">
        <Button onClick={addItem}>Add</Button>
      </div>
    </main>
  );
}
