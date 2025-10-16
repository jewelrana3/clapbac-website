import Announcements from "@/components/dashboard/announcements/Announcements";
import { myFetch } from "@/utils/myFetch";
import React from "react";

export default async function page() {
  const announcements = await myFetch("/announcements");
  return (
    <div>
      <Announcements data={announcements?.data} />
    </div>
  );
}
