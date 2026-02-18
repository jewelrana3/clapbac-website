import AllBussiness from "@/components/pages/food-drink/AllBussiness";
import RecentlyViewCompanies from "@/components/share/RecentlyViewCompines";
import FeatureBusiness from "@/components/pages/home/FeatureBussiness";
import SectionTitle from "@/components/share/SectionTitle";
import React from "react";
import { myFetch } from "@/utils/myFetch";

export default async function FoodDrink({
  searchParams,
}: {
  searchParams: Promise<{ page: string; title: string; category: string }>;
}) {
  const { page = "" } = await searchParams;
  const { title = "" } = await searchParams;
  const { category = "" } = await searchParams;
  const featuresBussiness = await myFetch(
    `${category ? `/companies?category=${category}` : `/companies`}`,
  );
  const recentBusiness = await myFetch("/recent-companies");
  const profile = await myFetch("/users/profile");

  console.log("featuresBussiness", featuresBussiness);

  return (
    <div>
      <SectionTitle
        title={featuresBussiness?.data?.[0]?.category?.name || "All Businesses"}
      />
      <FeatureBusiness />
      <AllBussiness
        data={featuresBussiness?.data}
        total={featuresBussiness?.pagination?.total}
      />

      {profile?.data.length > 0 && (
        <RecentlyViewCompanies
          title="Recently Viewed Companies"
          data={recentBusiness?.data || []}
        />
      )}
    </div>
  );
}
