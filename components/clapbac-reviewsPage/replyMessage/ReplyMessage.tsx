"use client";
import React, { useState } from "react";

export default function CommentWithReply({ reply }: any) {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replies, setReplies] = useState({
    parent: reply?._id,
    review: reply?.review,
  });

  const handleReply = (reply: any) => {
    setShowReplyBox(!showReplyBox);

    // console.log("reply", reply);
    // const payload = {
    //   parent: reply?._id,
    //   review: reply?.review,
    //   message: replyText,
    // };

    // console.log(payload);

    // try {
    //   const res = await myFetch("/comments/create", {
    //     method: "POST",
    //     body: payload,
    //   });
    //   if (res.success) {
    //     toast.success(res.message || "Comment submitted successfully!");
    //     setIsOpen(false);
    //   } else {
    //     toast.error(res.message || "Comment submission failed.");
    //   }
    // } catch (err) {
    //   toast.error("An error occurred. Please try again.");
    // }
  };

  const handlePostReply = (id: string) => {
    if (!replyText.trim()) return;

    const payload = {
      parent: replies?.parent,
      review: replies?.review,
      message: replyText,
    };

    console.log(payload);

    // console.log("Reply submitted:", replyText);
    // console.log("reply", id);
    // setReplyText("");
    setShowReplyBox(false);
  };

  return (
    <div>
      {/* Comment content */}

      {/* Reply button */}
      <button
        className="hover:underline p-1 rounded text-sm font-semibold text-gray-500 cursor-pointer text-start"
        onClick={() => handleReply(reply)}
      >
        Reply
      </button>

      {/* Reply Textarea */}
      {showReplyBox && (
        <div className=" ml-10 w-full max-w-md">
          <textarea
            className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
            rows={1}
            placeholder=""
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <div className="flex space-x-2">
            <button
              className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
              //   onClick={handlePostReply}
            >
              Reply
            </button>
            <button
              className="px-3 py-1 text-sm text-gray-600 hover:underline"
              onClick={() => setShowReplyBox(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
