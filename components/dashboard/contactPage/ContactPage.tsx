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
import { Pencil, SquarePen } from "lucide-react";
import ContactModal from "./ContactModal";

export default function ContactPage({ contact }: any) {
  return (
    <>
      <div className="text-[#F05223] text-3xl font-semibold mb-3">
        Contact Us
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className=""> ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="">Phone</TableHead>
            <TableHead className="">Subject</TableHead>
            <TableHead className="">Status</TableHead>

            <TableHead className="">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contact?.map((invoice: any, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  {invoice._id.slice(0, 8).toLowerCase()}
                </TableCell>
                <TableCell>
                  <p>{invoice.firstName + " " + invoice.lastName}</p>
                </TableCell>

                <TableCell className="">
                  <p> {invoice.email}</p>
                </TableCell>

                <TableCell className="">{invoice.phone}</TableCell>
                <TableCell className="">{invoice.subject}</TableCell>
                {/* <TableCell className="">{invoice.status}</TableCell> */}
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
                  <ContactModal invoice={invoice} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
