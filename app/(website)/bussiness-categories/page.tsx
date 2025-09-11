import BussinessCard from "@/components/pages/bussinessCategory/BussinessCard";
import ProfileSection from "@/components/share/ProfileSection";
import React from "react";
import profile from "../../../public/bussiness-card/profile-bussiness.png";
import SectionTitle from "@/components/share/SectionTitle";

export default function BussinessCategories() {
  return (
    <div className="mt-16">
      <SectionTitle
        title="Reviewers"
        subTitle="Everyone has an opinion—start by finding theirs."
      />
      <BussinessCard />
      <ProfileSection
        image={profile}
        des="We’ve dealt with unfair reviews for years — people exaggerating or straight-up lying, and there was nothing we could do. This site changes the game. Now reviewers are held accountable, and the truth actually gets a chance to surface. Finally, a platform that defends businesses, not just complainers."
        shortName="— Tasha R., Owner of Ritual Goods Co."
      />
    </div>
  );
}
