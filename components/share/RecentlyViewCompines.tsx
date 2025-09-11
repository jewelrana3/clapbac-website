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
import Image from "next/image";
import Container from "@/layout/Container";

import one from "../../public/food-drink/one.png";
import two from "../../public/food-drink/four.png";
import three from "../../public/food-drink/three.png";
import four from "../../public/food-drink/five.png";

export default function RecentlyViewCompanies() {
  const businessNames = [
    { title: "Arabica Coffee", image: one },
    { title: "Loop Coffee", image: two },
    { title: "Cenchi Cafe", image: three },
    { title: "Eiji Coffee Corner", image: four },
  ];

  return (
    <Container className="py-32">
      <h1 className=" mb-2 text-2xl font-bold">Recently Viewed Companies</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full "
      >
        <CarouselContent>
          {businessNames.map((card, index) => (
            <CarouselItem
              key={index}
              className="basis-1/1 md:basis-1/2 lg:basis-1/4"
            >
              <Card className="bg-[#F5F5F5] h-full flex flex-col border-none">
                <CardContent className="flex flex-col justify-between">
                  {/* Profile Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <Image
                      src={card.image}
                      alt={card.title}
                      className="w-full  object-cover"
                    />
                  </div>
                  <p className="text-2xl font-bold">{card.title}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="" />
        <CarouselNext className="" />
      </Carousel>
    </Container>
  );
}
