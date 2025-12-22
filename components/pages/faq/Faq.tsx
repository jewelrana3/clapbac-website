import ProfileSection from "@/components/share/ProfileSection";
import React from "react";
import Image from "next/image";
import FaqBody from "./FaqBody";
import faq from "../../../public/faq-profile.png";

const des = (
  <section className="flex  gap-4 bg-gray-100 ">
    {/* Left quote image */}
    <div className="shrink-0">
      <Image
        src="/share-icon/two.svg"
        alt="Quote Start"
        className="w-10 md:w-[60px] mb-1"
        width={10}
        height={10}
      />
    </div>

    {/* Text block */}
    <p className="text-lg text-black leading-10">
      I used to scroll through 50+ reviews trying to figure out who was real.
      <br />
      This site calls out the BS and actually ranks the reviewers. Game-changer.
      <Image
        src="/share-icon/one.svg"
        alt="Quote End"
        className="w-10 md:w-[60px] ml-2 inline"
      />
    </p>
  </section>
);

const shortName = "— Alexander S., Chicago";
export default function Faq() {
  return (
    <div>
      <FaqBody />
      <ProfileSection
        className=""
        image={faq}
        des={des}
        shortName={shortName}
      />
    </div>
  );
}
