"use client";
import { ChevronLeft } from "lucide-react";
import React from "react";

export default function BackButton() {
  return (
    <span
      className="bg-[#F5F5F5] text-[#3D454E] p-2 cursor-pointer"
      onClick={() => history.back()}
    >
      <ChevronLeft />
    </span>
  );
}
