import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input  field-sizing-content min-h-16 w-full border px-3 py-2 text-base outline-none bg-white text-[#3D454E]",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
