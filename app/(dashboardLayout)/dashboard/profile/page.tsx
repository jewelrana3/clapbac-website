import Profile from "@/components/dashboard/settings/Profile";
import { myFetch } from "@/utils/myFetch";
import React from "react";

export default async function page() {
  const res = await myFetch("/users/profile");
  return (
    <div>
      <Profile data={res?.data} />
    </div>
  );
}
