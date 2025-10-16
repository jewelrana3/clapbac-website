import React from "react";
import { ChevronLeft } from "lucide-react";
import ReviewersDetails from "@/components/dashboard/reviewers/ReviewersDetails";
import Link from "next/link";
import { myFetch } from "@/utils/myFetch";

export default async function id({ params }: { params: { id: string } }) {
  const reviewersId = params.id;
  console.log(reviewersId);
  const review = await myFetch(`/reviews/reviewers/${reviewersId}`);
  console.log("review sssss", review);

  return (
    <div className=" w-[60%] mx-auto">
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
