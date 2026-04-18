import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ratingCaculate as ratingCalculate } from "@/components/share/rating/ratingCaculate";
import ReviewersDetails from "./ReviewersDetails";

export default function Reviewers({ reviews }: any) {
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
        Unregistered Reviewers
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
            <TableHead className="">Location</TableHead>
            <TableHead className="">View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reviews.map((review: any, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell className="p-5">
                  <div className="flex items-center gap-2">
                    <p>{review.reviewerName}</p>
                  </div>
                </TableCell>

                <TableCell className="pl-16">{review.helpfulCount}</TableCell>
                <TableCell className="">
                  <div className="rating overall-rating flex">
                    {ratingCalculate(review?.clapbacRating)}
                  </div>
                </TableCell>
                <TableCell className="">
                  {review.createdAt.split("T")[0]}
                </TableCell>
                <TableCell className="">
                  {review?.reviewerAddress || "N/A"}
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
                  <ReviewersDetails data={review} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
