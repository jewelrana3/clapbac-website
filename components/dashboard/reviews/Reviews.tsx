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
import man from "../../../public/dashboard/users/man.png";
import logo from "../../../public/dashboard/users/logo.png";
import Image from "next/image";
import Link from "next/link";
import ReviewsDetails from "./ReviewsDetails";

const users = [
  {
    username: "arabian1423",
    name: "Pete Wells",
    bussinessName: "Arabica Coffee",
    profileImage: man, // Replace with actual image URL
    brandLogo: logo, // Replace with actual logo URL
    email: "petewells1423@gmail.com",
    category: "Food & Drink",
    date: "21/03/23",
    brand: "Arabica Coffee",
    status: "Active",
  },
];

export default function Reviews() {
  return (
    <>
      <DropDownDashboard
        title="Reviews"
        data={["All", "Latest Date Submitted", "Latest Date Submitted"]}
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">User Name</TableHead>
            <TableHead>Display Name</TableHead>
            <TableHead>Bussiness Name</TableHead>
            <TableHead className="">Email</TableHead>
            <TableHead className="">Bussiness Category</TableHead>
            <TableHead className="">Location</TableHead>
            <TableHead className="">Date</TableHead>
            <TableHead className="">Helpful</TableHead>
            <TableHead className="">View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, index) => {
            const invoice = users[0];
            return (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  {invoice.username}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <p>{invoice.name}</p>
                    <div>
                      <Image
                        src={invoice.profileImage}
                        alt={`${invoice.name}'s profile`}
                        className=" rounded-full object-cover"
                      />
                    </div>
                  </div>
                </TableCell>

                <TableCell className="">
                  <div className="flex items-center gap-2">
                    <div>
                      <Image
                        src={invoice.brandLogo}
                        alt={`${invoice.bussinessName} logo`}
                        className=" rounded-full object-cover"
                      />
                    </div>

                    <p> {invoice.bussinessName}</p>
                  </div>
                </TableCell>
                <TableCell>{invoice.email}</TableCell>
                <TableCell className="">{invoice.category}</TableCell>
                <TableCell className="">Beverly Hills, CA</TableCell>
                <TableCell className="">{invoice.date}</TableCell>
                <TableCell className="pl-8">0</TableCell>
                <TableCell className="">
                  <ReviewsDetails
                    trigger={
                      <div>
                        <Eye className="text-[#3D454E] cursor-pointer" />
                      </div>
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
