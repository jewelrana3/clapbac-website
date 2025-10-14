import ReviewCard from "@/components/clapbac-reviewsPage/ReviewCard";
import ReviewAndComment from "@/components/clapbac-reviewsPage/ReviewAndComment";
import SectionTitle from "@/components/share/SectionTitle";
import { reviews } from "@/demoData/review-data";
import Container from "@/layout/Container";
import React from "react";
import CompanyDetails from "@/components/clapbac-reviewsPage/CompanyDetails";
// import { companyDetails } from "@/demoData/conpany-data";
import ComapyNameSection from "@/components/clapbac-reviewsPage/ComapyNameSection";
import { myFetch } from "@/utils/myFetch";

export default async function Review({ params }: any) {
  const { id } = await params;
  const res = await myFetch(`/reviews/company/${id}`);
  const companyReviews = res?.data;

  // compnay details
  const companyDetails = await myFetch(`/companies/${id}`);

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
              <div className="bg-white p-6">
                <ReviewCard reviews={companyReviews[0]} />
                {/* <ReviewAndComment reviews={companyReviews} /> */}
              </div>
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
