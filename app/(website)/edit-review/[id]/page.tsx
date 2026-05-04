import Description from "@/components/pages/home/Description";
import EditReviewForm from "@/components/pages/review/EditReviewForm";
import SectionTitle from "@/components/share/SectionTitle";
import { myFetch } from "@/utils/myFetch";
import React from "react";

export default async function EditReviewPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const res = await myFetch(`/reviews/single/${id}`, { tags: ["reviews"] });
  const review = res?.data;

  return (
    <div className="m">
      <SectionTitle
        title="Edit Your Review"
        subTitle="Adjust your rating and comments as needed."
      />

      <EditReviewForm review={review || {}} />

      <Description
        className="md:w-[45%] mx-auto"
        description="We exist to hold reviewers accountable, cut through the noise, and bring honesty back to reviews. No fluff. No filters. Just real people rating the raters — so everyone can make smarter choices with the truth in plain sight."
      />
    </div>
  );
}
