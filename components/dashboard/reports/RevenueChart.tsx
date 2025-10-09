import React from "react";

const data = [
  { day: "SUN", value: 150, color: "bg-gray-700" },
  { day: "MON", value: 40, color: "bg-lime-500" },
  { day: "TUE", value: 80, color: "bg-lime-500" },
  { day: "WED", value: 90, color: "bg-orange-500" },
  { day: "THU", value: 50, color: "bg-gray-700" },
  { day: "FRI", value: 150, color: "bg-gray-400" },
  { day: "SAT", value: 90, color: "bg-orange-500" },
];

const RevenueChart = () => {
  return (
    <div className="p-5 bg-[#F8F8F8]">
      <h2 className="text-xl font-semibold mb-4  text-gray-700">
        Review Activity | Weekly
      </h2>
      <div className="flex items-end justify-between h-48  border-gray-300 pt-4">
        {data.map(({ day, value, color }) => (
          <div key={day} className="flex flex-col items-center">
            <div
              className={`w-8 ${color} rounded-t`}
              style={{ height: `${value}px` }}
              title={`${day}: ${value}`}
            />
            <span className="mt-2 text-sm font-medium">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueChart;
