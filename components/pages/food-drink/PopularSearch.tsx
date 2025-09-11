const PopularSearches = () => {
  const searches = [
    "Brunch",
    "Steak House",
    "Fine Dining",
    "Ice Cream",
    "Family Restaurant",
  ];

  return (
    <div className="bg-gray-50 shadow-md p-6 w-full lg:w-[90%] mt-10">
      <h3 className="text-center text-lg font-semibold mb-4">
        Popular Searches
      </h3>
      <ul className="space-y-3">
        {searches.map((item, index) => (
          <li key={index} className="text-center">
            <p className="text-gray-800">{item}</p>
            {index !== searches.length - 1 && (
              <hr className="mt-2 border-gray-200 w-2/3 mx-auto" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularSearches;
