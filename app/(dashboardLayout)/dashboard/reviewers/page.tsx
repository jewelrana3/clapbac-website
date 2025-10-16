import Reviewers from "@/components/dashboard/reviewers/Reviewers";
import { myFetch } from "@/utils/myFetch";
import React from "react";

export default async function page() {
  const reviews = await myFetch("/reviews/reviewers");
  return (
    <div>
      <Reviewers reviews={reviews?.data} />
    </div>
  );
}
