import React from "react";
import Container from "@/layout/Container";
import CategoryHeader from "./CategoryHeader";
import RelatedCategories from "./RalatedCategories";
import FoodDrinkBussinessCard from "./FoodDrinkBussinessCard";
import Pagination from "@/components/share/Pagination";

interface Props {
  _id: string;
  category: {
    name: string;
    icon: string;
  };

  website: string;
  reviewCount: number;
  avgRating: number;
}

export default async function AllBussiness({
  categoryName,
  relatedCategories,
  popularCategories,
  data,
  total,
}: {
  categoryName: string;
  relatedCategories: Props[];
  popularCategories: Props[];
  data: Props[];
  total: number | undefined;
}) {
  return (
    <Container>
      <section className="flex flex-col lg:flex-row gap-12">
        <div className="basis-[70%] mb-8">
          {/* category header */}
          <CategoryHeader total={total} categoryName={categoryName} />

          {/* bussiness cards */}
          {data?.length > 0 ? (
            data?.map((item) => (
              <FoodDrinkBussinessCard item={item} key={item?._id} />
            ))
          ) : (
            <p className="text-center text-gray-500 my-10">
              No businesses found.
            </p>
          )}
          {total && total > 10 ? <Pagination total={total} /> : ""}
        </div>

        {/* categories ralted  */}
        <div className="basis-[30%] my-8 flex flex-col md:flex-row lg:flex-col gap-6 items-end">
          <RelatedCategories
            title="Related Categories"
            categories={relatedCategories}
          />
          <RelatedCategories
            title=" Popular Searches"
            categories={popularCategories}
          />
        </div>
      </section>
    </Container>
  );
}
