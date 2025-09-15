import Image from "next/image";
import React from "react";
import left from "../../public/clapbac-reviews/left.svg";

import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import CommentsSection from "./CommentsSection";
export default function ReviewAndComment({ reviews }: { reviews: any[] }) {
  const ratingCaculate = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar
            key={`full-${i}`}
            className="text-[#F05223] text-2xl bg-[#D9D9D9]"
          />
        ))}

        {hasHalf && (
          <FaRegStarHalfStroke className="text-[#F05223] text-2xl bg-[#D9D9D9]" />
        )}

        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar
            key={`empty-${i}`}
            className="text-[#F05223] text-2xl bg-[#D9D9D9]"
          />
        ))}
      </>
    );
  };
  return (
    <div className="space-y-10">
      {reviews.map((review) => {
        return (
          <div key={review.id} className=" p-6 bg-white">
            {/* Review Excerpt */}
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                {review.reviewer.fullReview}
              </p>
            </div>

            {/* Replies */}
            <div className=" pl-4 space-y-6">
              {review.replies.map((reply: any, index: number) => {
                return (
                  <div key={reply.id} className=" flex flex-col lg:flex-row ">
                    <div
                      className={`flex items-start gap-3 `}
                      style={{ marginLeft: index === 0 ? 0 : index * 12 }}
                    >
                      <Image
                        src={left}
                        alt="Logo"
                        className="hidden sm:block"
                      />

                      <div className="">
                        <div className="flex flex-row items-center gap-2">
                          <div>
                            {reply.image && (
                              <Image
                                src={reply?.image}
                                alt="Logo"
                                className="w-16 h-16 sm:w-20 sm:h-20"
                              />
                            )}
                          </div>
                          <div className="font-semibold text-sm">
                            <p>
                              {reply.role === "Owner"
                                ? "From Clapbac"
                                : "From Response"}
                            </p>
                            {reply.author}
                            {reply.business && (
                              <span className="text-gray-500 text-xs">
                                {reply.business}
                              </span>
                            )}
                            <p className="text-xs text-gray-400 mb-1">
                              {reply.date}
                            </p>
                          </div>
                        </div>

                        <p className="text-sm text-gray-700 mt-1">
                          {reply.content}
                        </p>
                      </div>
                    </div>
                    <div className="text-nowrap my-4 lg:my-0">
                      <p className="font-bold text-md">{reply.ownerside}</p>

                      {reply.ratings && (
                        <p className="mt-1 flex gap-1 lg:justify-end ">
                          {ratingCaculate(reply.ratings)}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <CommentsSection />
          </div>
        );
      })}
    </div>
  );
}
