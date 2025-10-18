import { createArc } from "@/components/share/PieChartDevideColor";
import React from "react";

// Define segments with percentage and color
// const segments = [
//   { percent: 32, color: "#3D454E" }, // Lime Green
//   { percent: 32, color: "#C5D92D" }, // Red-Orange
//   { percent: 37, color: "#F05223" }, // Dark Gray (Tailwind's gray-700)
// ];

const ReportsPieChart = ({ pieChart }: any) => {
  const totalPercentage = pieChart?.map((pie: any) => ({
    percent: pie.count,
    color:
      pie.category === "bad"
        ? "#3D44E5"
        : pie.category === "average"
        ? "#C5D92D"
        : "#F05223",
  }));

  // Convert percentages to SVG arc paths

  let currentAngle = 0;

  return (
    <div className="max-w-md mx-auto p-4 bg-[#F8F8F8]">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Rating Distribution
      </h2>
      <div className="flex items-center justify-center">
        {" "}
        <svg width="200" height="200" viewBox="0 0 200 200">
          {totalPercentage?.map((segment: any, index: number) => {
            const start = currentAngle;
            const end = currentAngle + (segment.percent / 100) * 360;
            const path = createArc(start, end);
            currentAngle = end;
            return (
              <path
                key={index}
                d={path}
                fill={segment.color}
                stroke="white"
                strokeWidth="10"
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default ReportsPieChart;
