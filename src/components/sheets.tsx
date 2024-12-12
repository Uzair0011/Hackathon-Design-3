import { Button } from "@/components/ui/button";

import { TiThMenu } from "react-icons/ti";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <TiThMenu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription>
            {/* Make changes to your profile here. Click save when you're done. */}
          </SheetDescription>
        </SheetHeader>
        <ul className="space-y-4">
          <li className="text-sm hover:underline ">
            <Link href="/">New & Featured</Link>
          </li>
          <li className="text-sm hover:underline">
            <Link href="/Detail">Men</Link>
          </li>
          <li className="text-sm hover:underline">
            <Link href="/Detail2">Women</Link>
          </li>
          <li className="text-sm hover:underline">
            <Link href="/Detail3">Kids</Link>
          </li>
          <li className="text-sm hover:underline">
            <Link href="/AllProducts">Sale</Link>
          </li>
          <li className="text-sm hover:underline">
            <Link href="/">SNKRS</Link>
          </li>
        </ul>

        <SheetFooter>
          <SheetClose asChild>
            {/* <Button type="submit">Save changes</Button> */}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
