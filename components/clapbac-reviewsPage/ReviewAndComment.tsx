"use client";

import { useState } from "react";
import ReviewCommentDetails from "./ReviewCommentDetails";
import CommentsSection from "./CommentsSection";
export default function ReviewAndComment({ review }: { review: any }) {
  const [replyComment, setReplyComment] = useState(null);

  return (
    <div className=" px-6 bg-white">
      {/* ReviewCommentDetails */}
      <div className=" pl-4 space-y-6">
        {review?.comments?.map((comment: any) => {
          return (
            <div key={comment._id}>
              {comment?.replies?.map((comment: any, idx: number) => (
                <ReviewCommentDetails
                  key={idx}
                  commentItem={comment}
                  index={idx}
                  setReplyComment={setReplyComment}
                />
              ))}
            </div>
          );
        })}
      </div>

      <CommentsSection
        replyComment={replyComment}
        setReplyComment={setReplyComment}
        review={review}
      />
    </div>
  );
}
