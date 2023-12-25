import Image from "next/image";
import React from "react";
import { AllProducts } from "@/components/productpage";

import m2 from "/public/m2.jpeg";
import m3 from "/public/m3.jpeg";
import m4 from "/public/m4.png";
import m5 from "/public/m5.png";
const Malepage = () => {
  return (
    <div>
     
       <div  className=" grid sm:grid-cols-1 md:grid-cols-4 pt-10  gap-x-8 "> <AllProducts
          title="Cameryn"
          category="Dress"
          price={545}
          img={m2}
        />
        <AllProducts
          title="Flex Push Button Bomber"
          category="Jackets"
          price={195}
          img={m4}
        />
        <AllProducts
          title="Flex Sweatpants"
          category="Pants"
          price={175}
          img={m3}
        />
        <AllProducts
          title="
          Flex Push Button Bomber"
          category="Pants"
          price={195}
          img={m4}
        />
        <AllProducts
          title="
          Raglan Sweatshirt"
          category="Sweater"
          price={445}
          img={m5}
        />
       
      </div>
    </div>
  );
};

export default Malepage;