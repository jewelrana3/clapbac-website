import Reviewers from "@/components/pages/reviewers/Reviewers";
import { myFetch } from "@/utils/myFetch";
import React from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    searchTerm?: string;
    reviewerType?: string;
    reviewerIndex?: string;
  }>;
}) {
  // ✅ Await the Promise first
  const params = await searchParams;

  const {
    page = "",
    searchTerm = "",
    reviewerType = "",
    reviewerIndex = "",
  } = params;

  // ✅ Build query string
  const query = new URLSearchParams();
  if (page) query.append("page", page);
  if (searchTerm) query.append("searchTerm", searchTerm);
  if (reviewerType) query.append("reviewerType", reviewerType);
  if (reviewerIndex) query.append("reviewerIndex", reviewerIndex);

  const reviews = await myFetch(
    `/reviews/reviewers${query.toString() ? `?${query.toString()}` : ""}`
  );

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
