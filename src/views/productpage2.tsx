import Image from "next/image";
import React from "react";

import { MainProducts} from "@/components/product";

import p1 from "/public/p1.png";
import p2 from "/public/p2.png";
import p4 from "/public/p4.png";
import pic3 from "/public/pic3.png";

export const Productpage = () => {
  return (
    <div >
      <div className="  text-center mb-32 ">
        <h1 className="text-blue-700 font-bold ">P r o d u c t s</h1>
        <p className="font-extrabold text-4xl pt-4"> Check What We Have</p>
      </div>

      <div className=" grid sm:grid-cols-1  md:grid-cols-3 mb-36  ">
        <MainProducts title="Brushed Raglan Sweatshirt" price={195} img={p1} />
        <MainProducts title="Cameryn Sash Tie Dress" price={545} img={p2} />
        <MainProducts title="Flex Sweatpants" price={175} img={p4} />
      </div>
    </div>
  );
};


