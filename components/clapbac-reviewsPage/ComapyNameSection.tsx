import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import CompanyImage from "../share/customImageHandle/CompanyImage";
import { Button } from "../ui/button";

export default function ComapyNameSection({ details }: any) {
  const currentDate = new Date();
  const createAtDate = new Date(details?.createdAt);

  const timeDifferenceMs = currentDate.getTime() - createAtDate.getTime();

  const daysDifference = timeDifferenceMs / (1000 * 60 * 60 * 24);

  return (
    <>
      <h1 className="flex items-center">
        {details?.category?.name}{" "}
        <span>
          <MdOutlineKeyboardArrowRight />
        </span>
        {details?.name}
      </h1>
      <div className=" shadow-lg  border-8 border-[#C5D92D] my-4">
        <div className="bg-white p-3 flex flex-col md:flex-row gap-7 md:justify-around md:items-center ">
          <div className="flex items-center md:justify-center gap-5">
            <div className="">
              {details?.category?.icon && (
                <CompanyImage
                  item={details?.category?.icon}
                  width={100}
                  height={100}
                />
              )}
            </div>

            <div className="">
              <h3 className="font-bold text-xl lg:text-2xl text-[#3D454E]">
                {details?.name}
              </h3>
              <p className="text-[#3D454E]">
                {details?.name} | {details?.reviewCount} Reviews | Updated{" "}
                {Math.floor(daysDifference)} Days ago
              </p>
            </div>
          </div>
          <div className="font-bold lg:text-lg flex gap-5 items-center">
            <div className="my-2">
              <a
                href={`https://${details?.website}`}
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
