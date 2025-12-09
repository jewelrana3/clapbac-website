"use client";

import Image from "next/image";
import CategoryEdit from "./CategoryEdit";
import { Edit } from "lucide-react";

export default function Categories({ categories }: any) {
  console.log("categories", categories);

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-6 text-[#F05223]">Categories</h1>
        <div>
          <CategoryEdit
            category={categories}
            title="Add Category"
            trigger={
              <div className="flex justify-end cursor-pointer bg-[#F05223] font-bold text-white py-2 px-4 rounded">
                Add Category
              </div>
            }
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {categories?.data?.map((item: any) => (
          <div className="border p-3 rounded-lg flex flex-col " key={item?._id}>
            {/* edit btn */}
            <div>
              <CategoryEdit
                title="Edit Category"
                item={item}
                categoryEdit={categories}
                trigger={
                  <div className="flex justify-end cursor-pointer">
                    <Edit />
                  </div>
                }
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={process.env.NEXT_PUBLIC_BASE_URL + item?.icon}
                alt=""
                width={50}
                height={50}
                className="h-20 w-auto"
                sizes="100vh"
              />
            </div>
            <h1 className="font-bold text-gray-700 text-center mt-2">
              {item?.name}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
}
