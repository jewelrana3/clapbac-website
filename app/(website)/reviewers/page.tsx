import Reviewers from "@/components/pages/reviewers/Reviewers";
import { myFetch } from "@/utils/myFetch";
import React from "react";

export default async function page({
  searchParams,
}: {
  searchParams: { page: string; searchTerm: string };
}) {
  const { page, searchTerm } = await searchParams;

  const check = page || searchTerm;

  // reviews
  const reviews = await myFetch(
    check
      ? `/reviews/reviewers?page=${page}&searchTerm=${searchTerm}`
      : `/reviews/reviewers`
  );

  // recent companies
  const recentCompanies = await myFetch("/recent-companies");

  return (
    <div>
      <Reviewers reviews={reviews} recentCompanies={recentCompanies?.data} />
    </div>
  );
}
