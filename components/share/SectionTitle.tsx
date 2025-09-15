"use client";
import React from "react";
import SearchBar from "../pages/bussinessCategory/Search";
import { usePathname } from "next/navigation";

export default function SectionTitle({
  title,
  subTitle,
}: {
  title: string;
  subTitle?: string;
}) {
  const pathname = usePathname();
  const currentPathname =
    pathname === "/bussiness-categories" || pathname === "/reviewers";
  return (
    <div className="text-center p-12 bg-[#E9E9E9]">
      <h2 className="text-[18px] md:text-2xl text-[#F05223] font-bold">
        {title}
      </h2>
      <p className="text-[#3D454E] md:text-2xl  mt-2 mx-auto lg:w-[37%]">
        {subTitle}
      </p>
      {currentPathname && <SearchBar />}
    </div>
  );
}
