import Description from "@/components/pages/home/Description";
import ReviewerRatingForm from "@/components/pages/review/ReviewerRatingForm";
import SectionTitle from "@/components/share/SectionTitle";
import React from "react";

export default function Reviewer() {
  return (
    <div className="mt-12">
      <SectionTitle
        title="Rate a Reviewer"
        subTitle="Spotlight the winners, warn about the losers—your opinion matters."
      />

      <ReviewerRatingForm />

      <Description
        className="md:w-[45%] mx-auto"
        description="We exist to hold reviewers accountable, cut through the noise, and bring honesty back to reviews. No fluff. No filters. Just real people rating the raters — so everyone can make smarter choices with the truth in plain sight."
      />
    </div>
  );
}
