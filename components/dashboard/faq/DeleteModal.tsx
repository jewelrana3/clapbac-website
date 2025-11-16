"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { myFetch } from "@/utils/myFetch";
import { revalidate } from "@/utils/revalidateTags";
import React from "react";
import toast from "react-hot-toast";

export default function DeleteModal({
  id,
  trigger,
}: {
  id: string;
  trigger?: React.ReactNode;
}) {
  const handleDelete = async () => {
    try {
      const res = await myFetch(`/faqs/${id}`, {
        method: "DELETE",
      });
      if (res.success) {
        toast.success("FAQ deleted successfully");
        revalidate("faqs");
      } else {
        toast.error("Failed to delete FAQ");
      }
    } catch (error: any) {
      toast.error("Failed to delete FAQ", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <div>
          <h1 className="font-semibold text-2xl text-red-600 text-center p-3">
            Are you sure you want to delete?
          </h1>

          <div className="flex space-x-3 my-3">
            <DialogClose asChild>
              <Button className="w-full bg-red-500">No</Button>
            </DialogClose>
            <Button className="w-full bg-[#F05223]" onClick={handleDelete}>
              Yes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
