const CategoryHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between sm:items-center py-2">
      {/* Left: Category Title */}
      <div>
        <h2 className="text-lg font-semibold">
          Food & Drink : <span className="font-bold">117 Businesses</span>
        </h2>
      </div>

      {/* Right: Sort Dropdown */}
      <div className="flex items-center text-sm space-x-2">
        <span className="text-gray-600">Sort by:</span>
        <select className="text-black font-medium focus:outline-none">
          <option>Most Relevant</option>
          <option>Top Rated</option>
          <option>Most Reviewed</option>
        </select>
      </div>
    </div>
  );
};

export default CategoryHeader;
