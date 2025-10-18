import Announcements from "@/components/dashboard/announcements/Announcements";
import { myFetch } from "@/utils/myFetch";
import React from "react";

export default async function page({
  searchParams,
}: {
  searchParams: { status: string };
}) {
  const { status } = await searchParams;
  const announcements = await myFetch(
    `${status ? `/announcements?status=${status}` : `/announcements`}`
  );
  return (
    <div>
      <Announcements data={announcements?.data} />
    </div>
  );
}
