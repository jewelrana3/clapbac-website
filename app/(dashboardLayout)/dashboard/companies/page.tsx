import CompaniesTable from "@/components/dashboard/companies/Companies";
import TablePagination from "@/components/share/Pagination";
import { myFetch } from "@/utils/myFetch";
import React from "react";

export default async function Companies() {
  const res = await myFetch("/companies", {
    tags: ["companies"],
  });
  return (
    <>
      <CompaniesTable data={res?.data} />{" "}
      {res?.data?.length > 10 && (
        <div className="mt-10">
          <TablePagination total={res?.pagination?.total} />
        </div>
      )}
    </>
  );
}
