import AllBussiness from "@/components/pages/food-drink/AllBussiness";
import RecentlyViewCompanies from "@/components/share/RecentlyViewCompines";
import FeatureBusiness from "@/components/pages/home/FeatureBussiness";
import SectionTitle from "@/components/share/SectionTitle";
import React from "react";
import { myFetch } from "@/utils/myFetch";

export default async function FoodDrink({
  searchParams,
}: {
  searchParams: Promise<{ page: string; title: string }>;
}) {
  const { page = "" } = await searchParams;
  const { title = "" } = await searchParams;
  const featuresBussiness = await myFetch(
    `${page ? `/companies?page=${page}` : `/companies`}`,
  );
  const recentBusiness = await myFetch("/recent-companies");
  const profile = await myFetch("/users/profile");

  return (
    <div>
      <SectionTitle title={title} />
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
