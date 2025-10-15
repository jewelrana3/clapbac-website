"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [status, setStatus] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setStatus(value);

    // Preserve other existing query parameters
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("searchTerm", value);
    } else {
      params.delete("searchTerm");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="bg-gray-200 w-full flex justify-center mt-3">
      <div className="flex items-center bg-white rounded-full px-4 py-3 w-full md:max-w-2xl shadow-sm">
        <FaSearch className="text-gray-400 text-lg mr-2" />
        <input
          value={status}
          onChange={handleSearch}
          type="text"
          placeholder="Search"
          className="outline-none w-full bg-transparent text-gray-700"
        />
      </div>
    </div>
  );
};

export default SearchBar;
