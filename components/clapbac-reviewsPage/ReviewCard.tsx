import Link from "next/link";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const review = {
  reviewer: {
    name: "Nancy B.",
    location: "Los Angeles, CA",
    rating: 2,
    date: "2/10/25",
    experienceDate: "2/9/25",
  },
  excerpt: {
    headline: "Don’t even bother coming here.",
    content: `Proin dolor erat, efficitur a pellentesque id, auctor in augue. Vivamus et lorem auctor, maximus sapien condimentum, viverra nisl. Aliquam vitae accumsan eros. Vestibulum non ante risus. Aliquam placerat nibh ante, vitae faucibus est egestas sed. Quisque mi erat, imperdiet tincidunt bibendum eu, scelerisque in massa. Curabitur suscipit nibh sed nisi dictum volutpat. In convallis ac massa non tincidunt.`,
  },
  source: "Yelp",
};

const ReviewCard = () => {
  const { reviewer, excerpt, source } = review;

  const ratingCaculate = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-[#F05223] text-2xl " />
        ))}

        {hasHalf && (
          <FaRegStarHalfStroke className="text-[#F05223] text-2xl " />
        )}

        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-[#F05223] text-2xl " />
        ))}
      </>
    );
  };

  return (
    <div className="border-b pb-6 mb-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg">{reviewer.name}</h3>
          <p className="text-sm text-gray-500">{reviewer.location}</p>
        </div>
        <div className="text-right">
          <p className="text-sm  text-gray-500">Overall Reviewer Rating</p>
          <p className="flex gap-1"> {ratingCaculate(4)}</p>
        </div>
      </div>

      {/* Metadata */}
      <p className="text-xs text-gray-500 mt-2">
        Original Review Excerpted from {source} | Date of Review:{" "}
        {reviewer.date} | Date of Experience: {reviewer.experienceDate}
      </p>

      {/* Excerpt */}
      <div className="mt-4">
        <p className="font-semibold text-gray-800 flex flex-col sm:flex-row items-center mb-2">
          <span className="flex items-center gap-1 text-xl text-gray-400 mr-2">
            <span className="bg-[#D9D9D9] px-1">★</span>
            <span className="bg-[#D9D9D9] px-1">★</span>
            <span className="bg-[#D9D9D9] px-1">★</span>
            <span className="bg-[#D9D9D9] px-1">☆</span>
            <span className="bg-[#D9D9D9] px-1">☆</span>
          </span>

          {excerpt.headline}
        </p>
        <p className="text-sm text-gray-700 ">{excerpt.content}</p>
        <Link
          href="#"
          className="text-[#1AA1B1] text-sm mt-2  flex justify-end underline"
        >
          Read Full Review
        </Link>
      </div>
    </div>
  );
};

export default ReviewCard;
