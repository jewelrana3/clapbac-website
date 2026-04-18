import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import CompanyImage from "../share/customImageHandle/CompanyImage";
import { Button } from "../ui/button";

export default function ComapyNameSection({ details: business }: any) {
  const currentDate = new Date();
  const createAtDate = new Date(business?.createdAt);

  const timeDifferenceMs = currentDate.getTime() - createAtDate.getTime();

  const daysDifference = timeDifferenceMs / (1000 * 60 * 60 * 24);

  return (
    <>
      <h1 className="flex items-center">
        {business?.category?.name}{" "}
        <span>
          <MdOutlineKeyboardArrowRight />
        </span>
        {business?.name}
      </h1>
      <div className=" shadow-lg  border-8 border-[#C5D92D] my-4">
        <div className="bg-white p-3 flex flex-col md:flex-row gap-7 md:justify-around md:items-center ">
          <div className="flex items-center md:justify-center gap-5">
            <div className="">
              {business?.logo && (
                <CompanyImage item={business?.logo} width={100} height={100} />
              )}
            </div>

            <div className="">
              <h3 className="font-bold text-xl lg:text-2xl text-[#3D454E]">
                {business?.name}
              </h3>
              <p className="text-[#3D454E]">
                {business?.category?.name} | {business?.reviewCount} Reviews |
                Updated {Math.floor(daysDifference)} Days ago
              </p>
            </div>
          </div>
          <div className="font-bold lg:text-lg flex gap-5 items-center">
            <div className="my-2">
              <a
                href={`${business?.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 underline hover:text-blue-800"
              >
                <Button>View Website</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
