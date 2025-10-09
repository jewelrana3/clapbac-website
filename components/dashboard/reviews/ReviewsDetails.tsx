import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import React from "react";

export default function ReviewsDetails({
  trigger,
}: {
  trigger: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[925px]">
        <div className="mt-4 p-4">
          <div className="review-header">
            <div>
              <strong>Drew J.</strong>{" "}
              <span className="location">Los Angeles, CA</span>
              <div className="meta flex gap-3">
                Original Review Excerpted from Yelp |
                <span> Date of Review: 3/15/25 </span> |
                <span> Date of Experience: 3/7/25 </span>
              </div>
            </div>
            {/* overall rating */}
            <div>
              <span className="font-semibold text-[#3D454E]">
                Overall Reviewer Rating
              </span>
              <div className="rating overall-rating">★★☆☆☆</div>
            </div>
          </div>

          <div className="original-review ">
            <div className="flex items-center gap-3">
              <div className="stars">★☆☆☆☆</div>
              <strong className="review-title text-[#3D454E] font-semibold">
                The experience was meh.
              </strong>
            </div>
            <p>
              “In vehicula velit vel sollicitudin malesuada. Quisque posuere
              purus sit amet dictum ultricies. Phasellus eget elit at libero
              porta porttitor. In malesuada libero fermentum nulla bibendum
              elementum. Proin dolor erat, efficitur a pellentesque id, auctor
              in augue.”
            </p>
          </div>

          <div className="clapback-review">
            <div className="">
              <strong className="clapback-author">
                Pete Wells’s Clapbac Review
              </strong>
              <span className="ml-3">2/10/25</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="stars">★★☆☆☆</div>
              <div className="font-bold text-[#3D454E] text-sm">
                Clapbac Rating of this Review
              </div>
            </div>
            {/* description  */}
            <p>
              Nunc arcu dui, bibendum vel semper in, rhoncus eget nulla. Nullam
              tempor faucibus ornare. Aliquam vestibulum pharetra est nec
              fringilla. Nulla congue sem a massa gravida viverra...
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
