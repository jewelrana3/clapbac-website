import React from "react";

export default function ReviewersDetailsInfo({
  userInfo,
  topSection,
  topSection2,
  bottomSection,
}: any) {
  return (
    <section className=" text-[#3D454E]">
      <div className=" p-4 text-sm">
        <div className="space-y-1 ">
          {userInfo.map((item: any) => (
            <div key={item.label} className="grid grid-cols-2">
              <p className="font-medium text-gray-600">{item.label}:</p>
              <p> {item.value}</p>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className=" p-4 text-sm  space-y-3">
        {/* Top Section */}
        <div className="space-y-1 pb-2 border-b border-gray-300">
          {topSection.map((item: any) => (
            <div key={item.label} className="grid grid-cols-2">
              <span className="w-40 font-medium text-gray-600">
                {item.label}:
              </span>
              <span className="whitespace-pre-line">
                <span className=" hover:underline">{item.value}</span>
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="space-y-1 pt-1">
          {bottomSection.map((item: any) => (
            <div key={item.label} className="grid grid-cols-2">
              <span className="w-56 font-medium text-gray-600">
                {item.label}
              </span>

              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </section>
  );
}
