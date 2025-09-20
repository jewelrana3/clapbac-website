import Image from "next/image";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import left from "../../public/clapbac-reviews/left.svg";

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

export default function ReviewCommentDetails({
  reply,
  index,
}: {
  reply: any;
  index: number;
}) {
  return (
    <div className=" flex flex-col xl:flex-row ">
      <div
        className={`flex items-start gap-3 `}
        style={{ marginLeft: index === 0 ? 0 : index * 55 }}
      >
        {/* left logo */}
        <Image src={left} alt="Logo" className="hidden sm:block" />

        <div className="">
          <div className="flex flex-row items-center gap-2">
            {/* user profile image */}
            <div>
              {reply.image && (
                <Image
                  src={reply?.image}
                  alt="Logo"
                  className="w-8 h-8 sm:w-20 sm:h-20 rounded-full"
                />
              )}
            </div>
            <div className="font-semibold text-sm">
              <div>
                <div>
                  <p>
                    {reply.role === "Owner"
                      ? "RESPONSE FROM..."
                      : "CLAPBAC FROM..."}
                  </p>
                  {/* name & owner */}
                  <div className="flex gap-1 ">
                    <p>{reply?.name}</p>
                    <p className="font-medium">{reply?.owner}</p>
                  </div>
                  <p>{reply?.subName}</p>
                  {reply.author}
                </div>
              </div>
              {reply.business && (
                <span className="text-gray-500 text-xs">{reply.business}</span>
              )}
              <p className="text-xs text-gray-400 mb-1">{reply.date}</p>
            </div>
          </div>

          <p className="text-sm text-gray-700 mt-1">{reply.content}</p>
        </div>
      </div>
      <div className="text-nowrap my-4 lg:my-0 ml-14 xl:ml-0">
        <p className="font-bold text-md">{reply.ownerside}</p>

        {reply.ratings && (
          <p className="mt-1 flex gap-1 xl:justify-end ">
            {ratingCaculate(reply.ratings)}
          </p>
        )}
      </div>
    </div>
  );
}
