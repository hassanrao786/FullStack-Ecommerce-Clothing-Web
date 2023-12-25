import Image from "next/image";
import React from "react";
import { AllProducts } from "@/components/productpage";

import p1 from "/public/p1.png";
import p2 from "/public/p2.png";
import p3 from "/public/p3.png";
import p4 from "/public/p4.png";
import p5 from "/public/p5.png";
import p6 from "/public/p6.png";
import p7 from "/public/p7.png";
import p8 from "/public/p8.png";
import p9 from "/public/p9.png";

const Femalepage = () => {
  return (
    <div>
      <div className=" grid sm:grid-cols-1 md:grid-cols-4 pt-10  gap-x-8 ">
        <AllProducts
          title="Brushed Raglan Sweatshirt"
          category="Sweater"
          price={195}
          img={p1}
        />
        <AllProducts
          title="Cameryn Sash Tie Dress"
          category="Dress"
          price={545}
          img={p2}
        />
        <AllProducts
          title="Flex Sweatpants"
          category="Pants"
          price={175}
          img={p3}
        />
        <AllProducts
          title="
Pink Fleece Sweatpants
"
          category="Pants"
          price={195}
          img={p4}
        />
        <AllProducts
          title="
Imperial Alpaca Hoodie"
          category="Jackets"
          price={445}
          img={p5}
        />
        <AllProducts
          title="
          Brushed Bomber"
          category="Jackets"
          price={335}
          img={p6}
        />
        <AllProducts
          title="
Lite Sweatpants"
          category="Pants"
          price={225}
          img={p7}
        />
        <AllProducts
          title="
Flex Sweatshirt"
          category="Sweater"
          price={235}
          img={p8}
        />
        <AllProducts
          title="
Muscle Tank"
          category="T-Shirt"
          price={550}
          img={p9}
        />
      </div>
    </div>
  );
};

export default Femalepage;
