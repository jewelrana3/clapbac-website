import LatestLoudVoices from "@/components/pages/home/LatestLoudVoices";
import RecentlyViewCompanies from "@/components/share/RecentlyViewCompines";
import SectionTitle from "@/components/share/SectionTitle";
import React from "react";

import one from "../../public/food-drink/one.png";
import two from "../../public/food-drink/four.png";
import three from "../../public/food-drink/three.png";
import four from "../../public/food-drink/five.png";

export default function Reviewers() {
  const businessNames = [
    { title: "Danny K. on Arabica Coffee", image: one },
    { title: "Sasha C. on Loop Coffee", image: two },
    { title: "Nancy B. on Cenchi Cafe", image: three },
    { title: "Keisha V. on Ejji Coffee", image: four },
  ];

  return (
    <div>
      <SectionTitle
        title="Reviewers"
        subTitle="Everyone has an opinion—start by finding theirs."
      />

      <LatestLoudVoices />
      <RecentlyViewCompanies title={businessNames} />
    </div>
  );
}
