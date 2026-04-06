"use client";
import { myFetch } from "@/utils/myFetch";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const [data, setData] = useState<any[] | null>(null);
  const [value, setValue] = useState("");
  const router = useRouter();

  const [showDropdown, setShowDropdown] = useState(false);

  const handleBlur = () => {
    // Optional: delay hiding to allow click
    setTimeout(() => setShowDropdown(false), 150);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await myFetch(`/categories`);
      setData(categories?.data || []);
    };
    fetchCategories();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setShowDropdown(true);
  };

  const filterData = value
    ? data?.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase()),
      )
    : [];

  const handleClickCategory = (id: string) => {
    router.push(`/bussiness-categories-details?category=${id}&Feature=true`);
    setValue("");
  };

  return (
    <>
      <div className="relative w-full mx-auto">
        {/* Search Bar */}
        <div
          className={`w-full flex items-center bg-white ${
            value ? "rounded-t-lg" : "rounded-full"
          } shadow-md overflow-hidden   transition`}
        >
          <input
            type="text"
            value={value}
            onChange={handleSearch}
            onFocus={() => setShowDropdown(true)}
            onBlur={handleBlur}
            placeholder="Search business category"
            className="grow px-5 sm:py-1 text-gray-700 outline-none bg-transparent w-full md:w-[400px]"
          />
          <button className="text-gray-500 px-5 py-3 hover:text-gray-700 transition">
            <FaSearch size={20} />
          </button>
        </div>

        {/* Dropdown Suggestions */}

        {value && (
          <div
            className={`absolute z-10 mt- w-full bg-white ${
              showDropdown ? "rounded-b-lg" : "rounded-b-lg"
            } shadow-lg `}
          >
            {filterData && filterData.length > 0 ? (
              filterData.map((item) => (
                <div
                  onClick={() => handleClickCategory(item?._id)}
                  key={item._id}
                  className="block px-4 py-2 text-sm text-gray-800  transition hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                  {item.name}
                </div>
              ))
            ) : (
              <p className="px-4 py-2 text-sm text-gray-500 italic">
                No results found.
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
