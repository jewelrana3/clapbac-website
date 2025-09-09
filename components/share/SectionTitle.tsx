import React from "react";

export default function SectionTitle({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <div className="text-center p-12 bg-[#E9E9E9]">
      <h2 className="text-2xl text-[#F05223] font-bold">{title}</h2>
      <p className="text-[#3D454E] text-2xl  mt-2 mx-auto lg:w-[37%]">
        {subTitle}
      </p>
    </div>
  );
}
