"use client";

import SectionTitle from "@/components/share/SectionTitle";
import Container from "@/layout/Container";
import Pagination from "@/components/share/Pagination";
import ReviewCard from "./ReviewCard";

export default function MyReviews({ reviews }: any) {
  return (
    <>
      <SectionTitle
        title="My Reviews"
        subTitle="Keep track of the reviews you've shared."
        searchPlaceholder="Search by reviewer name"
      />

      <Container className="my-10">
        <section className="grid gap-4">
          {reviews?.data?.map((item: any) => (
            <ReviewCard item={item} key={item._id} />
          ))}

          {reviews?.pagination?.total > 9 && (
            <Pagination total={reviews?.pagination?.total} />
          )}
        </section>
      </Container>
    </>
  );
}
