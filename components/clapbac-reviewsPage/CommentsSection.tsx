import React from "react";
import HelpFull from "./HelpFull";

export default function CommentsSection() {
  return (
    <div className="grid grid-cols-[50%] sm:grid-cols-[20%_20%_20%] gap-3 mt-10">
      {/* Comments Button */}
      <button className="flex items-center gap-1 px-4 py-2 border border-gray-600 rounded-md text-gray-800 hover:bg-gray-100 transition cursor-pointer">
        Comments
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {/* Report Button */}
      <button className="px-4 py-2 border border-gray-600 rounded-md text-gray-800 hover:bg-gray-100 transition cursor-pointer">
        Report
      </button>

      {/* Helpful Button */}
      <HelpFull />
    </div>
  );
}
