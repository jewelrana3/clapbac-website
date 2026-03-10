"use client";

import { useState } from "react";
import ReviewCommentDetails from "./ReviewCommentDetails";
import CommentsSection from "./CommentsSection";
export default function ReviewAndComment({
  review,
  userId,
}: {
  review: any;
  userId: any;
}) {
  const [replyComment, setReplyComment] = useState(null);

  return (
    <div className=" px-6 bg-white">
      {/* ReviewCommentDetails */}
      <div className=" pl-4 space-y-6">
        {review?.comments?.map((comment: any, index: number) => {
          return (
            <div key={comment._id}>
              <ReviewCommentDetails
                commentItem={comment}
                setReplyComment={setReplyComment}
                index={index}
              />
            </div>
          );
        })}
      </div>

      <CommentsSection
        replyComment={replyComment}
        setReplyComment={setReplyComment}
        review={review}
        userId={userId}
      />
    </div>
  );
}
