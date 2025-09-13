import RecentlyViewCompanies from "@/components/share/RecentlyViewCompines";
import SectionTitle from "@/components/share/SectionTitle";
import React from "react";

import one from "../../../public/food-drink/one.png";
import two from "../../../public/food-drink/four.png";
import three from "../../../public/food-drink/three.png";
import four from "../../../public/food-drink/five.png";
import Container from "@/layout/Container";
import CategoryHeader from "@/components/pages/food-drink/CategoryHeader";
import Pagination from "@/components/share/Pagination";
import RelatedCategories from "@/components/pages/food-drink/RalatedCategories";
import ReviewersCard from "@/components/pages/reviewers/ReviewersCard";
import { reviewers } from "@/demoData/reviewers";
import LatestLoudVoices from "@/components/pages/home/LatestLoudVoices";

const reviewerIndexOptions = [
  "Most Controversial",
  "Most Highly Rated",
  "Most Flagged",
  "Most Hilarious",
  "Alphabetical",
];

const reviewerTypes = [
  "The Drama Queen",
  "The Under-Tipper",
  "The One-Star Sniper",
  "The Essayist",
  "The Karen",
  "Star Legend",
  "VIP",
];

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

      <Container className="mt-10">
        <section className="flex flex-col lg:flex-row gap-12">
          <div className="basis-auto mb-8">
            <CategoryHeader />

            {reviewers.map((item, index) => (
              <ReviewersCard item={item} key={index} />
            ))}

            <Pagination />
          </div>

          {/* categories ralted  */}
          <div className="basis-[40%] my-8 flex flex-col md:flex-row lg:flex-col gap-6 items-end">
            <RelatedCategories
              title="Reviewer Index"
              categories={reviewerIndexOptions}
            />
            <RelatedCategories
              title="Reviewer Type"
              categories={reviewerTypes}
            />
          </div>
        </section>
      </Container>

      <RecentlyViewCompanies
        title="Recently Viewed Reviewers"
        data={businessNames}
      />
    </div>
  );
}
