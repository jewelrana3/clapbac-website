import React from "react";
import { FaSearch } from "react-icons/fa"; // You can use any icon library

const SearchBar = () => {
  return (
    <div className="bg-gray-200 w-full flex justify-center mt-3">
      <div className="flex items-center bg-white rounded-full px-4 py-3 w-full md:max-w-2xl shadow-sm">
        <FaSearch className="text-gray-400 text-lg mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="outline-none w-full bg-transparent text-gray-700"
        />
      </div>
    </div>
  );
};

export default SearchBar;
