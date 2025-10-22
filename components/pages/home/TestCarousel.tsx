"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import Container from "@/layout/Container";
import { usePathname } from "next/navigation";
import { myFetch } from "@/utils/myFetch";
import UserImage from "@/components/share/customImageHandle/UserImage";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function TestCarousel() {
  const [featuresCompany, setFeaturesCompany] = React.useState<any>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const featuresCompany = await myFetch("/reviews/reviewers");
      setFeaturesCompany(featuresCompany?.data);
    };

    fetchData();
  }, []);
  const pathname = usePathname();

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
  return (
    <div className="my-10 py-20 lg:max-w-screen-2xl mx-auto">
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: false,
        // }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        {featuresCompany?.map((card: any, index: number) => (
          <SwiperSlide key={index}>
            <div
              className={`${
                pathname === "/reviewers"
                  ? "border-16 border-[#E1E1E1]"
                  : "border-16 border-[#C5D92D]"
              } h-[350px] flex flex-col w-[90%] mx-auto`}
            >
              <div className="bg-white h-full mx-auto flex flex-col p-3">
                <CardContent className="flex flex-col justify-between">
                  {/* Profile Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <UserImage item={card?.user?.image} />
                    <div>
                      <h3 className="font-bold">
                        {card.user.firstName + " " + card.user.lastName}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {card.company.name}
                      </p>
                    </div>
                  </div>

                  <h1 className="font-semibold">
                    {card.reviewRating > 3
                      ? "GAVE PROPS TO..."
                      : "CLAPBAC’D ON..."}
                  </h1>

                  {/* Action and Target */}
                  <div className="mb-2">
                    <p className="text-xs font-semibold text-gray-700">
                      {card.clapbacTitle}
                    </p>
                    <h2 className="text-xl font-bold">{card?.reviewerName}</h2>
                  </div>

                  {/* Star Rating */}
                  <div className="flex space-x-1 mb-3">
                    {renderStars(card.reviewRating)}
                  </div>

                  {/* Review */}
                  <p className="text-sm text-gray-800 font-semibold flex-grow">
                    {card.reviewMessage.slice(0, 200)}...
                  </p>
                </CardContent>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
