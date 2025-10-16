import { ratingCaculate } from "@/components/share/rating/ratingCaculate";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import React from "react";

export default function ReviewsDetails({
  data,
  trigger,
}: {
  data: any;
  trigger: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[925px]">
        <div className="mt-4 p-4">
          <div className="review-header">
            <div>
              <strong>
                {data?.user?.firstName + " " + data?.user?.lastName}
              </strong>{" "}
              <span className="location">
                {data?.company?.address || "N/A"}
              </span>
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
                Overall Reviewer Rating
              </span>
              <div className="rating overall-rating flex">
                {ratingCaculate(data?.clapbacRating)}
              </div>
            </div>
          </div>

          <div className="original-review ">
            <div className="flex items-center gap-3">
              <div className="stars flex">
                {ratingCaculate(data?.clapbacRating)}
              </div>
              <strong className="review-title text-[#3D454E] font-semibold">
                The experience was meh.
              </strong>
            </div>
            <p>{data?.reviewMessage}</p>
          </div>

          <div className="clapback-review">
            <div className="">
              <strong className="clapback-author">
                Pete Wells’s Clapbac Review
              </strong>
              <span className="ml-3">{data?.createdAt.slice(0, 10)}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="stars flex">
                {ratingCaculate(data?.reviewRating)}
              </div>
              <div className="font-bold text-[#3D454E] text-sm">
                Clapbac Rating of this Review
              </div>
            </div>
            {/* description  */}
            <p>{data?.clapbacMessage}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
