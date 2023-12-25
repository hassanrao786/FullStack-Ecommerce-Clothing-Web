import Image, { StaticImageData } from "next/image";
import React from "react";

export const MainProducts = (props: {
  title: string;
  price: number;
  img: StaticImageData;
}) => {
  return (
    <div>
      <div>
        <Image
          className="h-76 w-80 hover:w-96 hover:duration-500"
          src={props.img}
          alt=" product1"
        />

        <h3 className="font-bold mt-3">{props.title}</h3>
        <h2 className="font-bold mt-1">{"$"}{props.price}</h2>
      </div>
    </div>
  );
};
