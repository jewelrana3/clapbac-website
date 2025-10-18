"use client";

import React from "react";
import BussinessInformation from "./BussinessInformation";
import ProfilePage from "./ProfilePage";

export default function Profile({ data, company }: any) {
  return (
    <section className="w-[70%] mx-auto my-2 ">
      <header className="text-[#F05223] text-2xl font-bold">Profile</header>
      <div className="bg-[#F8F8F8] p-5">
        {/* profile */}

        <ProfilePage data={data} />

        <hr className="h-[1px] bg-[#C9C9C9] border-0" />

        {/* bussiness info     */}
        <div className="grid grid-cols-[30%_auto] gap-5 p-5">
          <BussinessInformation company={company} />
        </div>
      </div>
    </section>
  );
}
