import React from "react";
import { parseISO, format } from "date-fns";
import {
  ratingCaculate,
  ratingCaculate2,
} from "../share/rating/ratingCaculate";

const ReviewCard = ({ reviews }: { reviews: any }) => {
  // date
  const formattedDate = (date: string) => {
    return format(parseISO(date), "MMMM d, yyyy");
  };

  return (
    <div className="border-b   pb-6 mb-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg">{reviews?.reviewerName}</h3>
          {/* location */}
          <p className="text-sm ">Los Angeles, CA</p>
        </div>

        <div className="text-right">
          <p className="text-sm  text-gray-500">Overall Reviewer Rating</p>
          {reviews?.reviewRating && (
            <p className="flex gap-1">
              {ratingCaculate(reviews?.reviewRating)}
            </p>
          )}
        </div>
      </div>

      <hr className="mt-4" />

      {/* date */}
      {reviews?.createdAt && reviews?.updatedAt && (
        <p className="text-xs text-gray-500 mt-2">
          Original Review Excerpted from {reviews?.reviewSource} | Date of
          Review: {new Date(reviews?.createdAt).toISOString().split("T")[0]} |
          Date of Experience:{" "}
          {new Date(reviews?.experienceDate).toISOString().split("T")[0]}
        </p>
      )}

      {/* Excerpt */}
      <div className="mt-4">
        <p className="font-semibold text-gray-800 flex flex-col sm:flex-row items-center mb-2">
          <span className="flex items-center gap-1 text-xl text-gray-400 mr-2">
            {reviews?.reviewRating && (
              <span className="flex gap-1">
                {ratingCaculate2(reviews?.reviewRating)}
              </span>
            )}
          </span>
          {reviews?.clapbacTitle}
        </p>
        <p className="text-sm text-gray-700 ">{reviews?.clapbacMessage}</p>
        <a
          href={reviews?.sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1AA1B1] text-sm mt-2  flex justify-end underline"
        >
          Read Full Review
        </a>
      </div>
    </div>
  );
};

export default ReviewCard;
