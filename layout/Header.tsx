import React from "react";

import WebsiteHeader from "./WebsiteHeader";
import { myFetch } from "@/utils/myFetch";

export default async function Header() {
  const res = await myFetch("/users/profile", {
    tags: ["users-profile"],
  });
  return (
    <>
      <WebsiteHeader profileData={res.data} />
    </>
  );
}
