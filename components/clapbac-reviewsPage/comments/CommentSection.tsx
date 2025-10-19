"use client";
import { Textarea } from "@/components/ui/textarea";
import { myFetch } from "@/utils/myFetch";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface CommentSectionProps {
  reviews: {
    _id: string;
    company: {
      _id: string;
    };
  };
  setIsOpen: (val: boolean) => void;
}

export default function CommentSection({
  reviews,
  setIsOpen,
}: CommentSectionProps) {
  const [message, setMessage] = useState("");
  console.log("commmmmmm", reviews);

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) {
      toast.error("Comment cannot be empty.");
      return;
    }

    const payload = {
      parent: reviews?._id,
      review: reviews?.company?._id,
      message,
    };

    console.log(payload);

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

  return (
    <div className="w-[55%] mt-5">
      <Textarea
        className="rounded mb-4"
        placeholder="Write your comment..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 border border-gray-300 text-blue-700 rounded-md hover:bg-gray-100 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </button>

        <button
          className="px-4 py-2 bg-[#14A9E3] text-white rounded-md hover:bg-[#1299cc] cursor-pointer"
          onClick={handleSubmitComment}
        >
          Post Comment
        </button>
      </div>
    </div>
  );
}
