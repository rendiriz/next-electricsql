'use client';

import Link from 'next/link';
import { useLiveQuery } from 'electric-sql/react';
import { useElectric } from '@/components/Provider';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Navbar() {
  const { db } = useElectric()!;

  const { results: basket } = useLiveQuery(
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

  const count = (basket ?? []).reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <nav className="container flex flex-row items-center justify-between space-y-0 py-4">
      <Link href="/">
        <h2 className="text-lg font-semibold">Next ElectricSQL</h2>
      </Link>
      <div className="ml-auto flex w-auto space-x-2 justify-end">
        <div>
          <Button
            asChild
            variant="outline"
            className="relative"
          >
            <Link href="/cart">
              <span>Cart</span>
              {count > 0 ? (
                <Badge
                  variant="destructive"
                  className="absolute inline-flex items-center justify-center -top-2 -end-2"
                >
                  {count}
                </Badge>
              ) : null}
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
