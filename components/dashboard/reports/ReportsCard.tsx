import React from "react";

const ReportsCard = ({
  data,
}: {
  data: {
    totalSpam: number;
    totalHarassment: number;
    totalFakeReview: number;
    newReports: number;
  };
}) => {
  const allCard = [
    { title: "Total Spam", value: data?.totalSpam },
    { title: "Total Harassments", value: data?.totalHarassment },
    { title: "Total Fake Reviews", value: data?.totalFakeReview },
    { title: "New Entries", value: data?.newReports },
  ];

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-4">
        {allCard?.map(({ title, value }) => (
          <div
            key={title}
            className="bg-[#F8F8F8] shadow-md  p-3 w- flex flex-col"
          >
            <p className="text-gray-600  text-xl">{title}</p>
            {/* Spacer to push value to center */}
            <div className="flex-grow flex items-center justify-center p-5.5">
              <p className="text-orange-500 font-bold text-2xl">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsCard;
