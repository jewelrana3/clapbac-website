"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

const AnnouncementForm = ({ trigger }: { trigger: React.ReactNode }) => {
  const [title, setTitle] = useState("Top 10 Reviews");
  const [message, setMessage] = useState(
    "Don't Miss Out! Top 10 Reviews of the Month - Click to Read"
  );
  const [url, setUrl] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[925px] bg-[#F5F5F5]">
        <div className=" p-6">
          <h2 className="text-lg font-semibold ">
            CREATE/EDIT ANNOUNCEMENT FORM:
          </h2>

          <div className="flex items-center gap-4">
            <Label className="font-medium text-[#000000] text-[20px] text-right ">
              Title/Subject :
            </Label>
            <Input
              type="text"
              className="flex-1 px- py-2 border-none shadow-xl text-[#000000] "
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4 mt-3">
            <Label className="font-medium text-[#000000] text-[20px]  text-left">
              Message :
            </Label>
            <Input
              type="text"
              className="flex-1 px- py-2 border-none shadow-xl text-[#000000] "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4 mt-3">
            <Label className="font-medium text-[#000000] text-[20px] text-nowrap text-right">
              URL Link :
            </Label>
            <Input
              type="text"
              className="w-full px-4 border rounded shadow-sm"
              placeholder="http://"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4 mt-3">
            <Label className="font-medium text-[#000000] text-[20px] text-nowrap">
              Banner Preview:
            </Label>
            <div className="bg-black w-full text-white px-4 py-3 font-medium shadow-md">
              {message}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <span className="font-semibold">Schedule :</span>
            <button className="bg-[#C5D92D] text-[#000000] px-4 rounded-xl font-semibold py-1.5">
              Publish Now
            </button>
            <button className="bg-[#F05223] text-white px-4 font-semibold rounded-xl py-1.5">
              Set Date/Time
            </button>
            <button className="bg-[#A0A0A0] text-white px-4 py-1.5 rounded-xl font-semibold">
              Save Draft
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnnouncementForm;
