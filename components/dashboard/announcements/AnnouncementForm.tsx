"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { myFetch } from "@/utils/myFetch";
import React, { useState } from "react";
import toast from "react-hot-toast";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { revalidate } from "@/utils/revalidateTags";

const audiencesData = ["All", "Owner", "User"];

const AnnouncementForm = ({
  title,
  data,
  trigger,
}: {
  title?: string;
  data?: any;
  trigger: React.ReactNode;
}) => {
  const [buttonValue, setButtonValue] = useState("");
  const [audienceValue, setAudienceValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  const [formData, setFormData] = useState({
    audience: data?.audience || "",
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
      audience: formData.audience,
      title: formData.title,
      message: formData.message,
      url: formData.url,
      status: buttonValue,
      // scheduleDate: dateValue,

      // buttonValue,
    };

    try {
      const isEdit = Boolean(data?._id);
      const url = isEdit
        ? `/announcements/${data?._id}`
        : "/announcements/create";
      const method = isEdit ? "PATCH" : "POST";

      const res = await myFetch(url, {
        method,
        body: payload,
      });

      if (res.success) {
        revalidate("announcements");
        toast.success("Announcement updated successfully.");
      } else {
        toast.error(res?.message || "Announcement update failed.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // required
  const requiredField = title ? true : false;

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[925px] bg-[#F5F5F5]">
        <form onSubmit={handleSubmit}>
          <div className=" p-6">
            <h2 className="text-lg font-semibold mb-5">
              {title ? "ADD ANNOUNCEMENT FORM:" : "EDIT ANNOUNCEMENT FORM:"}
            </h2>
            {/* audience */}
            <div className="flex items-center gap-4 mb-4">
              <Label className="font-medium text-[#000000] text-[18px] text-right inline w-[150px] ">
                Audience :
              </Label>
              <Select
                value={formData?.audience}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, audience: value }))
                }
              >
                <SelectTrigger className="flex-1 border border-gray-300 !rounded-none px-3 py-5 text-sm focus:outline-none text-black">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent className=" bg-white rounded-md shadow-md">
                  <SelectGroup>
                    {audiencesData?.map((item: any, index: number) => (
                      <SelectItem
                        key={index}
                        value={item}
                        className="cursor-pointer px-3 py-2 text-sm"
                      >
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

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
                required={requiredField}
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
                required={requiredField}
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
                required={requiredField}
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
                required={requiredField}
              />
            </div>

            <div className="flex justify-between items-center mt-9">
              {/* 3 buttons */}
              <div className=" flex items-center gap-3">
                <span className="font-semibold">Schedule :</span>
                <button
                  type="submit"
                  onClick={() => setButtonValue("Active")}
                  className="cursor-pointer bg-[#C5D92D] text-[#000000] px-4 rounded-xl font-semibold py-1.5"
                >
                  Publish Now
                </button>
                {/* date */}
                <div>
                  <input
                    type="date"
                    value={dateValue}
                    onChange={(e) => setDateValue(e.target.value)}
                    className="cursor-pointer bg-[#F05223] text-white px-4 font-semibold rounded-xl py-1.5"
                  />
                </div>
                <button
                  type="submit"
                  onClick={() => setButtonValue("Draft")}
                  className="cursor-pointer bg-[#A0A0A0] text-white px-4 py-1.5 rounded-xl font-semibold"
                >
                  Save Draft
                </button>
              </div>
              {/* {dateValue && (
                <div>
                  <button
                    type="submit"
                    className="cursor-pointer bg-[#F05223] text-white px-4 py-1.5 rounded-xl font-semibold"
                  >
                    Submit
                  </button>
                </div>
              )} */}
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AnnouncementForm;
