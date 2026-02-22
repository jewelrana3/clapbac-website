import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { truncateText } from "@/utils/truncateText";
import Link from "next/link";
import React from "react";

export default function ReportsDetails({
  data,
  trigger,
}: {
  data: any;
  trigger: React.ReactNode;
}) {
  console.log("data", data);

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="w-[30vw]">
        <div className=" p-5 ">
          <div className=" ">
            <span className="font-semibold">Reason</span> :{" "}
            {data?.reason || "N/A"}
          </div>
          <div className=" items-center gap-2 ">
            <div className="font-semibold text-base">
              Reviewer Name : {data?.review?.reviewerName}.
            </div>
          </div>
          <p className="leading-relaxed">
            <span className="font-semibold"> Reviewer Message</span> :{" "}
            {truncateText(data?.review?.reviewMessage, 10) ||
              "No review provided."}
            <Link
              href={`/clapbac-reviews/${data?.review?.company}`}
              target="_blank"
              className="ml-4 underline text-primary"
            >
              View full review
            </Link>
          </p>
          <div className="flex justify-end gap-4 mt-6">
            <Button className="text-base cursor-pointer" variant={"outline"}>
              Ignore
            </Button>
            <Button className="text-base cursor-pointer">Resolved</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
