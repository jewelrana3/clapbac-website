import AboutFooter from "@/components/pages/about/AboutFooter";
import Description from "@/components/pages/home/Description";
import FeatureBusiness from "@/components/pages/home/FeatureBussiness";
import HeroSection from "@/components/pages/home/HeroSection";
import LatestLoudVoices from "@/components/pages/home/LatestLoudVoices";
import React from "react";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <LatestLoudVoices />

      <Description
        className="md:w-[45%] mx-auto"
        description="One-star warriors, keyboard critics — your spotlight’s on.
We don’t just read reviews, we call it out, we clap back.
Loudly. Fairly. No Filters. No Passes."
      />
      <FeatureBusiness />
      <AboutFooter />
    </div>
  );
}
