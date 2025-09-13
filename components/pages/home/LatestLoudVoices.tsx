"use client";

import React from "react";
import CarouselPage from "./Carusel";
import Description from "./Description";
import { usePathname } from "next/navigation";

export default function LatestLoudVoices() {
  const pathname = usePathname();

  return (
    <div>
      <CarouselPage />
      {pathname === "/reviews" && (
        <Description
          className="md:w-[40%] mx-auto"
          description=" One-star warriors, keyboard critics — your spotlight’s on. We
        don’t just read reviews, we call it out, we clap back. Loudly.
        Fairly. No Filters. No Passes."
        />
      )}
    </div>
  );
}
