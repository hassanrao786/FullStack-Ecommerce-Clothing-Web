import Image, { StaticImageData } from "next/image";
import React from "react";

export const AllProducts = (props: {
  title: string;
  price: number;
  img: StaticImageData;
  category:string
}) => {
  return (
    <div>
      <div>
        <Image
          className="h-76 w-96 "
          src={props.img}
          alt=" products"
        />

        <h3 className="font-bold mt-3">{props.title}</h3>
        <h2 className="font-bold text-gray-500 mt-1">{props.category}</h2>
        <h2 className="font-extrabold mt-1 mb-4 text-lg text-gray-800 ">{"$"}{props.price}</h2>
       
      </div>
    </div>
  );
};
