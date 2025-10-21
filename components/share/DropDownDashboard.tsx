"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

interface DropDownItem {
  title: string;
  value: string;
}

export default function DropDownDashboard({
  title,
  data,
}: {
  title?: string;
  data: DropDownItem[];
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [status, setStatus] = useState("");

  // On mount/update: sync status with current URL param
  useEffect(() => {
    const paramKey = title === "Reviews" ? "sort" : "status";
    const currentParam = searchParams.get(paramKey) || "";
    setStatus(currentParam);
  }, [searchParams, title]);

  const handleStatusChange = (value: string) => {
    const paramKey = title === "Reviews" ? "sort" : "status";

    // Build new URLSearchParams to keep other params intact
    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (value === "all") {
      // If empty, remove the param (show all)
      newSearchParams.delete(paramKey);
    } else {
      newSearchParams.set(paramKey, value);
    }

    router.push(`${pathname}?${newSearchParams.toString()}`);
    setStatus(value);
  };

  return (
    <div className="flex justify-between mb-5">
      <div className="text-[#F05223] text-3xl font-semibold">{title}</div>
      <div>
        <Select value={status} onValueChange={handleStatusChange}>
          <SelectTrigger className="w-[180px] border border-gray-300 rounded-md px-3 py-5 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent className=" bg-white rounded-md shadow-md">
            <SelectGroup>
              {data.map((item, index) => (
                <SelectItem
                  key={index}
                  value={item?.value}
                  className="cursor-pointer px-3 py-2 text-sm"
                >
                  {item.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
