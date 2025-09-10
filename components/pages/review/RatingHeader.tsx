"use client";
import { Star } from "lucide-react";
import React, { useState } from "react";

export default function RatingHeader() {
  const [rating, setRating] = useState(0);
  return (
    <div className="lg:flex justify-between">
      <div className="md:flex items-center space-x-1 ">
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <div
              key={star}
              className="bg-[#E1E1E1] p-2 cursor-pointer"
              onClick={() => setRating(star)}
            >
              <Star
                className={`w-6 h-6 ${
                  rating >= star
                    ? "text-yellow-500 fill-yellow-500"
                    : "text-gray-400"
                }`}
                fill={rating >= star ? "#facc15" : "none"}
              />
            </div>
          ))}
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
