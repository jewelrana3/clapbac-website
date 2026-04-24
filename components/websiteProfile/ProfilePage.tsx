import React from "react";
import Profile from "./Profile";
import BussinessInformationWebsite from "./BussinessInformationWebsite";
import { myFetch } from "@/utils/myFetch";

export default async function ProfilePage() {
  const res = await myFetch("/users/profile");
  const categories = await myFetch("/categories");

  const company = await myFetch("/companies/my-company");

  return (
    <section className="lg:w-[70%] mx-auto px-4 py-10">
      <div className="bg-[#F8F8F8] p-5">
        {/* profile */}

        <Profile data={res?.data} />

        <hr className="h-px bg-[#C9C9C9] border-0 my-6" />

        {res?.data?.role === "Owner" && (
          <div className="mt-4">
            <h1 className="text-2xl font-semibold my-4">
              Business Information
            </h1>
            <BussinessInformationWebsite
              company={company?.data}
              categories={categories?.data}
            />
          </div>
        )}
      </div>
    </section>
  );
}
