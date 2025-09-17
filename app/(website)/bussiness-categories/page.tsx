import BussinessCard from "@/components/pages/bussinessCategory/BussinessCard";
import ProfileSection from "@/components/share/ProfileSection";
import React from "react";
import profile from "../../../public/bussiness-card/profile-bussiness.png";
import SectionTitle from "@/components/share/SectionTitle";

import one from "../../../public/share-icon/one.svg";
import two from "../../../public/share-icon/two.svg";
import Image from "next/image";

const des = (
  <section className="flex  gap-4 bg-gray-100 ">
    {/* Left quote image */}
    <div className="flex-shrink-0">
      <Image src={two} alt="Quote Start" className="w-10 md:w-[60px] mb-1" />
    </div>

    {/* Text block */}

    <p className="text-lg text-black leading-10">
      We’ve dealt with unfair reviews for years — people exaggerating or
      straight-up <br /> lying, and there was nothing we could do. This site
      changes the game. Now <br /> reviewers are held accountable, and the truth
      actually gets a chance to surface. <br /> Finally, a platform that defends
      businesses, not just complainers.
      <Image
        src={one}
        alt="Quote End"
        className="w-10 md:w-[60px] ml-2 inline"
      />
    </p>

    {/* Right quote image */}
  </section>
);

export default function BussinessCategories() {
  return (
    <div className="mt-16">
      <SectionTitle
        title="Business Categories"
        subTitle="Find Out Who’s Worth It. Type It In. Expose or Endorse."
      />
      <BussinessCard />
      <ProfileSection
        image={profile}
        des={des}
        shortName="— Tasha R., Owner of Ritual Goods Co."
      />
    </div>
  );
}
