"use client";

import React, { useEffect } from "react";
import HelpFull from "./HelpFull";
import ReportModal from "./ReportModal";
import { ChevronDown, XIcon } from "lucide-react";
import CommentInput from "./comments/CommentInput";
import { myFetch } from "@/utils/myFetch";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { copyToClipboard } from "@/utils/copyToClipboard";

export default function CommentsSection({
  review,
  replyComment,
  setReplyComment,
  userId,
}: any) {
  const isOpen = replyComment ? true : false;
  const [profileData, setProfileData] = React.useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const getProfile = async () => {
      const res = await myFetch("/users/profile");
      setProfileData(res.data);
    };
    getProfile();
  }, []);

  // handle copy message
  const handleCopyMessage = () => {
    const message = `A response related to your review is available on Clapbac. If you’d like to view it, you can use the below: https://clapbac.com/clapbac-reviews/${review?.company?._id}#review-${review?._id}`;

    // call the utility
    copyToClipboard(
      message,
      "Message copied to clipboard!",
      "Failed to copy message.",
    );
  };

  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row gap-3 mt-10 mb-4">
        <div className="">
          <button
            className="flex items-center gap-1 px-4 py-2 border border-gray-600 rounded-md text-gray-800 hover:bg-gray-100 transition cursor-pointer"
            onClick={() => {
              if (!profileData) router.push("/login");
              else setReplyComment(!isOpen);
            }}
          >
            Comments
            <ChevronDown />
          </button>
        </div>
        {/* Report Button */}
        {profileData && profileData?._id !== review?.user?._id && (
          <div>
            <ReportModal review={review?._id} />
          </div>
        )}
        {/* report button for guest users */}
        {!profileData && (
          <Link href={"/login"}>
            <button className="px-4 py-2 border border-gray-600 rounded-md text-gray-800 hover:bg-gray-100 transition cursor-pointer w-32">
              Report
            </button>
          </Link>
        )}

        {/* Helpful Button */}
        {userId !== profileData?._id && (
          <div>
            <HelpFull reviews={review} profileData={profileData} />
          </div>
        )}

        {/* Copy Message to Reviewer */}
        <div>
          <button
            onClick={handleCopyMessage}
            className="text-sm md:text-base px-4 py-2 border border-gray-600 rounded-md text-gray-800 hover:bg-gray-100 transition"
          >
            {/* <Copy className="size-4 text-gray-500" /> */}
            Copy Message to Reviewer
          </button>
        </div>
      </div>
      {replyComment?.message && (
        <div className="p-2 my-2 bg-gray-100 rounded-lg max-w-xs">
          <p className="text-xs flex justify-between items-center gap-2 mb-1">
            <span className="font-semibold">
              {replyComment?.user?.firstName}
            </span>{" "}
            <span className="flex items-center gap-2">
              <span className="text-gray-500">
                {new Date(replyComment?.updatedAt).toLocaleString()}
              </span>
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
