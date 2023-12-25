import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import React from "react";
import Image from "next/image";
import header from "/public/header.webp";
import featured1 from "/public/featured1.webp";
import featured2 from "/public/featured2.webp";
import featured3 from "/public/featured3.webp";
import featured4 from "/public/featured4.webp";

export const Hero = () => {
  return (
    <section className="flex flex-col gap-y-10  lg:flex-row py-6">
      <div className=" flex-1 ">
        <Badge className="px-6 py-3  rounded-lg bg-blue-200 text-blue-700 font-bold  mt-12">
          Sale 70%
        </Badge>

        <h1 className=" scroll-m-20 font-bold  text-6xl tracking-tight lg:text-7xl  mt-12 ">
          An Industrial Take
          <br /> Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]: mt-12">
          Anyone can beat you but no one can beat your <br /> outfit as long as
          you wear Dine outfits.
        </p>
        <Button className="bg-black text-white h-16 w-52 font-bold text-base mt-12 ">
          <ShoppingCart className="mr-3 " />
          Start Shopping
        </Button>

        <div className=" flex flex-col-1 justify-start mt-10 gap-20 ">
        <Image src={featured1} alt="header" />
        <Image src={featured2} alt="header" />
        <Image src={featured3} alt="header" />
        <Image src={featured4} alt="header" />
      </div>

      </div>

      <div className="flex-1 p-10   ">
        <Image className=" bg-pink-100 rounded-full "src={header} alt="header" />
      </div>

     

    </section>
  );
};
