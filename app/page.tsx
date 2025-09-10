import AboutFooter from "@/components/pages/about/AboutFooter";
import FeatureBusiness from "@/components/pages/home/FeatureBussiness";
import HeroSection from "@/components/pages/home/HeroSection";
import LatestLoudVoices from "@/components/pages/home/LatestLoudVoices";
import React from "react";

export default function Home() {
  return (
    <div className="mt-">
      <HeroSection />
      <LatestLoudVoices />
      <FeatureBusiness />
      <AboutFooter />
    </div>
  );
}
