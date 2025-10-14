import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

export const ratingCaculate = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className="text-[#F05223] text-2xl " />
      ))}

      {hasHalf && <FaRegStarHalfStroke className="text-[#F05223] text-2xl " />}

      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} className="text-[#F05223] text-2xl " />
      ))}
    </>
  );
};
export const ratingCaculate2 = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className="bg-[#D9D9D9] px-1 text-2xl " />
      ))}

      {hasHalf && (
        <FaRegStarHalfStroke className="bg-[#D9D9D9] px-1 text-2xl " />
      )}

      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} className="bg-[#D9D9D9] px-1 text-2xl " />
      ))}
    </>
  );
};
