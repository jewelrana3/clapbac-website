import React from "react";

const ReportsCard = () => {
  const data = [
    { title: "Total Spam", value: "5" },
    { title: "Total Harassments", value: "5" },
    { title: "Total Fake Reviews", value: "3" },
    { title: "New Entries", value: "34" },
  ];

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-4">
        {data.map(({ title, value }) => (
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
