const RelatedCategories = ({
  categories,
  title,
}: {
  categories: any;
  title: string;
}) => {
  return (
    <div className="bg-gray-50 shadow-md p-6 border-r-2 w-full lg:w-[90%]">
      <h3 className="text-center text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-3">
        {categories.map((cat: any, index: number) => {
          return (
            <li key={index} className="text-center">
              <p className="text-gray-800">{cat}</p>
              {index !== categories.length - 1 && (
                <hr className="mt-2 border-gray-200 w-2/3 mx-auto" />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RelatedCategories;
