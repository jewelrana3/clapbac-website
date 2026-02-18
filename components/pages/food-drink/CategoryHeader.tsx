"use client";

import { useRouter, useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CategoryHeader = ({ total, data, pathname }: any) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSetParams = (value: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("reviewerIndex", value);
    router.push(`?${newSearchParams.toString()}`);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between sm:items-center py-2">
      {/* Left: Category Title */}
      <div>
        <h2 className="text-lg font-semibold">
          {data?.name || "All Businesses"} {pathname !== "/reviewers" && ":"}{" "}
          <span className="font-bold">
            {total} {pathname === "/reviewers" ? "Reviewers" : "  Businesses"}
          </span>
        </h2>
      </div>

      {/* Right: Sort Dropdown */}
      <div className="flex items-center text-sm space-x-2">
        <span className="text-gray-600">Sort by:</span>

        <Select defaultValue="all" onValueChange={handleSetParams}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">Most Relevant</SelectItem>
              <SelectItem value="mostHighlyRated">Top Rated</SelectItem>
              <SelectItem value="mostFlagged">Most Reviewed</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default CategoryHeader;
