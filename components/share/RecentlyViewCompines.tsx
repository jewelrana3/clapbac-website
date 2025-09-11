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

export default function RecentlyViewCompanies({ title }: { title: any }) {
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
          {title.map((card: any, index: number) => (
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

                  <p className="text-lg font-bold">{card.title}</p>
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
