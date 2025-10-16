import UserDetails from "@/components/dashboard/users/UserDetails";
import Image from "next/image";
import React from "react";
import man from "../../../../../public/dashboard/users/man2.png";
import { ChevronLeft } from "lucide-react";
import { myFetch } from "@/utils/myFetch";

export default async function id({ params }: { params: { id: string } }) {
  const userId = params.id;

  const res = await myFetch(`/users/${userId}`);
  const findUserById = res?.data;
  console.log(findUserById, "user details");

  return (
    <div className=" w-[60%] mx-auto">
      <div className="flex items-center mb-4">
        <span className="bg-[#F5F5F5] text-[#3D454E] p-2">
          <ChevronLeft />
        </span>{" "}
        <button className="text-[#F05223] font-semibold text-2xl">
          View User Profile Details
        </button>
      </div>
      <div className="flex bg-[#F5F5F5] p-9 gap-14">
        <div className="">
          <Image
            src={man}
            alt="Alexander S."
            width={158}
            height={158}
            className="rounded-full"
          />
        </div>
        <div className="flex-1">
          <UserDetails findUserById={findUserById} />
        </div>
      </div>
    </div>
  );
}
