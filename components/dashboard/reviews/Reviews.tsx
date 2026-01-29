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
import ReviewsDetails from "./ReviewsDetails";
import UserImage from "@/components/share/customImageHandle/UserImage";
import CompanyImage from "@/components/share/customImageHandle/CompanyImage";

export default function Reviews({ reviews }: any) {
  console.log("reviews", reviews);

  return (
    <>
      <DropDownDashboard
        title="Reviews"
        data={[
          { title: "All", value: "all" },
          { title: "Latest Date Submitted", value: "-createdAt" },
          { title: "Oldest Date Submitted", value: "createdAt" },
        ]}
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User Name</TableHead>
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
          {reviews?.map((invoice: any, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <p>{invoice.user.username}</p>
                  </div>
                </TableCell>
                <TableCell className="">
                  <div className="flex items-center gap-2">
                    <div>
                      <UserImage item={invoice.user?.image} />
                    </div>

                    <p>{invoice.user?.firstName}</p>
                  </div>
                </TableCell>

                <TableCell className="">
                  <div className="flex items-center gap-2">
                    <div>
                      <CompanyImage item={invoice.company?.logo} />
                    </div>

                    <p> {invoice.company?.name}</p>
                  </div>
                </TableCell>

                <TableCell className="">
                  {invoice?.company?.category?.name}
                </TableCell>
                <TableCell className="">
                  {invoice?.reviewerAddress || "No Location"}
                </TableCell>
                <TableCell className="">
                  {invoice.createdAt
                    ? new Date(invoice.createdAt).toLocaleDateString()
                    : "No Date"}
                </TableCell>
                <TableCell className="pl-8">{invoice.helpfulCount}</TableCell>
                <TableCell className="">
                  <ReviewsDetails
                    data={invoice}
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
