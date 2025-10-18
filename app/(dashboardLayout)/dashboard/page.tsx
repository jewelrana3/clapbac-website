import Card from "@/components/dashboard/overview/Card";
import PieChart from "@/components/dashboard/overview/PieChart";
import ReviewChart from "@/components/dashboard/overview/ReviewChart";
import { myFetch } from "@/utils/myFetch";
import React from "react";

export default async function DashboardHomePage() {
  const res = await myFetch("/analytics/overview");
  return (
    <div>
      <Card />
      <div className="grid grid-cols-[auto_30%] my-6 gap-5">
        <div>
          <ReviewChart data={res?.data?.weeklyReviews} />
        </div>
        <div>
          <PieChart data={res?.data?.ratingDistribution} />
        </div>
      </div>
    </div>
  );
}
