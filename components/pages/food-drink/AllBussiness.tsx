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

const categories = ["Bakery", "Desserts", "Snacks", "Chocolate", "Candy"];
const searches = [
  "Brunch",
  "Steak House",
  "Fine Dining",
  "Ice Cream",
  "Family Restaurant",
];
export default function AllBussiness({
  data,
  total,
}: {
  data: Props[];
  total: number | undefined;
}) {
  console.log("total", total);

  return (
    <Container>
      <section className="flex flex-col lg:flex-row gap-12">
        <div className="basis-[70%] mb-8">
          {/* category header */}
          <CategoryHeader total={total} data={data?.[0]?.category} />

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
            categories={categories}
          />
          <RelatedCategories title=" Popular Searches" categories={searches} />
        </div>
      </section>
    </Container>
  );
}
