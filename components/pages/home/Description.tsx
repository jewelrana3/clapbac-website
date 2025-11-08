import React from "react";

export default function Description({
  description,
  className,
}: {
  description: string;
  className?: string;
}) {
  return (
    <div className="bg-[#e4d8d8] px-10 py-20 sm:text-2xl font-bold text-center ">
      <p className={`${className} `}>{description}</p>
    </div>
  );
}
