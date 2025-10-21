import Categories from "@/components/dashboard/categories/Categories";
import { myFetch } from "@/utils/myFetch";
import React from "react";

export default async function page() {
  const categories = await myFetch("/categories", {
    tags: ["categories"],
  });
  return (
    <div>
      <Categories categories={categories} />
    </div>
  );
}
