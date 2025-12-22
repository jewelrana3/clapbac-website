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
import DropDownDashboard from "@/components/share/DropDownDashboard";
import AnnouncementForm from "./AnnouncementForm";

export default function Announcements({ data }: any) {
  return (
    <>
      <div className="flex justify-between">
        <div className="text-[#F05223] text-3xl font-semibold">
          Announcements
        </div>
        {/* left side btn */}
        <div className="flex gap-8">
          <div>
            <AnnouncementForm
              title="Add Announcement"
              trigger={
                <button className="border p-2 rounded-md bg-[#F05223] text-white font-bold cursor-pointer">
                  Add Announcement
                </button>
              }
            />
          </div>
          <DropDownDashboard
            title=""
            data={[
              { title: "All", value: "all" },
              { title: "Active", value: "Active" },
              { title: "Draft", value: "Draft" },
              { title: "Scheduled", value: "Scheduled" },
              { title: "Archived", value: "Archived" },
            ]}
          />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Announcement ID</TableHead>
            <TableHead>Title/Subject </TableHead>
            <TableHead>Audience</TableHead>
            <TableHead className="">Date Published </TableHead>
            <TableHead className="">Status</TableHead>

            <TableHead className="">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((invoice: any, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  {invoice._id.slice(0, 8).toLowerCase()}
                </TableCell>
                <TableCell>
                  <p>{invoice.title}</p>
                </TableCell>

                <TableCell className="">
                  <p> {invoice.audience}</p>
                </TableCell>

                <TableCell className="">
                  {invoice.createdAt.slice(0, 10)}
                </TableCell>
                <TableCell className="">
                  <Badge
                    className={`w-20 ${
                      invoice.status === "Active"
                        ? "bg-[#D9D9D9] text-[#3D454E]"
                        : invoice.status === "Sheduled"
                        ? "bg-[#F05223] text-white"
                        : invoice.status === "Archived"
                        ? "bg-[#000000] text-white"
                        : "bg-[#C5D92D] text-[#3D454E]"
                    }`}
                  >
                    {invoice.status}
                  </Badge>
                </TableCell>
                <TableCell className="">
                  <AnnouncementForm
                    data={invoice}
                    trigger={
                      <span className="text-[#3D454E] font-bold text cursor-pointer">
                        Edit
                      </span>
                    }
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
