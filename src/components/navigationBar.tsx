import Link from "next/link";
import Image from "next/image";
import { TiThMenu } from "react-icons/ti";

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
        <TiThMenu className=" md:hidden text-xl" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Link href="/">
              {" "}
              <h1 className="font-black text-2xl underline pb-6">Nike</h1>
            </Link>
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
          {/* Search */}
          <div className="flex w-FULL h-[40px] bg-primaryUzairColor  rounded-full items-center  ">
          <Image src="/search.png" alt="search icon" width={24} height={24} />
          <input
            className="w-full h-full  bg-primaryUzairColor ml-1"
            type="text"
            placeholder="Search"
          />
        </div>
        <br />
        <ul className="space-y-5 text-bold text-xl">
          <li className="hover:underline">
            <Link href="/">New & Featured</Link>
          </li>
          <li className="hover:underline">
            <Link href="/Detail">Men</Link>
          </li>
          <li className="hover:underline">
            <Link href="/Detail2">Women</Link>
          </li>
          <li className="hover:underline">
            <Link href="/Detail3">Kids</Link>
          </li>
          <li className="hover:underline">
            <Link href="/AllProducts">Sale</Link>
          </li>
          <li className="hover:underline">
            <Link href="/">SNKRS</Link>
          </li>
        </ul>
      
      </SheetContent>
    </Sheet>
  );
}
