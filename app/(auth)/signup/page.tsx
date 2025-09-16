import Signup from "@/components/auth/SignUp";
import ProfileSection from "@/components/share/ProfileSection";
import SectionTitle from "@/components/share/SectionTitle";
import React from "react";
import signUp from "../../../public/signup.jpg";

import one from "../../../public/share-icon/one.svg";
import two from "../../../public/share-icon/two.svg";
import Image from "next/image";

const des = (
  <section className="flex  gap-4 bg-gray-100 ">
    {/* Left quote image */}
    <div className="flex-shrink-0">
      <Image src={two} alt="Quote Start" className="w-10 md:w-[60px] mb-1" />
    </div>

    {/* Text block */}
    <p className="text-lg text-black leading-10">
      Anyone can leave a review. Doesn’t mean they should. This site helps me
      filter <br /> out the noise and focus on feedback from people who actually
      get it.
      <Image
        src={one}
        alt="Quote End"
        className="w-10 md:w-[60px] ml-2 inline"
      />
    </p>
  </section>
);

export default function SignupPage() {
  return (
    <div>
      <SectionTitle
        title="Sign Up"
        subTitle=" Join now and give reviewers a taste of their own stars."
      />
      <Signup />

      <ProfileSection
        image={signUp}
        des={des}
        shortName="— Jordan K., Los Angeles"
      />
    </div>
  );
}
