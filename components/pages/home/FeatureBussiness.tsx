import React from "react";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import Image from "next/image";
import Container from "@/layout/Container";
import { myFetch } from "@/utils/myFetch";

export default async function FeatureBusiness() {
  const featuresBussiness = await myFetch("/companies?isFeatured=true");

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
    <Container className="">
      <div className=" py-20">
        <h2 className="text-orange-600 text-2xl font-bold mb-4">
          Featured Businesses
        </h2>
        <div className=" grid md:grid-cols-4 gap-5 ">
          {featuresBussiness?.data?.map((item: any) => (
            <div
              key={item?._id}
              className="bg-[#F5F5F5] p-5 text-[#3D454E] flex flex-col"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.logo}`}
                alt={item.category.name}
                width={300}
                height={80}
                className="w-full flex-1"
              />
              <div className="mt-5">
                <h3 className="font-bold text-xl lg:text-2xl">{item.name}</h3>
                <div className="font-bold lg:text-xl flex gap-5 items-center mt-2">
                  <div className="lg:flex gap-5">
                    <div className="flex items-center">
                      {renderStars(item.avgRating)}
                    </div>
                    <p className="mt-1 lg:mt-0">
                      4.5 ({item?.reviewCount} Reviews)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
