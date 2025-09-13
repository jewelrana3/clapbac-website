import React from "react";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import coffeeImg from "../../../public/feature-bussiness/one.png";
import two from "../../../public/feature-bussiness/two.png";
import three from "../../../public/feature-bussiness/three.png";
import Image from "next/image";
import Container from "@/layout/Container";

const data = [
  {
    id: 1,
    title: "Combi Coffee",
    rating: 1.5,
    review: "4.5 (34 Reviews)",
    img: coffeeImg,
  },
  {
    id: 2,
    title: "Bruno Cafe",
    rating: 5,
    review: "5.0 (48 Reviews)",
    img: two,
  },
  {
    id: 3,
    title: "All Press Espresso",
    rating: 3.5,
    review: "3.5 (23 Reviews)",
    img: three,
  },
];

export default function FeatureBusiness() {
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
    <Container className=" max-w-screen-2xl">
      <div className="bg-white py-12">
        <h2 className="text-orange-600 text-2xl font-bold mb-4">
          Featured Businesses
        </h2>
        <div className=" grid md:grid-cols-3 gap-5 ">
          {data.map(({ id, title, rating, review, img }) => (
            <div
              key={id}
              className="bg-[#F5F5F5] p-5 text-[#3D454E] mb-6  gap-16"
            >
              <Image src={img} alt={title} className=" w-full" />
              <div className="mt-5">
                <h3 className="font-bold text-xl lg:text-2xl">{title}</h3>
                <div className="font-bold lg:text-xl flex gap-5 items-center mt-2">
                  <div className="lg:flex gap-5">
                    <div className="flex items-center">
                      {renderStars(rating)}
                    </div>
                    <p className="mt-1 lg:mt-0">{review}</p>
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
