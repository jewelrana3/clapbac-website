"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { myFetch } from "@/utils/myFetch";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface CommentSectionProps {
  replyComment: any;
  setIsOpen: (val: boolean) => void;
  reviews: any;
}

export default function CommentSection({
  replyComment,
  setIsOpen,
  reviews,
}: CommentSectionProps) {
  const [message, setMessage] = useState("");

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) {
      toast.error("Comment cannot be empty.");
      return;
    }

    const payload = {
      parent: replyComment?._id,
      review: replyComment?.company?._id,
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
        className="rounded mb-4 placeholder:text-sm"
        placeholder="Write your comment..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="flex space-x-4">
        <Button type="submit" className="bg-black">
          Cancel
        </Button>

        <Button type="submit" className="bg-[#F05223]">
          Post Comment
        </Button>
      </div>
    </div>
  );
}
