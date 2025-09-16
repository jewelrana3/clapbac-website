"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { clapbacCards } from "@/demoData/loudVoice";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import Image from "next/image";
import Container from "@/layout/Container";
import { usePathname } from "next/navigation";

export default function CarouselPage() {
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
          <FaRegStar key={`empty-${i}`} className="text-[#F05223] text-2xl" />
        ))}
      </>
    );
  };

  return (
    <Container className="py-20 lg:max-w-screen-2xl">
      <h1 className="text-[#F05223] mb-2 text-2xl font-bold">
        Latest Loud Voices
      </h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className=" "
      >
        <CarouselContent>
          {clapbacCards.map((card, index) => (
            <CarouselItem
              key={index}
              className="basis-1/1 md:basis-1/2 xl:basis-1/4"
            >
              <Card
                className={`${
                  pathname === "/reviewers"
                    ? "border-16 border-[#E1E1E1]"
                    : "border-16 border-[#C5D92D] "
                } h-[350px] flex flex-col w-[90%] mx-auto`}
              >
                <div className="bg-white h-full mx-auto flex flex-col ">
                  <CardContent className="flex flex-col justify-between">
                    {/* Profile Header */}
                    <div className="flex items-center space-x-3 mb-4">
                      <Image
                        src={card.user.avatarUrl}
                        alt={card.user.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-bold">{card.user.name}</h3>
                        <p className="text-sm text-gray-600">
                          {card.user.business}
                        </p>
                      </div>
                    </div>

                    {/* Action and Target */}
                    <div className="mb-2">
                      <p className="text-xs font-semibold text-gray-700">
                        {card.action}
                      </p>
                      <h2 className="text-xl font-bold">{card.target.name}</h2>
                    </div>

                    {/* Star Rating */}
                    <div className="flex space-x-1 mb-3">
                      {renderStars(card.target.rating)}
                    </div>

                    {/* Review */}
                    <p className="text-sm  text-gray-800 font-semibold flex-grow">
                      {card.review}
                    </p>
                  </CardContent>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-[-40px]" />
        <CarouselNext className="right-[-40px]" />
      </Carousel>
    </Container>
  );
}
