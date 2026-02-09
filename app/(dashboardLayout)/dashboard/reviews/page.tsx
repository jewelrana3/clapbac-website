import Reviews from "@/components/dashboard/reviews/Reviews";
import TablePagination from "@/components/share/Pagination";
import { myFetch } from "@/utils/myFetch";
import React from "react";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ page: string; sort: string }>;
}) {
  const { page = "", sort = "" } = await searchParams;
  const params = new URLSearchParams();
  if (page) params.append("page", page);
  if (sort) params.append("sort", sort);

  const reviews = await myFetch(
    `/reviews${params.toString() ? `?${params.toString()}` : ""}`,
    {
      tags: ["reviews"],
    },
  );

  return (
    <div>
      <Reviews reviews={reviews?.data} />

      <div className="mt-10">
        <TablePagination total={reviews?.pagination?.total} />
      </div>
    </div>
  );
}
