import React, { useState, useEffect } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

type Props = {
  initialRating?: number;
  starsLength?: number;
  dimension?: number;
  starColor?: string;
  starEmptyColor?: string;
  isHalfRatingEnabled?: boolean;
  onRatingChange?: any;
};

const RenderStars = ({
  initialRating = 0,
  starsLength = 5,
  dimension = 24,
  starColor = "#F05223",
  starEmptyColor = "lightgray",
  isHalfRatingEnabled = true,
  onRatingChange,
}: Props) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => setRating(initialRating), [initialRating]);

  const getRating = (e: React.MouseEvent, i: number) => {
    if (!isHalfRatingEnabled) return i + 1;
    const { left, width } = e.currentTarget.getBoundingClientRect();
    return e.clientX - left < width / 2 ? i + 0.5 : i + 1;
  };

  return (
    <div className="flex gap-1">
      {Array.from({ length: starsLength }).map((_, i) => {
        const active = hover || rating;
        const full = i + 1 <= active;
        const half = i + 0.5 === active;

        return (
          <div
            key={i}
            onMouseMove={(e) =>
              isHalfRatingEnabled && setHover(getRating(e, i))
            }
            onMouseLeave={() => setHover(0)}
            onClick={(e) => {
              const rating = getRating(e, i);
              setRating(rating);
              onRatingChange(rating);
            }}
            style={{ width: dimension, height: dimension, cursor: "pointer" }}
          >
            {full ? (
              <FaStar color={starColor} size={dimension} />
            ) : half ? (
              <FaStarHalfAlt color={starColor} size={dimension} />
            ) : (
              <FaRegStar color={starEmptyColor} size={dimension} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RenderStars;
