import Image from "next/image";
import React from "react";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import one from "../../../public/food-drink/one.png";
import Link from "next/link";
import { truncateText } from "@/utils/truncateText";
import UserImage from "@/components/share/customImageHandle/UserImage";

export default function ReviewersCard({ item }: { item: any }) {
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
          <FaRegStar key={`empty-${i}`} className="text-gray-400 text-2xl" />
        ))}
      </>
    );
  };

  // date format
  // const formattedDate = (date: string) => {
  //   return format(parseISO(date), "d/ d/ yyyy");
  // };

  console.log("item", item);

  return (
    <Link href={`/clapbac-reviews/${item?.company?._id}`}>
      <div className="border-[#C5D92D] border-8 mb-8 p-4">
        <div className="bg-white flex flex-col md:flex-row lg:items-center gap-10 p-4">
          <div className="flex flex-col ">
            <h2 className="text-lg md:text-xl font-bold text-gray-800">
              {item?.reviewerName}
            </h2>
            <p className="text-sm text-gray-600 mb-2">
              {item?.reviewerAddress}
            </p>

            <div className="flex items-center text-orange-400 text-sm">
              {renderStars(item.clapbacRating)}
            </div>
          </div>

          {/* Middle: Logo + Reviewer From */}
          <div className="flex gap-3 ">
            <div>
              <div className="flex gap-3 ">
                {/* <Image
                  src={one}
                  alt="Arabica Coffee"
                  className="w-14 h-14 rounded-full object-contain"
                /> */}
                <UserImage
                  item={item?.company?.logo}
                  name="Arabica Coffee"
                  className="w-14 h-14 rounded-full object-contain"
                />
                <div>
                  <p className="text-xs text-gray-600 uppercase">
                    Clapbac from...
                  </p>
                  <p className="text-sm font-bold text-gray-800">
                    {item.user?.firstName} {item.user?.lastName}
                    <span className="font-normal">,{item?.user?.title}</span>
                  </p>
                  <p className="text-sm text-gray-700">{item?.company?.name}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(item?.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="w-full mt-2 text-sm text-gray-700">
                {truncateText(item?.clapbacMessage, 60)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
