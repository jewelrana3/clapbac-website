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
  "mostControversial",
  "mostHilarious",
  "mostHighlyRated",
  "mostFlagged",
  "alphabetical",
];

const reviewerTypes = [
  "The Drama Queen",
  "One-Star Sniper",
  "Karen",
  "VIP",
  "Star Legend",
  "No-Show Ninja",
  "Nitpicker",
  "Rage Typer",
  "Bargain Bandit",
  "Superfan",
  "Clout Chaser",
  "Coupon Scammer",
  "Cheerleader",
  "Troll Lord",
  "Fake Reviewer",
  "Loyal Rockstar",
  "Meltdown Maven",
  "Discount Diva",
  "Truth Teller",
  "Chaos Starter",
  "Dory",
  "Other",
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
