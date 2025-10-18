import Profile from "@/components/dashboard/settings/Profile";
import { myFetch } from "@/utils/myFetch";
import React from "react";

export default async function page() {
  const res = await myFetch("/users/profile");

  const company = await myFetch("/companies/my-company");
  return (
    <div>
      <Profile data={res?.data} company={company?.data} />
    </div>
  );
}
