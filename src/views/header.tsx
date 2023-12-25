import logo from "/public/logo.webp";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { AlignRight, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Input2 } from "@/components/ui/input2";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  return (
    <div className="flex justify-between  items-center  pt-10 px-24  py-6 ">
      <Image src={logo} alt="logo" className="w-40" />
      <ul className="font-normal  hidden md:flex gap-x-10  pr-70    text-gray-900 ">
        <li>
          <Link href="/female">Female</Link>
        </li>
        <li>
          <Link href="/male">Male</Link>
        </li>
        <li>
          <Link href={"/kids"}>Kids</Link>
        </li>
        <li>
          <Link href={"/allproducts"}>All Products</Link>
        </li>
      </ul>

      <div className="  hidden   md:flex h-6 w-96 border border-gray-200 rounded">
        <Search className="flex" />
        <Input
          className=" border-gray-800 hover:border-2 "
          type="products"
          placeholder="What you looking for"
        />
      </div>

      <div className=" flex md:hidden border ">
        <Search className="flex px-1" />
        <Input2 type="products" placeholder="" />
      </div>

      <div className="h-10 w-10  rounded-full bg-gray-200   hidden md:flex justify-center items-center">
        <ShoppingCart className="h-6 w-6 " />
      </div>

      <div className="flex md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <AlignRight />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <ul className="font-normal  text-gray-900">
              <div className="h-10 w-10  rounded-full bg-gray-200 flex justify-center items-center">
                <ShoppingCart className="h-6 w-6 " />
                <br />
              </div>
              <li>
                <Link href={"/"}></Link>Female
              </li>
              <li>
                <Link href={"/"}></Link>Male
              </li>
              <li>
                <Link href={"/"}></Link>Kids
              </li>
              <li>
                <Link href={"/"}></Link>All Products
              </li>
            </ul>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
