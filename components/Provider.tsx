'use client';

import { useEffect, useState } from 'react';
import { makeElectricContext } from 'electric-sql/react';
import { ElectricDatabase, electrify } from 'electric-sql/wa-sqlite';

import { Electric, schema } from '@/generated/client';

export const { ElectricProvider, useElectric } =
  makeElectricContext<Electric>();

interface Props {
  readonly children: React.ReactNode;
}

export function Provider({ children }: Props) {
  const [electric, setElectric] = useState<Electric>();

  useEffect(() => {
    let isMounted = true;

    const init = async () => {
      const config = {
        debug: true,
        url: process.env.NEXT_PUBLIC_ELECTRIC_SERVICE,
      };

      const scopedDbName = `react_electricsql.db`;
      const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNzA4ODM4MjI4LCJleHAiOjE4MTEwMDE4NTh9.Z0VCzoyE218-kGzyT_46Rx7k2qkOh5kKMYRqE2Pc_mi0d180oojWgJY7l6G6GxxVXgsVMhcVzvDUAoGgI7RU2A`;

      const conn = await ElectricDatabase.init(scopedDbName);
      const electric = await electrify(conn, schema, config);
      await electric.connect(token);

      const syncItems = await electric.db.items.sync();
      const syncBaskets = await electric.db.basket_items.sync({
        include: {
          items: true,
          orders: true,
        },
      });
      const syncOrders = await electric.db.orders.sync({
        include: {
          basket_items: {
            include: {
              items: true,
            },
          },
        },
      });
      await syncItems.synced;
      await syncBaskets.synced;
      await syncOrders.synced;

      if (!isMounted) {
        return;
      }

      setElectric(electric);
    };

    init();

    return () => {
      isMounted = false;
    };
  }, []);

  if (electric === undefined) {
    return null;
  }

  return <ElectricProvider db={electric}>{children}</ElectricProvider>;
}
