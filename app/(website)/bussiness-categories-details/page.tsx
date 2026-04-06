import AllBussiness from "@/components/pages/food-drink/AllBussiness";
import RecentlyViewCompanies from "@/components/share/RecentlyViewCompines";
import FeatureBusiness from "@/components/pages/home/FeatureBussiness";
import SectionTitle from "@/components/share/SectionTitle";
import React from "react";
import { myFetch } from "@/utils/myFetch";

export default async function FoodDrink({
  searchParams,
}: {
  searchParams: Promise<{
    page: string;
    title: string;
    category: string;
    Feature: string;
  }>;
}) {
  const { Feature = "" } = await searchParams;
  const { category = "" } = await searchParams;
  const businesses = await myFetch(
    `${category ? `/companies?category=${category}` : `/companies`}`,
  );
  const categoryRes = await myFetch(`/categories/${category}`);
  const recentBusiness = await myFetch("/recent-companies");
  const profile = await myFetch("/users/profile");

  return (
    <div>
      <SectionTitle title={categoryRes?.data?.name || "All Businesses"} />
      {Feature !== "true" && <FeatureBusiness />}
      <AllBussiness
        categoryName={categoryRes?.data?.name || "All Businesses"}
        data={businesses?.data}
        total={businesses?.pagination?.total}
      />

      {profile?.data?.length > 0 && (
        <RecentlyViewCompanies
          title="Recently Viewed Companies"
          data={recentBusiness?.data || []}
        />
      )}
    </div>
  );
}
