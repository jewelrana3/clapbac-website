import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ratingCaculate } from "@/components/share/rating/ratingCaculate";
import ReviewersDetails from "./ReviewersDetails";

export default function Reviewers({ reviews }: any) {
  console.log("reviews", reviews);

  return (
    <>
      {/* <DropDownDashboard
        title="Reviewers"
        data={[
          { title: "Active", value: "Active" },
          { title: "Suspended", value: "Suspended" },
          { title: "Banned", value: "Banned" },
        ]}
      /> */}

      <div className="text-[#F05223] text-3xl font-semibold mb-3">
        Unreg. Reviewers
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            {/* <TableHead className="w-[100px]">User Name</TableHead> */}
            <TableHead>Display Name</TableHead>

            {/* <TableHead className="">Email</TableHead> */}
            <TableHead className="">No. of Responses</TableHead>
            <TableHead className="">Avg Rating</TableHead>
            <TableHead className="">Join Date</TableHead>
            {/* <TableHead className="">Status</TableHead> */}
            <TableHead className="">View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reviews.map((invoice: any, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell className="p-5">
                  <div className="flex items-center gap-2">
                    <p>{invoice.reviewerName}</p>
                  </div>
                </TableCell>

                <TableCell className="pl-16">{invoice.helpfulCount}</TableCell>
                <TableCell className="">
                  <div className="rating overall-rating flex">
                    {ratingCaculate(invoice?.clapbacRating)}
                  </div>
                </TableCell>
                <TableCell className="">
                  {invoice.createdAt.slice(0, 10)}
                </TableCell>
                {/* <TableCell className="pl-">
                  <Badge
                    className={`w-20 ${
                      invoice.status === "Active"
                        ? "bg-[#C5D92D] text-[#3D454E]"
                        : invoice.status === "Banned"
                        ? "bg-[#000000] text-white"
                        : "bg-[#F05223]"
                    }`}
                  >
                    {invoice.status}
                  </Badge>
                </TableCell> */}
                <TableCell className="pl-3">
                  <ReviewersDetails data={invoice} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
