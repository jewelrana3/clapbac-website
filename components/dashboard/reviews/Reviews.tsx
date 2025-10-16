import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye } from "lucide-react";
import DropDownDashboard from "@/components/share/DropDownDashboard";
import man from "../../../public/dashboard/users/man.png";
import logo from "../../../public/dashboard/users/logo.png";
import Image from "next/image";
import ReviewsDetails from "./ReviewsDetails";
import companyLogo from "../../../public/logo2.png";
import defaultImage from "../../../public/share-icon/share.webp";

export default function Reviews({ reviews }: any) {
  return (
    <>
      <DropDownDashboard
        title="Reviews"
        data={["All", "Latest Date Submitted", "Latest Date Submitted"]}
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Display Name</TableHead>
            <TableHead>Bussiness Name</TableHead>

            <TableHead className="">Bussiness Category</TableHead>
            <TableHead className="">Location</TableHead>
            <TableHead className="">Submited Date</TableHead>
            <TableHead className="">Helpful</TableHead>
            <TableHead className="">View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reviews.map((invoice: any, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div>
                      {/* <Image
                        src={
                          invoice.user.image
                            ? `${process.env.NEXT_PUBLIC_BASE_URL}${invoice.user.image}`
                            : defaultImage
                        }
                        width={30}
                        height={30}
                        alt={`${invoice.user?.lastName}'s profile`}
                        className=" rounded-full object-cover"
                      /> */}
                    </div>
                    <p>{invoice.user.firstName}</p>
                  </div>
                </TableCell>

                <TableCell className="">
                  <div className="flex items-center gap-2">
                    <div>
                      <Image
                        src={
                          invoice.company?.logo
                            ? process.env.NEXT_PUBLIC_BASE_URL +
                              invoice.company?.logo
                            : companyLogo
                        }
                        width={70}
                        height={40}
                        alt={`${invoice.bussinessName} logo`}
                        className=" rounded-full object-cover"
                      />
                    </div>

                    <p> {invoice.company?.name}</p>
                  </div>
                </TableCell>

                <TableCell className="">
                  {invoice?.company?.category?.name}
                </TableCell>
                <TableCell className="">
                  {invoice?.address || "No Location"}
                </TableCell>
                <TableCell className="">
                  {invoice.createdAt.slice(0, 10)}
                </TableCell>
                <TableCell className="pl-8">{invoice.helpfulCount}</TableCell>
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
