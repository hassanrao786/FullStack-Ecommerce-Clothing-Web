import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Menu } from "lucide-react";

export function SheetDemo() {
  return (
    <header className=" flex justify-between  px-4 py-4 bg-gray-100 items-center">
      <div>
        <h1 className="text-2xl text-orange-600"> panaverse</h1>
      </div>
      <nav>
        <ul className=" hidden  md:flex gap-x-6 mr-11   ">
          <li>
            <Link href={"/"}> Home </Link>
          </li>

          <li>
            <Link href={"/"}> about </Link>
          </li>

          <li>
            <Link href={"/"}> contact </Link>
          </li>

          <li>
            <Link href={"/"}> privacy</Link>
          </li>

          <li></li>
          <Link href={"/"}> plan </Link>
        </ul>

        <div className=" flex md:hidden">
          <Sheet>
            <SheetTrigger>
              <Button>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <ul>
                  <li>
                    <Link href={"/"}> Home </Link>
                  </li>

                  <li>
                    <Link href={"/"}> about </Link>
                  </li>

                  <li>
                    <Link href={"/"}> contact </Link>
                  </li>

                  <li>
                    <Link href={"/"}> privacy</Link>
                  </li>

                  <li></li>
                  <Link href={"/"}> plan </Link>
                </ul>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
