import React from "react";
import one from "../../public/food-drink/one.png";
import Image from "next/image";
import Button from "../share/Button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function ComapyNameSection({ details }: any) {
  return (
    <>
      {" "}
      <h1 className="flex items-center">
        {details?.category?.name}{" "}
        <span>
          <MdOutlineKeyboardArrowRight />
        </span>{" "}
        Arabica Coffee
      </h1>
      <div className=" shadow-lg  border-8 border-[#C5D92D] my-4">
        <div className="bg-white p-3 flex flex-col md:flex-row gap-7 md:justify-around md:items-center ">
          <div className="flex items-center md:justify-center gap-5">
            <div className="">
              <Image
                src={
                  `${process.env.NEXT_PUBLIC_BASE_URL}${details?.category?.icon}` ||
                  details?.category?.icon
                }
                width={0}
                height={0}
                alt="card"
                sizes="100vw"
                className="w-30 lg:w-48 object-cover "
              />
            </div>

            <div className="">
              <h3 className="font-bold text-xl lg:text-2xl text-[#3D454E]">
                Arabica Coffee
              </h3>
              <p className="text-[#3D454E]">
                {details?.category?.name} | {details?.reviewCount} Reviews |
                Updated 3 Days ago
              </p>
            </div>
          </div>
          <div className="font-bold lg:text-lg flex gap-5 items-center">
            <div className="my-2">
              <Button className="text-sm">View Website</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
