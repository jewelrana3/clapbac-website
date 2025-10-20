"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { myFetch } from "@/utils/myFetch";
import { revalidate } from "@/utils/revalidateTags";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface CommentSectionProps {
  replyComment: any;
  review: any;
  setReplyComment: any;
}

export default function CommentInput({
  replyComment,
  review,
  setReplyComment,
}: CommentSectionProps) {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmitComment = async (e: React.FormEvent) => {
    toast.loading("Sending...", { id: "comment" });
    e.preventDefault();

    if (!message.trim()) {
      setError("Comment cannot be empty.");
      return;
    }

    const payload = {
      ...(replyComment?._id && { parent: replyComment?._id }),
      review: review?._id,
      message,
    };

    try {
      const res = await myFetch("/comments/create", {
        method: "POST",
        body: payload,
      });
      if (res.success) {
        toast.success(res.message || "Comment submitted successfully!", {
          id: "comment",
        });
        setMessage("");
        setReplyComment(false);
        revalidate("reviews");
      } else {
        toast.error(res.message || "Comment submission failed.", {
          id: "comment",
        });
      }
    } catch (err: any) {
      toast.error("An error occurred. Please try again.", { id: "comment" });
    }
  };

  return (
    <div className="w-[55%]">
      <Textarea
        className="rounded placeholder:text-sm"
        placeholder="Write your comment..."
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          setError("");
        }}
      />
      <p className="text-sm text-red-500">{error}</p>
      <div className="flex space-x-4 mt-4">
        <Button
          onClick={() => setReplyComment(false)}
          type="submit"
          className="bg-black"
        >
          Cancel
        </Button>

        <Button
          onClick={handleSubmitComment}
          type="submit"
          className="bg-[#F05223]"
        >
          Post Comment
        </Button>
      </div>
    </div>
  );
}
