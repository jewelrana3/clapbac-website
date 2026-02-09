"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { myFetch } from "@/utils/myFetch";
import { revalidate } from "@/utils/revalidateTags";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export function DeleteReviews({ id }: any) {
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    try {
      const res = await myFetch(`/reviews/${id}`, {
        method: "DELETE",
      });

      if (res.success) {
        toast.success(res.message!);
        revalidate("reviews");
      } else {
        toast.error((res as any)?.error[0].message);
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "someting went wrong");
    } finally {
      setOpen(false);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        {/* Trash icon as trigger */}
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-red-600 hover:bg-red-100 cursor-pointer"
          >
            <Trash2 />
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-sm p-8">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold text-red-700">
              Delete Review
            </DialogTitle>
            <DialogDescription className="mt-2 text-md text-gray-600">
              Are you sure you want to delete this review?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-4">
            <DialogClose asChild>
              <Button className="bg-green-500 w-full sm:w-auto">Cancel</Button>
            </DialogClose>
            <Button
              onClick={handleDelete}
              type="submit"
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700"
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
