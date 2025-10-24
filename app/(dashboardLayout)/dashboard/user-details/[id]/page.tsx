import UserDetails from "@/components/dashboard/users/UserDetails";
import React from "react";
import { ChevronLeft } from "lucide-react";
import { myFetch } from "@/utils/myFetch";
import UserImage from "@/components/share/customImageHandle/UserImage";
// import avatar from "../../../../../public/avatar.jpg";

export default async function id({ params }: { params: { id: string } }) {
  const userId = params.id;

  const res = await myFetch(`/users/${userId}`);
  const findUserById = res?.data;

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
          <UserImage item={findUserById?.image} width={100} height={100} />
        </div>
        <div className="flex-1">
          <UserDetails findUserById={findUserById} />
        </div>
      </div>
    </div>
  );
}
