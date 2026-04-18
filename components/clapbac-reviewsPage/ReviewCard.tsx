import React from "react";
import { parseISO, format } from "date-fns";
import {
  ratingCaculate,
  ratingCaculate2,
} from "../share/rating/ratingCaculate";

const ReviewCard = ({ reviews: review }: { reviews: any }) => {
  // date
  const formattedDate = (date: string) => {
    return format(parseISO(date), "MMMM d, yyyy");
  };

  return (
    <div className="border-b   pb-6 mb-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg">{review?.reviewerName}</h3>
          <p className="text-sm">
            {review?.reviewerType} | {review?.reviewerConsequence}
          </p>
          <p className="text-sm ">{review?.reviewerAddress}</p>
        </div>

        <div className="text-right">
          <p className="text-sm font-semibold  text-gray-500">
            Overall Rating of {review?.reviewerName || "reviewer"}
          </p>
          {review?.reviewRating && (
            <p className="flex gap-1">{ratingCaculate(review?.reviewRating)}</p>
          )}
        </div>
      </div>

      <hr className="mt-4" />

      {/* date */}
      {review?.createdAt && review?.updatedAt && (
        <p className="text-xs text-gray-500 mt-2">
          Original Review Excerpted from {review?.reviewSource} | Date of
          Review: {new Date(review?.createdAt).toISOString().split("T")[0]} |
          Date of Experience:{" "}
          {new Date(review?.experienceDate).toISOString().split("T")[0]}
        </p>
      )}

      {/* Excerpt */}
      <div className="mt-4">
        <p className="font-semibold text-gray-800 flex flex-col sm:flex-row items-center mb-2">
          <span className="flex items-center gap-1 text-xl text-gray-400 mr-2">
            {review?.reviewRating && (
              <span className="flex gap-1">
                {ratingCaculate2(review?.reviewRating)}
              </span>
            )}
          </span>
          {/* {reviews?.clapbacTitle} */}
          <span>
            {review?.reviewerName}’s Original Rating of{" "}
            {review?.company?.name || "the company"}
          </span>
        </p>
        <p style={{ whiteSpace: "pre-line" }} className="text-gray-700 ">
          "{review?.reviewMessage}"
        </p>
        <a
          href={review?.sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1AA1B1] text-sm font-semibold mt-2  flex justify-end underline"
        >
          Read Full Review
        </a>
      </div>
    </div>
  );
};

export default ReviewCard;
