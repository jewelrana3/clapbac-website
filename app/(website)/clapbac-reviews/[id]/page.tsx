import ReviewCard from "@/components/clapbac-reviewsPage/ReviewCard";
import SectionTitle from "@/components/share/SectionTitle";
import Container from "@/layout/Container";
import React from "react";
import CompanyDetails from "@/components/clapbac-reviewsPage/CompanyDetails";
import ComapyNameSection from "@/components/clapbac-reviewsPage/ComapyNameSection";
import { myFetch } from "@/utils/myFetch";
import SingleComment from "@/components/clapbac-reviewsPage/SingleComment";
import ReviewAndComment from "@/components/clapbac-reviewsPage/ReviewAndComment";

export default async function Review({ params }: any) {
  const { id } = await params;
  const res = await myFetch(`/reviews/company/${id}`);
  const companyReviews = res?.data;
  console.log(companyReviews);

  // compnay details
  const companyDetails = await myFetch(`/companies/${id}`);

  // commments
  // const comments = await myFetch(`/comments/review/${id}`);

  return (
    <>
      <SectionTitle
        title="Clapbac Reviews*"
        subTitle="See how businesses are setting the record straight."
      />

      <div className="w-[50%] mx-auto"></div>

      <Container>
        <section className="my-10 flex flex-col lg:flex-row gap-10">
          <div className="flex-1">
            <ComapyNameSection details={companyDetails?.data} />
            <div className="bg-[#E9E9E9] p-6 ">
              {companyReviews.length > 0 ? (
                <div className="bg-white p-6">
                  {/* review card */}
                  <ReviewCard reviews={companyReviews[0]} />
                  <SingleComment reply={companyReviews[0]} index={0} />

                  {/* comments section */}
                  {/* <ReviewAndComment reviews={comments?.data} /> */}
                  {<ReviewAndComment reviews={companyReviews} />}
                </div>
              ) : (
                <p className="text-center">No reviews found</p>
              )}
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <CompanyDetails details={companyDetails?.data} />
          </div>
        </section>
      </Container>
    </>
  );
}
