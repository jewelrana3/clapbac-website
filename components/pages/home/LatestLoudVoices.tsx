import React from "react";
import CarouselPage from "./Carusel";
import Description from "./Description";

export default function LatestLoudVoices() {
  return (
    <div>
      <CarouselPage />
      <Description
        className="md:w-[40%] mx-auto"
        description=" One-star warriors, keyboard critics — your spotlight’s on. We
        don’t just read reviews, we call it out, we clap back. Loudly.
        Fairly. No Filters. No Passes."
      />
    </div>
  );
}
