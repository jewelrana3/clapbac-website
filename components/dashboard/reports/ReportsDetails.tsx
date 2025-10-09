import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React from "react";

export default function ReportsDetails({
  trigger,
}: {
  trigger: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <div className=" p-5 ">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-semibold text-base">Nancy B.</span>
            <span className="text-sm text-gray-500">Los Angeles, CA</span>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            This reviewer has proven that she is definitely a piece of work.
            Nunc arcu dui, bibendum vel semper in, rhoncus eget nulla. Nullam
            tempor faucibus ornare. Aliquam vestibulum pharetra est nec
            fringilla. Nulla congue sem a massa gravida viverra. Sed quis mi ut
            risus feugiat accumsan. In in gravida elit, in vestibulum dolor.
            Morbi efficitur viverra dui, quis imperdiet justo vestibulum vel. In
            tempor auctor bibendum.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
