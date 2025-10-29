"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactModal({ invoice }: any) {
  const handleSelect = (value: string) => {
    console.log("Selected:", value);
  };
  console.log(invoice.status);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <SquarePen />
        </Button>
      </DialogTrigger>

      <DialogContent className="p-3">
        <div className="mt-6">
          <Select onValueChange={handleSelect} defaultValue={invoice.status}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Paid">Paid</SelectItem>
                <SelectItem value="Cancelled">Cancelled</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Button className="mt-4 w-full">Submit</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
