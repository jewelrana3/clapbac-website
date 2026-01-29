"use client";
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
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { myFetch } from "@/utils/myFetch";
import toast from "react-hot-toast";
import Link from "next/link";
import { revalidate } from "@/utils/revalidateTags";

export default function CompaniesTable({ data }: any) {
  const handleFeatured = async (id: any) => {
    try {
      const res = await myFetch(`/companies/featured/${id}`, {
        method: "PATCH",
      });

      if (res?.success) {
        toast.success("Featured updated successfully.");
        await revalidate("companies");
      } else {
        toast.error(
          (res as any)?.error[0].message || "Featured update failed.",
        );
      }
    } catch (error: any) {
      toast.error(error || "Something went wrong.");
    }
  };
  return (
    <div className="mt-9">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Company Logo</TableHead>
            <TableHead>Company Name</TableHead>
            <TableHead className="">Owner Name</TableHead>
            <TableHead className="">Website</TableHead>

            <TableHead className="pl-4">Status</TableHead>

            <TableHead className="pl-12">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((invoice: any, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell className="pl-8">
                  <Image
                    src={
                      invoice?.logo
                        ? `${process.env.NEXT_PUBLIC_BASE_URL}${invoice?.logo}`
                        : "/default-company-logo.png"
                    }
                    alt={invoice?.name}
                    width={50}
                    height={50}
                  />
                </TableCell>

                <TableCell className="">
                  <p> {invoice?.name}</p>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <p> {invoice?.owner?.firstName}</p>{" "}
                    <p> {invoice?.owner?.lastName}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="">
                    <Link
                      href={invoice?.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {invoice?.website.slice(0, 20)}
                    </Link>
                  </div>
                </TableCell>

                <TableCell className="">
                  <Badge className={`w-24  bg-transparent text-gray-700`}>
                    {invoice.isFeatured === true ? "Featured" : "Not Featured"}
                  </Badge>
                </TableCell>
                <TableCell className="">
                  <Button
                    onClick={() => handleFeatured(invoice?._id)}
                    className={`w-36 ${
                      invoice.isFeatured === true
                        ? "bg-[#D9D9D9] text-[#3D454E]"
                        : "bg-[#C5D92D] text-[#3D454E]"
                    }`}
                  >
                    {invoice.isFeatured === true
                      ? "Mark as unFeatured"
                      : "Mark as Featured"}
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
