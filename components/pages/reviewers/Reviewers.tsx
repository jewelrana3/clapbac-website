"use client";

import RecentlyViewCompanies from "@/components/share/RecentlyViewCompines";
import SectionTitle from "@/components/share/SectionTitle";

import Container from "@/layout/Container";
import CategoryHeader from "@/components/pages/food-drink/CategoryHeader";
import Pagination from "@/components/share/Pagination";
import RelatedCategories from "@/components/pages/food-drink/RalatedCategories";
import ReviewersCard from "@/components/pages/reviewers/ReviewersCard";
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

export default function Reviewers({ reviews, recentCompanies }: any) {
  console.log(reviews?.pagination?.total, "double check");

  return (
    <div>
      <SectionTitle
        title="Reviewers"
        subTitle="Everyone has an opinion—start by finding theirs."
      />

      <LatestLoudVoices />

      <Container className="mt-10">
        <section className="flex flex-col lg:flex-row gap-12">
          <div className="basis-[70%] mb-8">
            <CategoryHeader reviews={reviews?.pagination?.total} />

            {reviews?.data?.map((item: any) => (
              <ReviewersCard item={item} key={item._id} />
            ))}

            {/* <ReviewersCard item={reviews?.data} /> */}

            <Pagination total={reviews?.pagination?.total} />
          </div>

          {/* categories ralted  */}
          <div className="basis-[30%] my-8 flex flex-col md:flex-row lg:flex-col gap-6 items-end">
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

        {/* pagination */}
        {/* <Pagination /> */}
      </Container>

      <RecentlyViewCompanies
        title="Recently Viewed Reviewers"
        data={recentCompanies?.data || []}
      />
    </div>
  );
}
