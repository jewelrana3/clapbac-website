import { categoryCards } from "@/demoData/bussiness-card";
import Container from "@/layout/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BussinessCard() {
  return (
    <Container className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 py-16">
      {categoryCards.map((item, index) => (
        <Link href="/food-drink" key={index}>
          <div className="bg-[#C5D92D] p-3  shadow-lg">
            <div className="bg-white  h-32 flex items-center justify-center gap-4 shadow-md">
              <div className="">
                <Image
                  className="p-1"
                  src={item.icon}
                  width={70}
                  height={70}
                  alt={item.title}
                />
              </div>
              <h2 className="text-xl font-semibold text-black">{item.title}</h2>
            </div>
          </div>
        </Link>
      ))}
    </Container>
  );
}
