"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import man from "../../../public/dashboard/users/man.png";
import { Button } from "@/components/ui/button";

const profileFields = [
  {
    label: "Username",
    placeholder: "Username",
  },

  {
    label: "First Name",
    placeholder: "First Name",
  },
  {
    label: "Last Name",
    placeholder: "Last Name",
  },
  { label: "Title", placeholder: "Title" },
  { label: "Email", placeholder: "Email" },
];

const companyFields = [
  { label: "Company Name", placeholder: "Company Name", value: "Company Name" },
  {
    label: "Bussiness Category",
    placeholder: "Food Drink",
    value: "Food Drink",
  },
  { label: "Address Line 1", placeholder: "123 main dhaka", value: "123 main" },
  { label: "Address Line 2", placeholder: "Khulna", value: "Khulna" },
  { label: "City", placeholder: "Dhaka", value: "Dhaka" },
  { label: "Phone", placeholder: "Phone", value: "Phone" },
  {
    label: "Company Email",
    placeholder: "Company@gmail.com",
    value: "Company@gmail",
  },
  { label: "Website", placeholder: "Website", value: "Website" },
  { label: "Company Details", placeholder: "Website", value: "lorem" },
];

export default function Profile() {
  const handleChangeCompanyDetails = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
  };
  return (
    <section className="w-[70%] mx-auto my-2 ">
      <header className="text-[#F05223] text-2xl font-bold">Profile</header>
      <div className="bg-[#F8F8F8] p-5">
        <div className="grid grid-cols-[30%_auto] gap-5 p-5">
          <div>
            <Image
              src={man}
              alt="Profile"
              width={150}
              height={200}
              className="rounded-full object-cover"
            />
          </div>
          <div className="">
            {profileFields.map((field, index) => (
              <div key={index} className="flex items-center gap-8 my-3">
                <div className="w-40 font-medium text-[#A0A0A0]">
                  {field.label}
                </div>
                <Input
                  type="text"
                  placeholder={field.placeholder}
                  className="flex-1 text-[#3D454E] px-4 py-2 border border-gray-300 rounded"
                />
              </div>
            ))}

            <div className="flex items-center justify-end">
              <Button className="w-[72%] bg-[#F05223] !hover:none">
                Save Changes
              </Button>
            </div>
          </div>
        </div>

        <hr className="h-[1px] bg-[#C9C9C9] border-0" />

        {/* bussiness info     */}
        <div className="grid grid-cols-[30%_auto] gap-5 p-5">
          <div>
            <Image
              src={man}
              alt="Profile"
              width={150}
              height={200}
              className="rounded-full object-cover"
            />
          </div>
          <div>
            {companyFields.map((field, index) => (
              <div key={index} className="flex items-center my-3 gap-6 ">
                <label className="w-36 font-medium text-[#A0A0A0]">
                  {field.label}:
                </label>
                <Input
                  type="text"
                  placeholder={field.placeholder}
                  className="w-[75%] px-4 py-2 border border-gray-300 rounded text-[#3D454E] ml-6"
                  value={field.value}
                  onChange={handleChangeCompanyDetails}
                />
              </div>
            ))}
            {/* btn */}
            <div className="flex items-center justify-end">
              <Button className="w-[72%] bg-[#F05223] !hover:none">
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
