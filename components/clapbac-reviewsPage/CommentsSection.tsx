"use client";

import React from "react";
import HelpFull from "./HelpFull";
import ReportModal from "./ReportModal";
import { ChevronDown } from "lucide-react";
import CommentSection from "./comments/CommentSection";

export default function CommentsSection({ reviews, replyComment }: any) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    // <div className="grid grid-cols-[50%] sm:grid-cols-[30%_30%_20%] gap-3 mt-10">
    <>
      <div className="flex flex-col sm:flex-row gap-3 mt-10">
        <div className="">
          <button
            className="flex items-center gap-1 px-4 py-2 border border-gray-600 rounded-md text-gray-800 hover:bg-gray-100 transition cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            Comments
            <ChevronDown />
          </button>
        </div>
        {/* Report Button */}

        <div>
          <ReportModal />
        </div>

        {/* Helpful Button */}

        <div>
          <HelpFull reviews={reviews} />
        </div>
      </div>
      {isOpen && (
        <CommentSection
          replyComment={replyComment}
          setIsOpen={setIsOpen}
          reviews={reviews}
        />
      )}
    </>
  );
}
