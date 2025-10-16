import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React from "react";

export default function ReportsDetails({
  data,
  trigger,
}: {
  data: any;
  trigger: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <div className=" p-5 ">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-semibold text-base">
              {data?.review?.reviewerName}
            </span>
            <span className="text-sm text-gray-500">
              {data?.review?.reviewerAddress || "Los Angeles, CA"}
            </span>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            {data?.review?.reviewMessage || "No review provided."}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
