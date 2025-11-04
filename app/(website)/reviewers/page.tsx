import Reviewers from "@/components/pages/reviewers/Reviewers";
import { myFetch } from "@/utils/myFetch";
import React from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: {
    page?: string;
    searchTerm?: string;
    reviewerType?: string;
    revewerIndex?: string;
  };
}) {
  const { page, searchTerm, reviewerType, revewerIndex } = searchParams;

  const query = new URLSearchParams();

  if (page) query.append("page", page);
  if (searchTerm) query.append("searchTerm", searchTerm);
  if (reviewerType) query.append("reviewerType", reviewerType);
  if (revewerIndex) query.append("revewerIndex", revewerIndex);

  const reviews = await myFetch(
    `/reviews/reviewers${query.toString() ? `?${query.toString()}` : ""}`
  );

  // recent companies
  const recentCompanies = await myFetch("/recent-companies");

  const getProfile = await myFetch("/users/profile");

  return (
    <div>
      <Reviewers
        reviews={reviews}
        recentCompanies={recentCompanies?.data}
        getProfile={getProfile?.data}
      />
    </div>
  );
}
