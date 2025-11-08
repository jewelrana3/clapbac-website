import CompaniesTable from "@/components/dashboard/companies/Companies";
import { myFetch } from "@/utils/myFetch";
import React from "react";

export default async function Companies() {
  const res = await myFetch("/companies");
  return (
    <>
      <CompaniesTable data={res?.data} />{" "}
    </>
  );
}
