import Reviews from "@/components/dashboard/reviews/Reviews";
import { myFetch } from "@/utils/myFetch";
import React from "react";

export default async function page() {
  const reviews = await myFetch("/reviews");

  return (
    <div>
      <Reviews reviews={reviews?.data} />
    </div>
  );
}
