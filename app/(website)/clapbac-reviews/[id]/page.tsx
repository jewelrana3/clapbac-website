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
  const res = await myFetch(`/reviews/company/${id}`, { tags: ["reviews"] });
  const companyReviews = res?.data;

  // compnay details
  const companyDetails = await myFetch(`/companies/${id}`, {
    tags: ["companies"],
  });

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
            <div className="bg-[#E9E9E9] p-6 space-y-6">
              {companyReviews.length > 0 ? (
                companyReviews?.map((item: any, index: number) => (
                  <div key={index} className="bg-white p-6 shadow-lg">
                    {/* review card */}
                    <ReviewCard reviews={item} />
                    <SingleComment reply={item} index={0} />

                    {/* comments section */}
                    {<ReviewAndComment review={item} />}
                  </div>
                ))
              ) : (
                <p className="text-center">No reviews found</p>
              )}
            </div>

            {/* disclaimer description */}
            <div className="bg-[#e4e0e0] mt-2 text-justify p-6">
              <h3 className="font-bold text-lg mb-5">Website Disclaimer :</h3>
              “*The content featured on this site includes short excerpts of
              publicly available reviews for the purpose of commentary,
              critique, and community discussion. These excerpts are used under
              the principles of fair use and are transformed by the addition of
              ratings, commentary, and analysis. Clapbac is not affiliated with
              or endorsed by Yelp, Google, TripAdvisor, or any other third-party
              review platform. All reviewer names are anonymized or shown as
              displayed publicly, and any copyrighted content will be removed
              upon request in accordance with the DMCA.”
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
