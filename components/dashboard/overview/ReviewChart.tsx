import React from "react";

const colors = [
  "bg-gray-700",
  "bg-lime-500",
  "bg-lime-500",
  "bg-orange-500",
  "bg-gray-700",
  "bg-gray-400",
  "bg-orange-500",
];

const ReviewChart = async ({ data }: any) => {
  const newbar = data?.map((item: any, index: number) => ({
    day: item.day,
    count: item.count,
    color: colors[index],
  }));
  return (
    <div className="p-6 bg-[#F8F8F8]">
      <h2 className="text-xl font-semibold mb-4  text-gray-700">
        Review Activity | Weekly
      </h2>
      <div className="flex items-end justify-between h-48  border-gray-300 pt-4">
        {newbar?.map(
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

export default ReviewChart;
