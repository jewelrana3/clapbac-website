"use client";
import React, { useState } from "react";
import help from "../../public/clapbac-reviews/help.svg";
import Image from "next/image";

export default function HelpFull() {
  const [add, setAdd] = useState(0);

  return (
    <button
      onClick={() => setAdd(!add ? 1 : 0)}
      className="flex items-center gap-1 px-4 py-2 rounded-md bg-[#C5D92D] text-gray-900 font-semibold hover:bg-lime-500 transition cursor-pointer"
    >
      <Image src={help} width={30} height={10} alt="help" />
      Helpful ({add})
    </button>
  );
}
