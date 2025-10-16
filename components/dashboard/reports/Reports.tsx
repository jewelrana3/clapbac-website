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
import ReportsDetails from "./ReportsDetails";

const users = [
  {
    id: 1,
    ReportID: "montreaux92",
    item: "Review",
    reporter: "Vaughn P.",
    reason: "Spam",
    date: "21/03/23",
    status: "Open",
  },
  {
    id: 2,
    ReportID: "montreaux92",
    item: "Review",
    reporter: "Vaughn P.",
    reason: "Spam",
    date: "21/03/23",
    status: "Open",
  },
  {
    id: 3,
    ReportID: "montreaux92",
    item: "Review",
    reporter: "Vaughn P.",
    reason: "Spam",
    date: "21/03/23",
    status: "Open",
  },
  {
    id: 4,
    ReportID: "montreaux92",
    item: "Review",
    reporter: "Vaughn P.",
    reason: "Spam",
    date: "21/03/23",
    status: "Open",
  },
  {
    id: 5,
    ReportID: "montreaux92",
    item: "Review",
    reporter: "Vaughn P.",
    reason: "Spam",
    date: "21/03/23",
    status: "Open",
  },
  {
    id: 6,
    ReportID: "montreaux92",
    item: "Review",
    reporter: "Vaughn P.",
    reason: "Spam",
    date: "21/03/23",
    status: "Resolved",
  },
];

export default function Reports({ reports }: { reports: any }) {
  return (
    <>
      <DropDownDashboard
        title="Users"
        data={["All", "Active", "Suspended", "Ban"]}
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Report ID</TableHead>
            {/* <TableHead>Reported Item</TableHead> */}
            <TableHead>Reporter</TableHead>
            <TableHead className="">Reason </TableHead>
            <TableHead className="">Date Submitted</TableHead>
            <TableHead className="">Status</TableHead>

            <TableHead className="">View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reports?.map((invoice: any, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  {invoice._id.slice(0, 8).toUpperCase()}
                </TableCell>

                <TableCell className="">
                  <p> {invoice?.user?.firstName}</p>
                </TableCell>
                <TableCell>{invoice.reason}</TableCell>
                <TableCell className="">
                  {invoice.createdAt.slice(0, 10)}
                </TableCell>
                <TableCell className="">
                  <Badge
                    className={`w-20 ${
                      invoice.status === "Open"
                        ? "bg-[#D9D9D9] text-[#3D454E]"
                        : "bg-[#C5D92D] text-[#3D454E]"
                    }`}
                  >
                    {invoice.status}
                  </Badge>
                </TableCell>
                <TableCell className="">
                  <ReportsDetails
                    trigger={<Eye className="text-[#3D454E] cursor-pointer" />}
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
