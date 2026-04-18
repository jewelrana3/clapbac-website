import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Trash2 } from "lucide-react";
import DropDownDashboard from "@/components/share/DropDownDashboard";
import ReviewsDetails from "./ReviewsDetails";
import UserImage from "@/components/share/customImageHandle/UserImage";
import CompanyImage from "@/components/share/customImageHandle/CompanyImage";
import { truncateText } from "@/utils/truncateText";
import { DeleteReviews } from "./DeleteReviews";

export default function Reviews({ reviews }: any) {
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
            <TableHead>Reviewer Name</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Display Name</TableHead>
            <TableHead>Business Name</TableHead>

            <TableHead className="">Business Category</TableHead>
            <TableHead className="">Location</TableHead>
            <TableHead className="">Submit Date</TableHead>
            <TableHead className="">Helpful</TableHead>
            <TableHead className="">View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reviews?.map((review: any, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell>{review?.reviewerName}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <p>{review.user.username}</p>
                  </div>
                </TableCell>
                <TableCell className="">
                  <div className="flex items-center gap-2">
                    <div>
                      <UserImage item={review.user?.image} />
                    </div>

                    <p>{review.user?.firstName}</p>
                  </div>
                </TableCell>

                <TableCell className="">
                  <div className="flex items-center gap-2">
                    <div>
                      <CompanyImage item={review.company?.logo} />
                    </div>

                    <p> {review.company?.name}</p>
                  </div>
                </TableCell>

                <TableCell className="">
                  {review?.company?.category?.name}
                </TableCell>
                <TableCell className="">
                  {truncateText(review?.company?.address, 5) || "No Location"}
                </TableCell>
                <TableCell className="">
                  {review.createdAt
                    ? new Date(review.createdAt).toLocaleDateString()
                    : "No Date"}
                </TableCell>
                <TableCell className="pl-8">{review.helpfulCount}</TableCell>
                <TableCell className="-pl-16">
                  <div className="flex items-center gap-4 hover:none">
                    <div>
                      <ReviewsDetails
                        data={review}
                        trigger={
                          <div>
                            <Eye className="text-[#3D454E] cursor-pointer" />
                          </div>
                        }
                      />
                    </div>

                    <div>
                      <DeleteReviews id={review?._id} />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
