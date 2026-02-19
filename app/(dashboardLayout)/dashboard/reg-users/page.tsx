import Users from "@/components/dashboard/users/Users";
import TablePagination from "@/components/share/Pagination";
import { myFetch } from "@/utils/myFetch";
import React from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page: string; status: string }>;
}) {
  const { page = "", status = "" } = await searchParams;
  const params = new URLSearchParams();
  if (page) params.append("page", page);
  if (status) params.append("status", status);

  const res = await myFetch(
    `/users?role=User${params.toString() ? `?${params.toString()}` : ""}`,
    {
      tags: ["users"],
      cache: "no-store",
    },
  );

  return (
    <div>
      <Users users={res?.data} />
      {res?.data.length > 10 && (
        <div className="mt-10">
          <TablePagination total={res?.pagination?.total} />
        </div>
      )}
    </div>
  );
}
