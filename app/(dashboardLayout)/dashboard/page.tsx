import Card from "@/components/dashboard/overview/Card";
import PieChart from "@/components/dashboard/overview/PieChart";
import ReviewChart from "@/components/dashboard/overview/ReviewChart";
import React from "react";

export default function DashboardHomePage() {
  return (
    <div>
      <Card />
      <div className="grid grid-cols-[auto_30%] my-6 gap-5">
        <div>
          <ReviewChart />
        </div>
        <div>
          <PieChart />
        </div>
      </div>
    </div>
  );
}
