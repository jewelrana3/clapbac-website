"use client";

import RecentlyViewCompanies from "@/components/share/RecentlyViewCompines";
import SectionTitle from "@/components/share/SectionTitle";

import Container from "@/layout/Container";
import CategoryHeader from "@/components/pages/food-drink/CategoryHeader";
import Pagination from "@/components/share/Pagination";
import RelatedCategories from "@/components/pages/food-drink/RalatedCategories";
import ReviewersCard from "@/components/pages/reviewers/ReviewersCard";
import { usePathname } from "next/navigation";
import LatestLoudVoices from "../home/LatestLoudVoices";

const reviewerIndexOptions = [
  { label: "Most Controversial", value: "mostControversial" },
  { label: "Most Hilarious", value: "mostHilarious" },
  { label: "Most Highly Rated", value: "mostHighlyRated" },
  { label: "Most Flagged", value: "mostFlagged" },
  { label: "Alphabetical", value: "alphabetical" },
];

const reviewerTypes = [
  { label: "The Drama Queen", value: "The Drama Queen" },
  { label: "One-Star Sniper", value: "One-Star Sniper" },
  { label: "Karen", value: "Karen" },
  { label: "VIP", value: "VIP" },
  { label: "Star Legend", value: "Star Legend" },
  { label: "No-Show Ninja", value: "No-Show Ninja" },
  { label: "Nitpicker", value: "Nitpicker" },
  { label: "Rage Typer", value: "Rage Typer" },
  { label: "Bargain Bandit", value: "Bargain Bandit" },
  { label: "Superfan", value: "Superfan" },
  { label: "Clout Chaser", value: "Clout Chaser" },
  { label: "Coupon Scammer", value: "Coupon Scammer" },
  { label: "Cheerleader", value: "Cheerleader" },
  { label: "Troll Lord", value: "Troll Lord" },
  { label: "Fake Reviewer", value: "Fake Reviewer" },
  { label: "Loyal Rockstar", value: "Loyal Rockstar" },
  { label: "Meltdown Maven", value: "Meltdown Maven" },
  { label: "Discount Diva", value: "Discount Diva" },
  { label: "Truth Teller", value: "Truth Teller" },
  { label: "Chaos Starter", value: "Chaos Starter" },
  { label: "Dory", value: "Dory" },
  { label: "Other", value: "Other" },
];

export default function Reviewers({
  reviews,
  recentCompanies,
  getProfile,
}: any) {
  const pathname = usePathname();
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
            <CategoryHeader
              total={reviews?.pagination?.total}
              pathname={pathname}
            />

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
              setParams="reviewerIndex"
              categories={reviewerIndexOptions}
            />
            <RelatedCategories
              title="Reviewer Type"
              setParams="reviewerType"
              categories={reviewerTypes}
            />
          </div>
        </section>
      </Container>

      {getProfile?.role && recentCompanies?.length > 0 && (
        <RecentlyViewCompanies
          title="Recently Viewed Reviewers"
          data={recentCompanies?.data || []}
        />
      )}
    </div>
  );
}
