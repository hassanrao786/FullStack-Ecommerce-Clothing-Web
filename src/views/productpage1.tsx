import React from "react";
import Image from "next/image";
import event1 from "/public/event1.webp";
import event2 from "/public/event2.webp";
import event3 from "/public/event3.webp";
export const Productpage1 = () => {
  return (
    <div>
      <div className="flex-col   text-center pt-10  ">
        <h1 className="text-blue-700 font-bold ">P r o m o t i o n</h1>
        <p className="font-extrabold text-4xl pt-4">Our Promotions Events</p>
      </div>
      <div className="">
        {/* 1st */}
        <div className="grid grid-rows-6 grid-cols-8 gap-4 h-screen pt-10  ">
          <div className="col-span-4 row-span-2  bg-gray-300 flex justify-center items-center ">
            <div>
              <h1 className="text-BLACK  font-bold text-4xl  ">
                GET UP TO 60%
              </h1>
              <span className="font-light text-xl"> For the summar season</span>
            </div>
            <div>
              <Image className="pb-3" src={event1} alt="product" />
            </div>
          </div>

          {/* 2rd */}

          <div className="col-span-2 row-span-4 flex-col bg-orange-100">
            <div className="font-light text-xl pl-5 pt-4">
              <h1>
                Flex Sweatshirt <br />
                <span className=" font-bold">
                  <span className="line-through font-normal">$100.00</span>{" "}
                  $75.00
                </span>
              </h1>
            </div>
            <div>
              <Image className="" src={event2} alt="product" />
            </div>
          </div>

          {/* 3th */}

          <div className="col-span-2 row-span-4  bg-gray-300">
            <div className="font-light text-xl pl-5 pt-4">
              <h1>
                Flex Sweatshirt <br />
                <span className=" font-bold">
                  <span className="line-through font-normal">$225.00</span>{" "}
                  $190.00
                </span>
              </h1>
            </div>

            <div>
              <Image className="" src={event3} alt="product" />
            </div>
          </div>

          {/* 4th */}

          <div className="col-span-4 row-span-2   bg-black">
            <h1 className="text-white font-extrabold text-4xl text-center mt-16">
              GET 30% OFF
            </h1>
            <h1 className="text-white  font-semibold mt-5 text-XL text-center ">
              USE PROMO CODE
            </h1>
            <div className=" flex h-10 w-72 ml-44 mt-2 bg-stone-700 rounded-xl  ">
              <h1 className=" font-bold   text-xl text-white text-center pl-10">
                DINEWEEKENDSALE
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
