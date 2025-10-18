import Reviews from "@/components/dashboard/reviews/Reviews";
import { myFetch } from "@/utils/myFetch";
import React from "react";

export default async function page({
  searchParams,
}: {
  searchParams: { sort: string };
}) {
  const { sort } = searchParams;
  const reviews = await myFetch(
    `${sort ? `/reviews?sort=${sort}` : `/reviews`}`
  );

  return (
    <div>
      <Reviews reviews={reviews?.data} />
    </div>
  );
}
