import React from "react";

export default function Description({
  description,
  className,
}: {
  description: string;
  className?: string;
}) {
  return (
    <div className="bg-[#E9E9E9] px-10 py-20 sm:text-2xl font-bold text-center ">
      <p className={`${className} `}>{description}</p>
    </div>
  );
}
