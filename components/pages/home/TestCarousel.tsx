"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import * as React from "react";
import { CardContent } from "@/components/ui/card";

import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { myFetch } from "@/utils/myFetch";
import UserImage from "@/components/share/customImageHandle/UserImage";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

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
  const swiperRef = React.useRef<any>(null); // Add ref to control Swiper

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
    <div className=" py-20 lg:max-w-screen-2xl mx-auto">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store swiper instance in ref
        spaceBetween={0}
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 0px
          0: {
            slidesPerView: 1,
          },
          // when window width is >= 768px (medium devices)
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px (large devices)
          1100: {
            slidesPerView: 3,
          },
          1380: {
            slidesPerView: 4,
          },
        }}
        // pagination={{
        //   clickable: false,
        // }}

        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        // navigation={true}
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
              } w-[80%] mx-auto h-[370px]`}
            >
              <div className="bg-white mx-auto p-3">
                <CardContent className="">
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
                    {card.reviewMessage.slice(0, 180)}...
                  </p>
                </CardContent>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Custom Navigation Buttons */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-2xl text-[#F05223] hover:scale-110 transition cursor-pointer"
        >
          <BiSolidLeftArrow size={38} />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-2xl text-[#F05223] hover:scale-110 transition cursor-pointer"
        >
          <BiSolidRightArrow size={38} />
        </button>
      </Swiper>
    </div>
  );
}
