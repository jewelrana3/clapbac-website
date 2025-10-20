import Reviewers from "@/components/pages/reviewers/Reviewers";
import { myFetch } from "@/utils/myFetch";
import React from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: { page?: string; searchTerm?: string };
}) {
  const { page, searchTerm } = searchParams;

  const query = new URLSearchParams();

  if (page) query.append("page", page);
  if (searchTerm) query.append("searchTerm", searchTerm);

  const reviews = await myFetch(
    `/reviews/reviewers${query.toString() ? `?${query.toString()}` : ""}`
  );

  // recent companies
  const recentCompanies = await myFetch("/recent-companies");

  return (
    <div>
      <Reviewers reviews={reviews} recentCompanies={recentCompanies?.data} />
    </div>
  );
}
