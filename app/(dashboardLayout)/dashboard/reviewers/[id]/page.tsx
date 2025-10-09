import React from "react";
import { ChevronLeft } from "lucide-react";
import ReviewersDetails from "@/components/dashboard/reviewers/ReviewersDetails";
import Link from "next/link";

export default function id() {
  return (
    <div className=" w-[80%] mx-auto">
      <Link href={"/dashboard/reviewers"}>
        {" "}
        <div className="flex items-center mb-4">
          <span className="bg-[#F5F5F5] text-[#3D454E] p-2">
            <ChevronLeft />
          </span>{" "}
          <button className="text-[#F05223] font-semibold text-2xl">
            View Reviewers Details
          </button>
        </div>
      </Link>
      <div className="flex bg-[#F5F5F5] p-9 gap-14">
        <div className="">
          <h1 className="font-bold text-2xl ">Nancy B.</h1>
          <p className="text-md">Los Angeles, CA</p>
        </div>
        <div className="flex-1">
          <ReviewersDetails />
        </div>
      </div>
    </div>
  );
}
