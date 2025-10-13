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
    label: "Display Name",
    placeholder: "Display Name",
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
  {
    label: "Company Name",
    placeholder: "Company Name",
    value: "companyName",
  },
  {
    label: "Business Category",
    placeholder: "Business Category",
    value: "businessCategory",
  },
  {
    label: "Address Line 1",
    placeholder: "Address Line 1",
    value: "address1",
  },
  {
    label: "Address Line 2",
    placeholder: "Address Line 2",
    value: "address2",
  },
  { label: "City", placeholder: "City", value: "city" },
  {
    label: "State, Zip",
    placeholder: "State, Zip",
    value: "stateZip",
  },
  {
    label: "Phone Number",
    placeholder: "Phone Number",
    value: "phone",
  },
  {
    label: "Company Email",
    placeholder: "Company Email",
    value: "email",
  },
  {
    label: "Website",
    placeholder: "Website",
    value: "website",
  },
];

export default function Profile() {
  return (
    <section className="w-[70%] mx-auto my-2">
      <header className="text-[#F05223] text-2xl font-bold">Profile</header>
      <div className="bg-[#F8F8F8] ">
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

          {/* bussiness info     */}
          {/* <div className="max-w-3xl mx-auto p-6 bg-white space-y-5 mt-5">
        {companyFields.map((field, index) => (
          <div key={index} className="flex items-center gap-6">
            <label className="w-48 font-medium text-[#000000]">
              {field.label}:
            </label>
            <Input
              type="text"
              placeholder={field.placeholder}
              className="flex-1 px-4 py-2 border border-gray-300 rounded text-[#3D454E]"
              value={field.value}
            />
          </div>
        ))}

        <div className="flex items-start gap-6">
          <label className="w-48 font-medium text-[#000000]">
            Company Details:
          </label>
          <textarea
            className="flex-1 px-4 py-2 border border-gray-300 rounded text-[#3D454E] h-32 resize-none"
            placeholder="Enter company description..."
            // value={details}
            // onChange={(e) => setDetails(e.target.value)}
          />
        </div>

        <div className="text-right pt-4">
          <button className="bg-[#F05223] text-white px-6 py-2 rounded-xl font-semibold hover:opacity-90">
            Save Changes
          </button>
        </div>
      </div> */}
        </div>
      </div>
    </section>
  );
}
