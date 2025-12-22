import LoginPage from "@/components/auth/LoginPage";
import ProfileSection from "@/components/share/ProfileSection";
import SectionTitle from "@/components/share/SectionTitle";
import React, { Suspense } from "react";
import signUp from "../../../public/signup.jpg";
import Image from "next/image";

const des = (
  <section className="flex  gap-4 bg-gray-100 ">
    {/* Left quote image */}
    <div className="shrink-0">
      <Image
        src="/share-icon/two.svg"
        alt="Quote Start"
        className="w-10 md:w-[60px] mb-1"
      />
    </div>

    {/* Text block */}
    <p className="text-lg text-black leading-10">
      Anyone can leave a review. Doesn’t mean they should. This site helps me
      filter <br /> out the noise and focus on feedback from people who actually
      get it.
      <Image
        src="/share-icon/one.svg"
        alt="Quote End"
        className="w-10 md:w-[60px] ml-2 inline"
      />
    </p>
  </section>
);

export default function Login() {
  return (
    <div>
      <SectionTitle
        title="Log In"
        subTitle="The reviews are in. Time to clap back."
      />

      <Suspense>
        <LoginPage />
      </Suspense>

      <ProfileSection
        image={signUp}
        des={des}
        shortName="— Jordan K., Los Angeles"
      />
    </div>
  );
}
