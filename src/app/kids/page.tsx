import Image from "next/image";
import React from "react";
import { AllProducts } from "@/components/productpage";

import c1 from "/public/c1.webp";
import c2 from "/public/c2.jpeg";
import c3 from "/public/c6.jpeg";
import c4 from "/public/c4.jpeg";
import c5 from "/public/c5.jpeg";
import c6 from "/public/c6.jpeg";
import c7 from "/public/c7.jpeg";

const Kidspage = () => {
  return (
    <div>
      <div className=" grid sm:grid-cols-1 md:grid-cols-4 pt-10  gap-x-12 ">
        <AllProducts
          title="Brushed Raglan Sweatshirt"
          category="Sweater"
          price={195}
          img={c1}
        />
        <AllProducts
          title="Cameryn Sash Tie Dress"
          category="Dress"
          price={545}
          img={c2}
        />
        <AllProducts
          title="Flex Sweatpants"
          category="Pants"
          price={175}
          img={c3}
        />
        <AllProducts
          title="
Pink Fleece Sweatpants
"
          category="Pants"
          price={195}
          img={c4}
        />
        <AllProducts
          title="
Imperial Alpaca Hoodie"
          category="Jackets"
          price={445}
          img={c5}
        />
        <AllProducts
          title="
          Brushed Bomber"
          category="Jackets"
          price={335}
          img={c6}
        />
        <AllProducts
          title="
Lite Sweatpants"
          category="Pants"
          price={225}
          img={c7}
        />
        
      </div>
    </div>
  );
};

export default Kidspage;