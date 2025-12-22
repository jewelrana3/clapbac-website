"use client";

import React, { useEffect, useState } from "react";
import help from "../../public/clapbac-reviews/help.svg";
import Image from "next/image";
import { myFetch } from "@/utils/myFetch";

export default function HelpFull({ reviews }: any) {
  const reviewId = reviews?._id;
  const localKey = `helpful-${reviewId}`;

  const [isHelpful, setIsHelpful] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(reviews?.helpfulCount || 0);

  // Load from localStorage on mount
  useEffect(() => {
    const hasVoted = localStorage.getItem(localKey);
    if (hasVoted) {
      setIsHelpful(true);
    }
  }, [localKey]);

  const handleToggleHelpful = async () => {
    const newCount = isHelpful ? helpfulCount - 1 : helpfulCount + 1;

    // Update UI
    setHelpfulCount(newCount);
    setIsHelpful(!isHelpful);

    // Update localStorage
    if (isHelpful) {
      localStorage.removeItem(localKey);
    } else {
      localStorage.setItem(localKey, "true");
    }

    // Sync with backend
    try {
      await myFetch(`/reviews/${reviewId}`, {
        method: "PATCH",
        body: { helpfulCount: newCount },
      });
    } catch (error) {
      console.error("Error updating helpful count:", error);
    }
  };

  return (
    <button
      onClick={handleToggleHelpful}
      className={`flex items-center justify-center gap-1 px-4 py-2 rounded-md border border-[#a0d911] text-gray-900 font-semibold ${
        isHelpful ? "bg-[#a0d911]" : "bg-white"
      } transition cursor-pointer text-nowrap text-sm w-32 h-11`}
    >
      <Image src={help} width={20} height={10} alt="help" />
      Helpful ({helpfulCount})
    </button>
  );
}
