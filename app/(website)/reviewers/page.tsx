"use client";

import RecentlyViewCompanies from "@/components/share/RecentlyViewCompines";
import SectionTitle from "@/components/share/SectionTitle";

import one from "../../../public/food-drink/one.png";
import two from "../../../public/food-drink/four.png";
import three from "../../../public/food-drink/three.png";
import four from "../../../public/food-drink/five.png";
import Container from "@/layout/Container";
import CategoryHeader from "@/components/pages/food-drink/CategoryHeader";
import Pagination from "@/components/share/Pagination";
import RelatedCategories from "@/components/pages/food-drink/RalatedCategories";
import ReviewersCard from "@/components/pages/reviewers/ReviewersCard";
import LatestLoudVoices from "@/components/pages/home/LatestLoudVoices";
import { myFetch } from "@/utils/myFetch";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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

const businessNames = [
  { title: "Danny K. on Arabica Coffee", image: one },
  { title: "Sasha C. on Loop Coffee", image: two },
  { title: "Nancy B. on Cenchi Cafe", image: three },
  { title: "Keisha V. on Ejji Coffee", image: four },
];

export default function Reviewers() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";
  const search = searchParams.get("searchTerm") || "";
  console.log(search);

  const [reviews, setReviews] = useState<any>(null);

  const [recentCompanies, setRecentCompanies] = useState<any>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const url = `/reviews/reviewers?page=${page}&searchTerm=${encodeURIComponent(
        search
      )}`;

      console.log(url, "url");
      const reviews = await myFetch(url);
      setReviews(reviews);
    };

    fetchReviews();
  }, [page, search]); // ✅ Use these values directly instead of searchParams

  // recent companies
  useEffect(() => {
    const fetchRecentCompanies = async () => {
      const recentCompanys = await myFetch("/recent-companies");
      setRecentCompanies(recentCompanys);
    };

    fetchRecentCompanies();
  }, []);

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
            <CategoryHeader />

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
