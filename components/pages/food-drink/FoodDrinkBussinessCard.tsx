import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import one from "../../../public/food-drink/one.png";

export default function FoodDrinkBussinessCard({ item }: { item: any }) {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-[#F05223] text-2xl" />
        ))}

        {hasHalf && <FaRegStarHalfStroke className="text-[#F05223] text-2xl" />}

        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-[#F05223] text-2xl" />
        ))}
      </>
    );
  };
  return (
    <Link href={`/clapbac-reviews/${item._id}`}>
      <div className=" shadow-lg  border-8 border-[#C5D92D] my-4">
        <div className="bg-white p-3 flex flex-col md:flex-row gap-7 justify-center items-center  shadow-md">
          <div className="flex items-center justify-center w-full max-w-[150px]">
            <Image
              src={
                item?.logo ? process.env.NEXT_PUBLIC_BASE_URL + item.logo : one
              }
              alt={item.name}
              width={100}
              height={100}
              className=" object-cover "
            />
          </div>

          <div className="basis-1/3">
            <h3 className="font-bold text-xl lg:text-2xl">{item?.name}</h3>
            <div className="font-bold lg:text-lg flex gap-5 items-center">
              <div className="my-2">
                <div className="flex items-center">
                  {renderStars(item.avgRating)}
                </div>
                <p className="my-2">
                  {item.avgRating} ({item.reviewCount} Reviews)
                </p>
                <p className="">{item.website}</p>
              </div>
            </div>
          </div>
          <div className="basis-2/3">
            <p className="text-left">
              {item.about ||
                "In vehicula velit vel sollicitudin malesuada. Quisque posuere purus sit amet dictum ultricies. Phasellus eget elit at libero porta porttitor. In malesuada libero fermentum nulla bibendum elementum. Proin dolor erat, efficitur a pellentesque id, auctor in augue."}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
