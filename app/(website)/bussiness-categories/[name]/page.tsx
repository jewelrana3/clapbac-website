import AllBussiness from "@/components/pages/food-drink/AllBussiness";
import RecentlyViewCompanies from "@/components/share/RecentlyViewCompines";
import FeatureBusiness from "@/components/pages/home/FeatureBussiness";
import SectionTitle from "@/components/share/SectionTitle";
import React from "react";

// import one from "../../../../public/food-drink/one.png";
// import two from "../../../../public/food-drink/four.png";
// import three from "../../../../public/food-drink/three.png";
// import four from "../../../../public/food-drink/five.png";
import { myFetch } from "@/utils/myFetch";

// const businessNames = [
//   { title: "Arabica Coffee", image: one },
//   { title: "Loop Coffee", image: two },
//   { title: "Cenchi Cafe", image: three },
//   { title: "Eiji Coffee Corner", image: four },
// ];

export default async function FoodDrink() {
  const featuresBussiness = await myFetch("/companies");
  const recentBusiness = await myFetch("/recent-companies");

  return (
    <div>
      <SectionTitle title="Food & Drink" />
      <FeatureBusiness />
      <AllBussiness data={featuresBussiness?.data} />

      <RecentlyViewCompanies
        title="Recently Viewed Companies"
        data={recentBusiness?.data || []}
      />
    </div>
  );
}
