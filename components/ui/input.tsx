import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "border-input flex h-12 w-full min-w-0 border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex text-[18px] text-[#A0A0A0] font-lato bg-white",

        className
      )}
      {...props}
    />
  );
}

export { Input };
