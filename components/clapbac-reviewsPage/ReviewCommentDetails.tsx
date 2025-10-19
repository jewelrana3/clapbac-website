"use client";

import Image from "next/image";
import React from "react";
import left from "../../public/clapbac-reviews/left.svg";
import CommentWithReply from "./replyMessage/ReplyMessage";

export default function ReviewCommentDetails({
  reply,
  index,
  setReplyComment,
}: {
  reply: any;
  index: number;
  setReplyComment: any;
}) {
  const handleReplyComment = (reply: any) => {
    setReplyComment(reply);
  };
  return (
    <div
      className=" flex flex-col xl:flex-row my-4"
      onClick={() => handleReplyComment(reply)}
    >
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
              {reply?.user?.image && (
                <Image
                  src={process.env.NEXT_PUBLIC_BASE_URL + reply?.user?.image}
                  width={0}
                  height={0}
                  alt="Logo"
                  sizes="100vh"
                  className="w-8 h-8 sm:w-12 sm:h-12 rounded-full object-cover"
                />
              )}
            </div>

            {/* name & owner */}
            <div className="font-semibold text-sm">
              <div>
                <div>
                  <p>Clapbac From</p> <p className="text-gray-500"></p>
                  <div className="flex gap-1 ">
                    <p>{reply?.name}</p>
                    <p className="font-medium">{reply?.user?.title}</p>
                  </div>
                  <p>{reply?.subName}</p>
                  {reply.author}
                </div>
              </div>
              {reply.business && (
                <span className="text-gray-500 text-xs">{reply.business}</span>
              )}
              <p className="text-xs text-gray-400 mb-1">
                {reply?.createdAt?.slice(0, 10)}
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-700 mt-1">{reply?.message}</p>
          <CommentWithReply reply={reply} />

          {/* <p className="ml-5">
            {reply?.replies?.length > 0
              ? reply?.replies?.length + " replies"
              : "ok"}
          </p> */}
        </div>
      </div>

      {/* <div className="text-nowrap my-4 lg:my-0 ml-14 xl:ml-0">
        <p className="font-bold text-md">{reply.ownerside}</p>
      </div> */}
    </div>
  );
}
