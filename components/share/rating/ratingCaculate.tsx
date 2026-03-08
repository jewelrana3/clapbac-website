import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import {
  IoIosStarHalf,
  IoIosStarOutline,
  IoMdStar,
  IoMdStarHalf,
} from "react-icons/io";

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

export const ratingDefault = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex gap-2">
      {/* full stars */}
      {[...Array(fullStars)].map((_, i) => (
        <div
          key={`full-${i}`}
          className="w-8 h-8 flex items-center justify-center bg-[#A0A0A0]"
        >
          <IoMdStar className="text-white text-2xl" />
        </div>
      ))}

      {/* half star */}
      {hasHalf && (
        <div className="w-8 h-8 flex items-center justify-center bg-gray-400">
          <IoMdStarHalf className="text-white text-2xl" />
        </div>
      )}

      {/* empty stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <div
          key={`empty-${i}`}
          className="w-8 h-8 flex items-center justify-center bg-gray-300"
        >
          <IoIosStarOutline className="text-white text-2xl" />
        </div>
      ))}
    </div>
  );
};
export const ratingDefault2 = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex gap-2">
      {/* full stars */}
      {[...Array(fullStars)].map((_, i) => (
        <div
          key={`full-${i}`}
          className="w-8 h-8 flex items-center justify-center bg-[#F05223]"
        >
          <IoMdStar className="text-white text-2xl" />
        </div>
      ))}

      {/* half star */}
      {hasHalf && (
        <div className="w-8 h-8 flex items-center justify-center bg-[#F05223]">
          <IoMdStarHalf className="text-white text-2xl" />
        </div>
      )}

      {/* empty stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <div
          key={`empty-${i}`}
          className="w-8 h-8 flex items-center justify-center bg-gray-300"
        >
          <IoIosStarOutline className="text-white text-2xl" />
        </div>
      ))}
    </div>
  );
};
export const ratingDefault3 = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex gap-2">
      {/* full stars */}
      {[...Array(fullStars)].map((_, i) => (
        <div
          key={`full-${i}`}
          className="w-8 h-8 flex items-center justify-center "
        >
          <IoMdStar className="fill-[#F05223] text-3xl" />
        </div>
      ))}

      {/* half star */}
      {hasHalf && (
        <div className="w-8 h-8 flex items-center justify-center ">
          <IoMdStarHalf className="fill-[#F05223] text-3xl" />
        </div>
      )}

      {/* empty stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <div key={`empty-${i}`} className="w-8 h-8 ">
          <IoMdStar className="fill-[#9CA3AF] text-3xl" />
        </div>
      ))}
    </div>
  );
};
