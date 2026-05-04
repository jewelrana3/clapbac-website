import MyReviews from "@/components/pages/my-reviews/MyReviews";
import { myFetch } from "@/utils/myFetch";

export default async function MyReviewsPage({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    searchTerm?: string;
  }>;
}) {
  const params = await searchParams;
  const { page = "", searchTerm = "" } = params;

  const query = new URLSearchParams();
  if (page) query.append("page", page);
  if (searchTerm) query.append("searchTerm", searchTerm);

  const reviews = await myFetch(
    `/reviews/my-reviews${query.toString() ? `?${query.toString()}` : ""}`,
  );

  return (
    <>
      <MyReviews reviews={reviews} />
    </>
  );
}
