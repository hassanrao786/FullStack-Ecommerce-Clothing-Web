// Example: pages/femalepage.js
import React from "react";
import p1 from "/public/p1.png";
import p2 from "/public/p2.png";
import p3 from "/public/p3.png";
import p4 from "/public/p4.png";
import p5 from "/public/p5.png";
import p6 from "/public/p6.png";
import p7 from "/public/p7.png";
import p8 from "/public/p8.png";
import p9 from "/public/p9.png";
import m2 from "/public/m2.jpeg";
import m3 from "/public/m3.jpeg";
import m4 from "/public/m4.png";
import m5 from "/public/m5.png";
import c1 from "/public/c1.webp";
import c2 from "/public/c2.jpeg";
import c3 from "/public/c6.jpeg";
import c4 from "/public/c4.jpeg";
import c5 from "/public/c5.jpeg";
import c6 from "/public/c6.jpeg";
import c7 from "/public/c7.jpeg";
import { AllProducts } from "@/components/productpage";

const productPage = () => {
  return (
    <div className=" grid sm:grid-cols-1 md:grid-cols-4 pt-10  gap-x-8 ">
        <AllProducts
        title="
Imperial Alpaca Hoodie"
        category="Jackets"
        price={445}
        img={c5}
      />
      <AllProducts
        title="Brushed Raglan Sweatshirt"
        category="Sweater"
        price={195}
        img={p1}
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
      <AllProducts title="Cameryn" category="Dress" price={545} img={m2} />
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
Pink Fleece Sweatpants
"
        category="Pants"
        price={195}
        img={p4}
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
  );
};

export default productPage;
