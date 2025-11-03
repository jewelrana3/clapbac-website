"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React from "react";

import { SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { myFetch } from "@/utils/myFetch";
import toast from "react-hot-toast";
import { revalidate } from "@/utils/revalidateTags";

export default function ContactModal({ invoice }: any) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await myFetch(`/supports/${invoice._id}`, {
        method: "PATCH",
        body: {
          status: "Closed",
        },
      });

      if (res.success) {
        toast.success("Status updated successfully");
        revalidate("supports");
      } else {
        toast.error(res.message || "Status Close failed");
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="cursor-pointer">
          <SquarePen />
        </Button>
      </DialogTrigger>

      <DialogContent className="p-3">
        <form className="border rounded p-5 mt-10" onSubmit={handleSubmit}>
          <div>
            <div className="grid grid-cols-2 my-2">
              <strong>Subject : </strong>
              <p>{invoice.subject}</p>
            </div>
            <div className="grid grid-cols-2 my-2">
              <strong>Email : </strong>
              <p>{invoice.email}</p>
            </div>
            <div className="grid grid-cols-2 my-2">
              <strong>Message : </strong>
              <p>{invoice.message}</p>
            </div>
            <div className="grid grid-cols-2 my-2">
              <strong>Date : </strong>
              <p>
                {new Date(invoice.createdAt).toLocaleString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
          {invoice.status !== "Closed" && (
            <div className="mt-6">
              <Button
                className="mt-4 w-full bg-[#F05223]"
                type="submit"
                value="Mark as Resolved"
              >
                Mark as Resolved
              </Button>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
