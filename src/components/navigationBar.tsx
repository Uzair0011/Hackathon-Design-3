
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
import { TiThMenu } from "react-icons/ti";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <TiThMenu className=" md:hidden text-xl" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <ul className="leading-10  ">
          <li className="">
            <a href="/">New & Featured</a>
          </li>

          <li className="hover:underline">
            <a href="#About">Men</a>
          </li>

          <li className="hover:underline">
            <a href="#Contact">Women</a>
          </li>
          <li className="hover:underline">
            <a href="#Contact">Kids</a>
          </li>
          <li className="hover:underline">
            <a href="#Contact">Sale</a>
          </li>
          <li className="hover:underline">
            <a href="#Contact">SNKRS</a>
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
