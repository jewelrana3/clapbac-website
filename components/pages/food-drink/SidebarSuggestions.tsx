"use client";

import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";

const SidebarSuggestions = ({
  items: categories,
  title,
  itemType,
}: {
  items?: any;
  title?: string;
  itemType: string;
}) => {
  const updateSearchParams = useUpdateSearchParams();

  return (
    <div className="bg-gray-50 shadow-md p-6 border-r-2 w-full lg:w-[90%]">
      <h3 className="text-center text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-3">
        {categories?.map((category: any, index: number) => {
          return (
            <li
              key={index}
              className="text-center cursor-pointer"
              onClick={() => updateSearchParams({ [itemType]: category.value })}
            >
              <p className="text-gray-800 capitalize">{category?.label}</p>
              {index !== categories.length - 1 && (
                <hr className="mt-2 border-gray-200 w-2/3 mx-auto" />
              )}
            </li>
          );
        })}
      </ul>
      {categories?.length === 0 && (
        <p className="text-center text-gray-500">No item found</p>
      )}
    </div>
  );
};

export default SidebarSuggestions;
