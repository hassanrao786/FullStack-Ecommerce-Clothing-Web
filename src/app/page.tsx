import { Hero } from "@/views/hero";
import { Newsletter } from "@/views/nexsletter";
import { Productpage } from "@/views/productpage2";
import { Productpage1 } from "@/views/productpage1";

export default function Home() {
  return (
    <div>
      <Hero />
      <Productpage1 />
      <Productpage />
      <Newsletter/>
    </div>
  );
}
