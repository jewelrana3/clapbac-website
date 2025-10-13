"use client";
import { StarRating } from "react-flexible-star-rating";

type Rating = {
  yourRating: number;
  bussinessRating: number;
};

type RatingHeaderProps = {
  setRating: React.Dispatch<React.SetStateAction<Rating>>;
};

export default function RatingHeader({ setRating }: RatingHeaderProps) {
  return (
    <div className="lg:flex justify-between">
      <div className="md:flex items-center space-x-1 ">
        <div className="flex gap-2">
          <StarRating
            starsLength={5}
            dimension={10}
            isHalfRatingEnabled={true}
            onRatingChange={(rating) =>
              setRating((prev) => ({
                ...prev,
                yourRating: rating,
              }))
            }
          />
        </div>
        <div className="inline-block bg-[#c6db24] text-black font-semibold px-4 py-3 rounded-md text-sm relative  clip-tag mt-2 md:mt-0">
          Choose Your Rating
        </div>
      </div>
      <p className="flex items-end mt-2 md:mt-0">
        <a href="#" className="text-sm text-[#3D454E] font-semibold">
          Read Our Review Guidelines
        </a>
      </p>
    </div>
  );
}
