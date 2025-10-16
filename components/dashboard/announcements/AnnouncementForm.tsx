"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { myFetch } from "@/utils/myFetch";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AnnouncementForm = ({
  data,
  trigger,
}: {
  data: any;
  trigger: React.ReactNode;
}) => {
  const [buttonValue, setButtonValue] = useState("");

  const [formData, setFormData] = useState({
    title: data?.title || "",
    message: data?.message || "",
    url: data?.url || "",
  });

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const update = { ...formData, [name]: value };
    setFormData(update);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      title: formData.title,
      message: formData.message,
      url: formData.url,
      status: buttonValue,

      // buttonValue,
    };

    console.log(payload, "payload");

    try {
      const res = await myFetch(`/announcements/${data?._id}`, {
        method: "PATCH",
        body: payload,
      });

      console.log(res);
      if (res.success) {
        toast.success("Announcement updated successfully.");
      } else {
        toast.error(res?.message || "Announcement update failed.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[925px] bg-[#F5F5F5]">
        <form onSubmit={handleSubmit}>
          <div className=" p-6">
            <h2 className="text-lg font-semibold mb-5">
              EDIT ANNOUNCEMENT FORM:
            </h2>

            <div className="flex items-center gap-4">
              <Label className="font-medium text-[#000000] text-[18px] text-right inline w-[150px] ">
                Title/Subject :
              </Label>
              <Input
                name="title"
                type="text"
                className="flex-1 px- py-2 border-none shadow-xl text-[#3D454E] "
                value={formData?.title}
                onChange={handleEdit}
              />
            </div>

            <div className="flex items-center gap-4 mt-3">
              <Label className="font-medium text-[#000000] text-[18px] text-right inline w-[150px]">
                Message :
              </Label>
              <Input
                name="message"
                type="text"
                className="flex-1 px- py-2 border-none shadow-xl text-[#3D454E] "
                value={formData?.message}
                onChange={handleEdit}
              />
            </div>

            <div className="flex items-center gap-4 mt-3">
              <Label className="font-medium text-[#000000] text-[18px] text-right inline w-[150px] text-nowrap">
                URL Link :
              </Label>
              <Input
                name="url"
                type="text"
                className="flex-1 px-4 border rounded shadow-sm"
                placeholder="http://"
                value={formData?.url}
                onChange={handleEdit}
              />
            </div>

            <div className="flex items-center gap-4 mt-3">
              <Label className="font-medium text-[#000000] text-[18px] text-right inline w-[150px]">
                Banner Preview:
              </Label>
              <Input
                className="bg-black flex-1 text-white px-4 py-3 font-medium shadow-md"
                name="banner"
                type="text"
                placeholder="http://"
                value={formData?.message}
                onChange={handleEdit}
              />
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="font-semibold">Schedule :</span>
              <button
                type="submit"
                onClick={() => setButtonValue("Active")}
                className="bg-[#C5D92D] text-[#000000] px-4 rounded-xl font-semibold py-1.5"
              >
                Publish Now
              </button>
              <button
                type="submit"
                onClick={() => setButtonValue("publish")}
                className="bg-[#F05223] text-white px-4 font-semibold rounded-xl py-1.5"
              >
                Set Date/Time
              </button>
              <button
                type="submit"
                onClick={() => setButtonValue("Draft")}
                className="bg-[#A0A0A0] text-white px-4 py-1.5 rounded-xl font-semibold"
              >
                Save Draft
              </button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AnnouncementForm;
