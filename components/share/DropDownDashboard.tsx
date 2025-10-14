"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useState } from "react";

export default function DropDownDashboard({
  title,
  data,
}: {
  title: string;
  data: string[];
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [status, setStatus] = useState("");

  let param = searchParams.toString();

  const handleStatusChange = (value: string) => {
    param = `status=${value}`;
    router.push(`${pathname}?${param}`);
    setStatus(value);
  };

  return (
    <div className="flex justify-between mb-5">
      <div className="text-[#F05223] text-3xl font-semibold">{title}</div>
      <div>
        <Select
          // value={status}
          defaultValue={status}
          onValueChange={handleStatusChange}
        >
          <SelectTrigger className="w-[180px] border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent className="h-40 bg-white rounded-md shadow-md">
            <SelectGroup>
              {data.map((item, index) => (
                <SelectItem
                  key={index}
                  value={item}
                  className="cursor-pointer px-3 py-2 text-sm"
                >
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
