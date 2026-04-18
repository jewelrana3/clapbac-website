import {
  ratingCaculate,
  ratingDefault,
  ratingDefault2,
  ratingDefault3,
} from "@/components/share/rating/ratingCaculate";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import Link from "next/link";

import React from "react";

export default function ReviewsDetails({
  data,
  trigger,
}: {
  data: any;
  trigger?: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <Eye className="text-[#3D454E] cursor-pointer" />
        </div>
      </DialogTrigger>
      <DialogContent className="md:w-[60vw] ">
        <DialogTitle className="sr-only">Title</DialogTitle>
        <div className="mt-4 p-4">
          <div className="review-header">
            <div>
              <strong>{data?.reviewerName}</strong>{" "}
              <span className="location">{data?.reviewerAddress || "N/A"}</span>
              <div className="meta flex gap-3">
                Original Review Excerpted from {data?.reviewSource} |
                <span> Date of Review: {data?.createdAt.slice(0, 10)} </span> |
                <span>
                  {" "}
                  Date of Experience: {data?.experienceDate.slice(0, 10)}
                </span>
              </div>
            </div>
            {/* overall rating */}
            <div>
              <span className="font-semibold text-[#3D454E]">
                Overall Rating of {data?.reviewerName}
              </span>
              <div className="rating overall-rating flex">
                {ratingDefault3(data?.clapbacRating)}
              </div>
            </div>
          </div>

          <div className="original-review ">
            <div className="flex items-center gap-3">
              <div className="stars flex">
                {ratingDefault(data?.clapbacRating)}
              </div>
              <strong className="review-title text-[#3D454E] font-semibold">
                {data?.reviewerName}’s Original Rating of {data?.company?.name}
              </strong>
            </div>
            <p>{data?.reviewMessage}</p>
          </div>

          <div className="clapback-review">
            <h3 className="text-lg font-semibold mb-1">
              {data?.user?.firstName}'s Clapbac Review
            </h3>
            <div className="">
              <strong className="clapback-author">
                {/* Business Owners Clapbac Review */}
                {data?.user?.firstName + " " + data?.user?.lastName}
              </strong>
              <span className="ml-3">{data?.createdAt.slice(0, 10)}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="stars flex">
                {ratingDefault2(data?.reviewRating)}
              </div>
              <div className="font-bold text-[#3D454E] text-sm">
                {data?.company?.name}.’s Rating of {data?.reviewerName}
              </div>
            </div>
            {/* description  */}
            <p>{data?.clapbacMessage}</p>
          </div>

          <Link
            href={`/clapbac-reviews/${data.company._id}`}
            target="_blank"
            className="flex justify-center cursor-pointer mt-9"
          >
            <Button className=" text-white cursor-pointer">
              View Full Review
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
