import React from "react";
import Profile from "./Profile";
import BussinessInformationWebsite from "./BussinessInformationWebsite";
import { myFetch } from "@/utils/myFetch";

export default async function ProfilePage() {
  // const [owner, setOwner] = useState(false);
  const res = await myFetch("/users/profile");

  const company = await myFetch("/companies/my-company");
  console.log("company", company);

  return (
    <section className="w-[70%] mx-auto py-10 ">
      <header className="text-[#F05223] text-2xl font-bold">Profile</header>
      <div className="bg-[#F8F8F8] p-5">
        {/* profile */}

        <Profile data={res?.data} />

        <hr className="h-px bg-[#C9C9C9] border-0" />

        {res?.data?.role === "Owner" && (
          <div className="grid grid-cols-[30%_auto] gap-5 p-5">
            <BussinessInformationWebsite company={company?.data} />
          </div>
        )}
      </div>
    </section>
  );
}
