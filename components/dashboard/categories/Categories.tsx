import { myFetch } from "@/utils/myFetch";
import Image from "next/image";
import React from "react";

export default async function Categories() {
  const categories = await myFetch("/categories", {
    tags: ["categories"],
  });

  return (
    <div>
      {/* <Image src={image} alt="" width={500} height={500} />
      <h1>Drinks</h1> */}
    </div>
  );
}
