import Image from "next/image";
import React from "react";
import one from "../../public/share-icon/one.svg";
import two from "../../public/share-icon/two.svg";

export default function ProfileSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-6 gap-7">
      <Image
        src="/faq-profile.png"
        alt="Alexander S."
        width={247}
        height={295}
        className=" object-cover"
      />
      <div className="text-gray-800">
        <div className="mb-2 text-lg font-semibold ">
          <div className="flex ">
            <div className="flex items-start">
              <Image
                src={two}
                alt="Alexander S."
                width={60}
                height={42}
                className=" object-cover"
              />
            </div>
            <div>
              <span>
                I used to scroll through 50+ reviews trying to figure out who
                was real.
                <br />
                <span>
                  This site calls out the BS and actually ranks the reviewers.
                  Game-changer.
                </span>{" "}
                <br />— Alexander S., Chicago
              </span>
            </div>
            <div className="flex items-end">
              <Image
                src={one}
                alt="Alexander S."
                width={60}
                height={42}
                className=" object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
