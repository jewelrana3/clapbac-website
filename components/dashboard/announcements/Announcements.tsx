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

const users = [
  {
    id: 1,
    ID: 7209318,
    item: "Top 10 Reviews ",
    audience: "Business Owners",
    reason: "Spam",
    date: "21/03/23",
    status: "Draft",
  },
  {
    id: 2,
    ID: 7209318,
    item: "Top 10 Reviews ",
    audience: "All",
    reason: "Spam",
    date: "21/03/23",
    status: "Sheduled",
  },
  {
    id: 3,
    ID: 7209318,
    item: "Top 10 Reviews ",
    audience: "Reviewers",
    reason: "Spam",
    date: "21/03/23",
    status: "Draft",
  },
  {
    id: 4,
    ID: 7209318,
    item: "Top 10 Reviews ",
    audience: "All",
    reason: "Spam",
    date: "21/03/23",
    status: "Archived",
  },
  {
    id: 5,
    ID: 7209318,
    item: "Top 10 Reviews ",
    audience: "All",
    reason: "Spam",
    date: "21/03/23",
    status: "Draft",
  },
  {
    id: 6,
    ID: 7209318,
    item: "Top 10 Reviews ",
    audience: "All",
    reason: "Spam",
    date: "21/03/23",
    status: "Active",
  },
];

export default function Announcements() {
  return (
    <>
      <DropDownDashboard
        title="Announcements"
        data={["All", "Active", "Suspended", "Ban"]}
      />
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
          {users.map((invoice, index) => {
            return (
              <TableRow key={index}>
                <TableCell className="font-medium">{invoice.ID}</TableCell>
                <TableCell>
                  <p>{invoice.item}</p>
                </TableCell>

                <TableCell className="">
                  <p> {invoice.audience}</p>
                </TableCell>

                <TableCell className="">{invoice.date}</TableCell>
                <TableCell className="">
                  <Badge
                    className={`w-20 ${
                      invoice.status === "Draft"
                        ? "bg-[#D9D9D9] text-[#3D454E]"
                        : invoice.status === "Sheduled"
                        ? "bg-[#F05223] text-white"
                        : invoice.status === "Archived"
                        ? "bg-[#000000] "
                        : "bg-[#C5D92D] text-[#3D454E]"
                    }`}
                  >
                    {invoice.status}
                  </Badge>
                </TableCell>
                <TableCell className="">
                  <AnnouncementForm
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
