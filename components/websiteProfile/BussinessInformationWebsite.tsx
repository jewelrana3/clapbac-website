"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { myFetch } from "@/utils/myFetch";
import toast from "react-hot-toast";
import { Textarea } from "@/components/ui/textarea";
import { Edit } from "lucide-react";

const fields = [
  {
    name: "name",
    label: "Company Name",
    placeholder: "Company Name",
    type: "text",
  },
  // {
  //   name: "category",
  //   label: "Category",
  //   placeholder: "Food Drink",
  //   type: "text",
  // },
  {
    name: "address",
    label: "Address",
    placeholder: "123 main",
    type: "text",
  },
  // {
  //   name: "addressLine2",
  //   label: "Address Line 2",
  //   placeholder: "Khulna",
  //   type: "text",
  // },
  // { name: "city", label: "City", placeholder: "Dhaka", type: "text" },
  { name: "phone", label: "Phone", placeholder: "Phone", type: "text" },
  {
    name: "email",
    label: "Company Email",
    placeholder: "Company@gmail.com",
    type: "email",
  },
  { name: "website", label: "Website", placeholder: "Website", type: "text" },
];

export default function BussinessInformationWebsite({
  company,
}: {
  company: any;
}) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [companyDetails, setCompanyDetails] = useState({
    name: "",
    // category: "",
    address: "",
    // addressLine2: "",
    // city: "",
    phone: "",
    email: "",
    website: "",
    about: "",
    image: "",
  });

  useEffect(() => {
    if (company) {
      setCompanyDetails({
        name: company?.name || "",
        // category: company?.category || "",
        address: company?.address || "",
        // addressLine2: company?.addressLine2 || "",
        // city: company?.city || "",
        phone: company?.phone || "",
        email: company?.email || "",
        website: company?.website || "",
        about: company?.about || "",
        image: company?.image || "",
      });
    }
  }, [company]);

  useEffect(() => {
    if (company?.logo) {
      const imageUrl = company.logo.startsWith("http")
        ? company.logo
        : process.env.NEXT_PUBLIC_BASE_URL + company.logo;
      setPreviewImage(imageUrl);
    }
  }, [company]);

  const handleChange = (field: string, value: string) => {
    setCompanyDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handleChangeCompanyDetails = (field: string, value: string) => {
    setCompanyDetails((prev) => ({ ...prev, [field]: value }));
  };

  // handle image
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    if (!companyDetails) {
      return toast.error("Please fill all the fields.");
    }

    Object.entries(companyDetails).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // image

    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const res = await myFetch("/companies/68ea220513262fbf6e9e605a", {
        method: "PATCH",
        body: formData,
      });

      if (res.success) {
        toast.success("Bussiness updated successfully.");
      } else {
        toast.error(res.message || "Bussiness Update failed.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    }
  };

  return (
    <>
      {/* image */}
      <div className="relative w-max">
        <div className="border border-gray-300 rounded-full w-[150px] h-[150px] overflow-hidden">
          {previewImage ? (
            <Image
              src={previewImage}
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

      <form onSubmit={handleSubmit}>
        {fields.map(({ name, label, placeholder, type }) => (
          <div key={name} className="flex items-center my-3 gap-6">
            <label className="w-36 font-medium text-[#A0A0A0]">{label}:</label>
            <Input
              name={name}
              type={type}
              placeholder={placeholder}
              className="flex-1 px-4 py-2 border border-gray-300 rounded text-[#3D454E] ml-6"
              value={companyDetails[name as keyof typeof companyDetails]}
              onChange={(e) => handleChange(name, e.target.value)}
            />
          </div>
        ))}
        <div className="flex items-center my-3 gap-6">
          <label className="w-36 font-medium text-[#A0A0A0]">
            Company Details:
          </label>

          <Textarea
            name="about"
            value={companyDetails?.about}
            onChange={(e) =>
              handleChangeCompanyDetails("about", e.target.value)
            }
            className="flex-1 px-4 py-2 border border-gray-300 rounded text-[#3D454E] ml-6"
          />
        </div>
        <div className="flex items-center justify-end">
          <Button className="w-[77.5%] bg-[#F05223] hover:bg-[#F05223]">
            Save Changes
          </Button>
        </div>
      </form>
    </>
  );
}
