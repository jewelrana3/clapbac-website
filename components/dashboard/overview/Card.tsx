import { myFetch } from "@/utils/myFetch";
import React from "react";

const Card = async () => {
  const cards = await myFetch("/analytics/overview");
  const data = [
    { title: "Total Users", value: cards?.data?.totalUsers },
    { title: "Total Reviewers", value: cards?.data?.totalReviewers },
    { title: "Total Reviews", value: cards?.data?.totalReviews },
    { title: "New Sign Ups", value: cards?.data?.newUsers },
  ];

  return (
    <div className="">
      <div className="grid grid-cols-4 gap-10">
        {data.map(({ title, value }) => (
          <div
            key={title}
            className="bg-[#F8F8F8] shadow-md  p-6 w-[350px] h-[200px] flex flex-col"
          >
            <p className="text-gray-600 mb-2 text-xl">{title}</p>
            {/* Spacer to push value to center */}
            <div className="flex-grow flex items-center justify-center">
              <p className="text-orange-500 font-bold text-2xl">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
