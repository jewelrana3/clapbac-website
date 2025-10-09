import Reports from "@/components/dashboard/reports/Reports";
import ReportsCard from "@/components/dashboard/reports/ReportsCard";
import ReportsPieChart from "@/components/dashboard/reports/ReportsPieChart";
import RevenueChart from "@/components/dashboard/reports/RevenueChart";
import React from "react";

export default function page() {
  return (
    <>
      <div className="grid grid-cols-[35%_auto] gap-5">
        <ReportsCard />
        <div className="grid grid-cols-[auto_30%] my- gap-5">
          <div>
            <RevenueChart />
          </div>
          <div>
            <ReportsPieChart />
          </div>
        </div>
      </div>

      {/* reports */}
      <Reports />
    </>
  );
}
