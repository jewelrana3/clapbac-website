import { myFetch } from "@/utils/myFetch";
import Image from "next/image";
import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default async function Categories() {
  const categories = await myFetch("/categories", {
    tags: ["categories"],
  });

  console.log(categories);

  const handleSelect = (item: any) => {
    console.log(item);
  };
  return (
    <div className="grid grid-cols-4 gap-6">
      {categories?.data?.map((item: any) => (
        <div className="border p-3 rounded-lg flex flex-col ">
          <div className="flex items-center justify-center">
            <Image
              src={process.env.NEXT_PUBLIC_BASE_URL + item?.icon}
              alt=""
              width={50}
              height={50}
              className="h-20 w-auto"
            />
          </div>
          <h1 className="font-bold text-gray-700 mb-2">{item?.name}</h1>

          {/* select */}
          <div className="">
            <div className="">
              <Select>
                <SelectTrigger className="w-full border border-gray-300 rounded-md px-3 py-5 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 cursor-pointer">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent className=" bg-white rounded-md shadow-md">
                  <SelectGroup>
                    {item?.relatedTo?.map((item: any) => (
                      <SelectItem
                        onClick={() => handleSelect(item)}
                        key={item?._id}
                        value={item?.name}
                        className="cursor-pointer px-3 py-2 text-sm "
                      >
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {/* add btn */}
            {/* <div className="basis-1/3">
              <button className="bg-[#F05223] text-white p-2 rounded-md w-full flex items-center justify-center gap-2 text-[13px] h-10 font-semibold cursor-pointer">
                Add
              </button>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
}
