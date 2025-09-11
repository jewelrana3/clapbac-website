import React from "react";
import Container from "@/layout/Container";
import { coffeeShops } from "@/demoData/food-drink";
import CategoryHeader from "./CategoryHeader";
import RelatedCategories from "./RalatedCategories";
import PopularSearches from "./PopularSearch";
import FoodDrinkBussinessCard from "./FoodDrinkBussinessCard";
import Pagination from "@/components/share/Pagination";
export default function AllBussiness() {
  return (
    <Container>
      <section className="flex flex-col lg:flex-row gap-12">
        <div className="basis-auto mb-8">
          <CategoryHeader />
          {coffeeShops.map((item, index) => (
            <FoodDrinkBussinessCard item={item} key={index} />
          ))}
          <Pagination />
        </div>

        {/* categories ralted  */}
        <div className="basis-[50%] my-8 flex flex-col md:flex-row lg:flex-col gap-6 items-end">
          <RelatedCategories />
          <PopularSearches />
        </div>
      </section>
    </Container>
  );
}
