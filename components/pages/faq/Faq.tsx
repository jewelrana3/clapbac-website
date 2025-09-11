import ProfileSection from "@/components/share/ProfileSection";
import React from "react";
import FaqBody from "./FaqBody";
import faq from "../../../public/faq-profile.png";

export default function Faq() {
  return (
    <div>
      <FaqBody />
      <ProfileSection
        className="w-[60%] mx-auto"
        image={faq}
        des=" I used to scroll through 50+ reviews trying to figure out who was real.This site calls out the BS and actually ranks the reviewers. Game-changer."
        shortName="— Alexander S., Chicago"
      />
    </div>
  );
}
