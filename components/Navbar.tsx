import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Navbar() {
  return (
    <nav className="container flex flex-row items-center justify-between space-y-0 py-4">
      <h2 className="text-lg font-semibold">Next ElectricSQL</h2>
      <div className="ml-auto flex w-auto space-x-2 justify-end">
        <div>
          <Button
            asChild
            variant="outline"
            className="relative"
          >
            <Link href="/cart">
              <span>Cart</span>
              <Badge
                variant="destructive"
                className="absolute inline-flex items-center justify-center -top-2 -end-2"
              >
                1
              </Badge>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
