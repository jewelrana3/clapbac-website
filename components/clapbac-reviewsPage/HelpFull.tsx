"use client";
import React, { useState } from "react";
import help from "../../public/clapbac-reviews/help.svg";
import Image from "next/image";

export default function HelpFull() {
  const [add, setAdd] = useState(0);

  return (
    <button
      onClick={() => setAdd(!add ? 1 : 0)}
      className="flex items-center justify-center gap-1 px- py-2 rounded-md bg-[#C5D92D] text-gray-900 font-semibold hover:bg-lime-500 transition cursor-pointer text-nowrap text-sm"
    >
      <Image src={help} width={20} height={10} className="" alt="help" />
      Helpful ({add})
    </button>
  );
}
