import React from "react";
// const data = [
//   { day: "SUN", value: 150, color: "bg-gray-700" },
//   { day: "MON", value: 40, color: "bg-lime-500" },
//   { day: "TUE", value: 80, color: "bg-lime-500" },
//   { day: "WED", value: 90, color: "bg-orange-500" },
//   { day: "THU", value: 50, color: "bg-gray-700" },
//   { day: "FRI", value: 150, color: "bg-gray-400" },
//   { day: "SAT", value: 90, color: "bg-orange-500" },
// ];

const bgColors = [
  "bg-gray-700",
  "bg-lime-500",
  "bg-lime-500",
  "bg-orange-500",
  "bg-gray-700",
  "bg-gray-400",
  "bg-orange-500",
];

const RevenueChart = ({ barChart }: any) => {
  const barChartData = barChart?.map((char: any, index: number) => ({
    day: char.day,
    count: char.count === 0 ? 20 : char.count,
    color: bgColors[index],
  }));

  return (
    <div className="p-5 bg-[#F8F8F8]">
      <h2 className="text-xl font-semibold mb-4  text-gray-700">
        Review Activity | Weekly
      </h2>
      <div className="flex items-end justify-between h-48  border-gray-300 pt-4">
        {barChartData?.map(
          ({
            day,
            count,
            color,
          }: {
            day: string;
            count: number;
            color: string;
          }) => (
            <div key={day} className="flex flex-col items-center">
              <div
                className={`w-8 ${color} rounded-t`}
                style={{ height: `${count}px` }}
                title={`${day}: ${count}`}
              />
              <span className="mt-2 text-sm font-medium">{day}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RevenueChart;
