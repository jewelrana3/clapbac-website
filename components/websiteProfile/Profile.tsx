"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { myFetch } from "@/utils/myFetch";
import Image from "next/image";
import { Edit } from "lucide-react";
import man from "../../public/home-man.png";
import { revalidate } from "@/utils/revalidateTags";

const profileFields = [
  //   { label: "username", placeholder: "Username" },
  { label: "firstName", placeholder: "First Name" },
  { label: "lastName", placeholder: "Last Name" },
  { label: "title", placeholder: "Title" },
  //   { label: "email", placeholder: "Email" },
  { label: "phone", placeholder: "phone" },
];

export default function Profile({ data }: any) {
  const [profile, setProfile] = React.useState(data || {});
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (data?.image) {
      const imageUrl = data.image.startsWith("http")
        ? data.image
        : process.env.NEXT_PUBLIC_BASE_URL + data.image;
      setPreviewImage(imageUrl);
    }
  }, [data]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    // Add all profile fields
    const allowedFields = ["firstName", "lastName", "title", "phone"]; // update based on backend

    allowedFields.forEach((field) => {
      if (profile[field]) {
        formData.append(field, profile[field]);
      }
    });

    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const res = await myFetch("/users/profile", {
        method: "PATCH",
        body: formData,
      });

      if (res.success) {
        revalidate("image");
        toast.success("Profile updated successfully.");
      } else {
        toast.error(res.message || "Profile update failed.");
      }
    } catch (err) {
      console.error("Error updating profile:", err);
      toast.error("An error occurred while updating the profile.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const update = { ...profile, [name]: value };

    setProfile(update);
  };

  //   image handle

  // Trigger file input click
  const handleEditClick = () => {
    fileInputRef.current?.click();
  };

  // Handle file selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  return (
    <div className="grid grid-cols-[30%_auto] gap-5 p-5">
      {/* image */}
      <div className="relative w-max">
        <div className="border border-gray-300 rounded-full w-[150px] h-[150px] overflow-hidden">
          {previewImage ? (
            <Image
              src={previewImage ? previewImage : man}
              alt="Profile"
              width={150}
              height={150}
              className="rounded-full object-cover"
            />
          ) : (
            <span className="flex items-center justify-center h-full text-gray-500">
              No Image
            </span>
          )}
        </div>

        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
        />

        {/* Edit icon, clickable to open file picker */}
        <span
          className="absolute left-28 top-28 cursor-pointer text-gray-700 hover:text-gray-900"
          onClick={handleEditClick}
          title="Change profile picture"
        >
          <Edit size={22} />
        </span>
      </div>

      {/* form handle */}
      <div className="">
        <form onSubmit={handleSubmit} className="space-y-4">
          {profileFields.map((field, index) => (
            <div key={index} className="flex items-center gap-8 my-3">
              <div className="w-40 font-medium text-[#A0A0A0] capitalize">
                {field.label}
              </div>
              <Input
                name={field.label}
                type="text"
                placeholder={field.placeholder}
                className="flex-1 text-[#3D454E] px-4 py-2 border border-gray-300 rounded"
                value={profile[field.label]}
                onChange={handleChange}
              />
            </div>
          ))}

          <div className="flex items-center justify-end">
            <Button className="w-[77.5%] bg-[#F05223] hover:bg-[#F05223]">
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
