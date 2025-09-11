import AllBussiness from "@/components/pages/food-drink/AllBussiness";
import RecentlyViewCompanies from "@/components/share/RecentlyViewCompines";
import FeatureBusiness from "@/components/pages/home/FeatureBussiness";
import SectionTitle from "@/components/share/SectionTitle";
import React from "react";
import Pagination from "@/components/share/Pagination";

export default function FoodDrink() {
  return (
    <div>
      <SectionTitle title="Food & Drink" />
      <FeatureBusiness />
      <AllBussiness />

      <RecentlyViewCompanies />
    </div>
  );
}
