import Reviewers from "@/components/dashboard/reviewers/Reviewers";
import TablePagination from "@/components/share/Pagination";
import { myFetch } from "@/utils/myFetch";
import React from "react";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const { page = "" } = await searchParams;
  const reviews = await myFetch(
    `${page ? `/reviews/reviewers?page=${page}` : `/reviews/reviewers`}`
  );
  return (
    <div>
      <Reviewers reviews={reviews?.data} />

      <div className="mt-10">
        <TablePagination total={reviews?.pagination?.total} />
      </div>
    </div>
  );
}
