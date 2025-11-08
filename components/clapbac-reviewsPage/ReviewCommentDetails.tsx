"use client";

import Image from "next/image";
import React from "react";
import left from "../../public/clapbac-reviews/left.svg";

export default function ReviewCommentDetails({
  commentItem,
  setReplyComment,
  index,
}: {
  commentItem: any;
  setReplyComment: any;
  index: number;
}) {
  return (
    <div className=" flex flex-col xl:flex-row my-4">
      <div
        className={`flex items-start gap-3 `}
        style={{ marginLeft: index === 0 ? 0 : "" }}
      >
        {/* left logo */}
        <Image src={left} alt="Logo" className="hidden sm:block h-10" />

        <div className="">
          <div className="flex flex-row items-center gap-2">
            {/* user profile image */}
            <div>
              {commentItem?.user?.image && (
                <Image
                  src={
                    process.env.NEXT_PUBLIC_BASE_URL + commentItem?.user?.image
                  }
                  width={0}
                  height={0}
                  alt="Logo"
                  sizes="100vh"
                  className="w-8 h-8 sm:w-12 sm:h-12 rounded-full object-cover"
                />
              )}
            </div>

            {/* name & owner */}
            <div className=" text-sm">
              <div>
                <div>
                  <p className="uppercase font-medium text-sm">Clapbac From</p>{" "}
                  <p className="text-gray-500"></p>
                  <div className="flex gap-1 font-bold text-md">
                    <p>{commentItem?.user?.firstName}</p>
                    <p>{commentItem?.user?.lastName}</p>
                  </div>
                  <p>{commentItem?.subName}</p>
                  {commentItem.author}
                </div>
              </div>
              {commentItem.business && (
                <span className="text-gray-500 text-xs">
                  {commentItem.business}
                </span>
              )}
              <p className="text-xs text-gray-400 mb-1">
                {commentItem?.createdAt?.slice(0, 10)}
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-700 mt-1">{commentItem?.message}</p>
          {/* <p className="text-sm text-gray-700 mt-1">{commentItem?.message}</p> */}

          <button
            className="hover:underline p-1 rounded text-sm font-semibold text-gray-500 cursor-pointer text-start"
            onClick={() => setReplyComment(commentItem)}
          >
            Reply
          </button>
        </div>
      </div>
    </div>
  );
}
