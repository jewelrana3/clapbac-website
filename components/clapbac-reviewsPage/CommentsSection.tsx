"use client";

import React from "react";
import HelpFull from "./HelpFull";
import ReportModal from "./ReportModal";
import { ChevronDown, XIcon } from "lucide-react";
import CommentInput from "./comments/CommentInput";

export default function CommentsSection({
  review,
  replyComment,
  setReplyComment,
}: any) {
  const isOpen = replyComment ? true : false;

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 mt-10 mb-4">
        <div className="">
          <button
            className="flex items-center gap-1 px-4 py-2 border border-gray-600 rounded-md text-gray-800 hover:bg-gray-100 transition cursor-pointer"
            onClick={() => setReplyComment(!isOpen)}
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
          <HelpFull reviews={review} />
        </div>
      </div>
      {replyComment?.message && (
        <div className="p-2 my-2 bg-gray-100 rounded-lg max-w-xs">
          <p className="text-xs flex justify-between items-center gap-2">
            <span>{replyComment?.user?.firstName}</span>{" "}
            <span className="flex items-center gap-2">
              <span>{new Date().toLocaleString()}</span>
              <XIcon
                size={16}
                className="cursor-pointer"
                onClick={() => setReplyComment(null)}
              />
            </span>
          </p>
          <p className="text-xs">{replyComment?.message}</p>
        </div>
      )}
      {isOpen && (
        <CommentInput
          replyComment={replyComment}
          review={review}
          setReplyComment={setReplyComment}
        />
      )}
    </>
  );
}
