"use client";
import React, { useState } from "react";
import help from "../../public/clapbac-reviews/help.svg";
import Image from "next/image";

export default function HelpFull() {
  const [add, setAdd] = useState(false);

  return (
    <button
      onClick={() => setAdd(!add)}
      className={`flex items-center justify-center gap-1 px- py-2 rounded-md border border-[#a0d911] text-gray-900 font-semibold ${
        add ? "bg-[#a0d911]" : "bg-white "
      } transition cursor-pointer text-nowrap text-sm w-[128px]`}
    >
      <Image src={help} width={20} height={10} className="" alt="help" />
      Helpful ({add ? 1 : 0})
    </button>
  );
}
