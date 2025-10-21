import Announcements from "@/components/dashboard/announcements/Announcements";
import TablePagination from "@/components/share/Pagination";
import { myFetch } from "@/utils/myFetch";
import React from "react";

export default async function page({
  searchParams,
}: {
  searchParams: { page: string; status: string };
}) {
  const { page, status } = await searchParams;

  const params = new URLSearchParams();
  if (page) params.append("page", page);
  if (status) params.append("status", status);

  const url = `/announcements${
    params.toString() ? `?${params.toString()}` : ""
  }`;

  const announcements = await myFetch(url, {
    tags: ["announcements"],
  });
  return (
    <div>
      <Announcements data={announcements?.data} />

      <div className="mt-10">
        <TablePagination total={announcements?.pagination?.total} />
      </div>
    </div>
  );
}
