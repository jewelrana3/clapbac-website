import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        " flex h-12 w-full min-w-0 border border-[#D3D3D3] px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex text-[18px] text-[#A0A0A0] font-lato bg-white my-7",

        className
      )}
      {...props}
    />
  );
}

export { Input };
