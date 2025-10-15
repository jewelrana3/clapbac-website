"use client";
import { myFetch } from "@/utils/myFetch";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const [data, setData] = useState<any[] | null>(null);
  const [value, setValue] = useState("");

  const [showDropdown, setShowDropdown] = useState(false);

  // const handleSearch = (e) => {
  //   setValue(e.target.value);
  //   setShowDropdown(true);
  // };

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
        item.name.toLowerCase().includes(value.toLowerCase())
      )
    : [];

  return (
    <>
      {/* <div className="w-full max-w-xl flex items-center bg-white rounded-full shadow-md overflow-hidden">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search reviewer or business category"
          className="flex-grow px-5 py-3 text-gray-700 outline-none rounded-l-lg"
        />
        <button className="text-gray-400 px-5 py-3 rounded-r-full cursor-pointer">
          <FaSearch size={22} />
        </button>
      </div>

      {value && (
        <div className="mt- bg-white p-4 rounded-md shadow-sm w-[30%]">
          {filterData && filterData.length > 0 ? (
            filterData.map((item) => (
              <Link
                href={`/bussiness-categories/${item.name}`}
                key={item._id}
                className="block py-2 text-black  rounded px-2"
              >
                {item.name}
              </Link>
            ))
          ) : (
            <p className="text-gray-500 italic">No results found.</p>
          )}
        </div>
      )} */}

      <div className="relative w-full max-w-xl mx-auto">
        {/* Search Bar */}
        <div
          className={`flex items-center bg-white ${
            value ? "rounded-t-lg" : "rounded-full"
          } shadow-md overflow-hidden   transition`}
        >
          <input
            type="text"
            value={value}
            onChange={handleSearch}
            onFocus={() => setShowDropdown(true)}
            onBlur={handleBlur}
            placeholder="Search reviewer or business category"
            className="flex-grow px-5 py-3 text-gray-700 outline-none bg-transparent"
          />
          <button className="text-gray-500 px-5 py-3 hover:text-gray-700 transition">
            <FaSearch size={20} />
          </button>
        </div>

        {/* Dropdown Suggestions */}

        {value && (
          <div
            className={`absolute z-10 mt- w-full bg-white ${
              showDropdown ? "rounded-b-lg" : ""
            } shadow-lg `}
          >
            {filterData && filterData.length > 0 ? (
              filterData.map((item) => (
                <Link
                  href={`/bussiness-categories/${item.name}`}
                  key={item._id}
                  className="block px-4 py-2 text-sm text-gray-800  transition"
                >
                  {item.name}
                </Link>
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
