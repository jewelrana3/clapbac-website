import React from "react";
import CarouselPage from "./Carusel";

export default function LatestLoudVoices() {
  return (
    <div>
      <CarouselPage />
      <div className="bg-[#E9E9E9] px-10 py-20 sm:text-2xl font-bold text-center">
        <p>
          One-star warriors, keyboard critics — your spotlight’s on. <br /> We
          don’t just read reviews, we call it out, we clap back. <br /> Loudly.
          Fairly. No Filters. No Passes.
        </p>
      </div>
    </div>
  );
}
