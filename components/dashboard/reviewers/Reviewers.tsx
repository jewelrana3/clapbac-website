import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";
import DropDownDashboard from "@/components/share/DropDownDashboard";

import Link from "next/link";
import { ratingCaculate } from "@/components/share/rating/ratingCaculate";

const users = [
  {
    id: 1,
    username: "nanbar38",
    name: "Nancy B.",
    email: "NancyBarna38@gmail.com",
    response: "22",
    date: "21/03/23",
    status: "Active",
  },
  {
    id: 2,
    username: "nanbar38",
    name: "Nancy B.",
    email: "NancyBarna38@gmail.com",
    response: "22",
    date: "21/03/23",
    status: "Active",
  },
  {
    id: 3,
    username: "nanbar38",
    name: "Nancy B.",
    email: "NancyBarna38@gmail.com",
    response: "22",
    date: "21/03/23",
    status: "Active",
  },
  {
    id: 4,
    username: "nanbar38",
    name: "Nancy B.",
    email: "NancyBarna38@gmail.com",
    response: "22",
    date: "21/03/23",
    status: "Active",
  },
  {
    id: 5,
    username: "nanbar38",
    name: "Nancy B.",
    email: "NancyBarna38@gmail.com",
    response: "22",
    date: "21/03/23",
    status: "Active",
  },
  {
    id: 6,
    username: "nanbar38",
    name: "Nancy B.",
    email: "NancyBarna38@gmail.com",
    response: "22",
    date: "21/03/23",
    status: "Suspended",
  },
  {
    id: 7,
    username: "nanbar38",
    name: "Nancy B.",
    email: "NancyBarna38@gmail.com",
    response: "22",
    date: "21/03/23",
    status: "Active",
  },
  {
    id: 8,
    username: "nanbar38",
    name: "Nancy B.",
    email: "NancyBarna38@gmail.com",
    response: "22",
    date: "21/03/23",
    status: "Banned",
  },
];

export default function Reviewers({ reviews }: any) {
  return (
    <>
      <DropDownDashboard
        title="Reviewers"
        data={["All", "Latest Date Submitted", "Latest Date Submitted"]}
      />
      <Table>
        <TableHeader>
          <TableRow>
            {/* <TableHead className="w-[100px]">User Name</TableHead> */}
            <TableHead>Display Name</TableHead>

            {/* <TableHead className="">Email</TableHead> */}
            <TableHead className=""># of R esponses</TableHead>
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
                  <Link href={`/dashboard/reviewers/${invoice.username}`}>
                    <Eye className="text-[#3D454E] cursor-pointer" />
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
