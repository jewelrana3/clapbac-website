const Pagination = () => {
  return (
    <div className="flex items-center justify-start space-x-2 mt-6">
      {/* Left Arrow */}
      <button className="px-2 py-1 bg-gray-100 text-gray-500 rounded">
        {"<"}
      </button>

      {/* Page Numbers */}
      {[1, 2, 3, 4, 5].map((page) => (
        <button
          key={page}
          className={`px-3 py-1 rounded ${
            page === 1
              ? "bg-gray-200 font-semibold text-gray-700"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Ellipsis and Last Page */}
      <span className="text-gray-500 px-2">...</span>
      <button className="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded">
        48
      </button>

      {/* Right Arrow */}
      <button className="px-2 py-1 bg-gray-100 text-gray-500 rounded">
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
