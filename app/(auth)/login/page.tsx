import LoginPage from "@/components/auth/LoginPage";
import ProfileSection from "@/components/share/ProfileSection";
import SectionTitle from "@/components/share/SectionTitle";
import React from "react";
import signUp from "../../../public/signup.jpg";

const des = (
  <>
    <p>
      `Anyone can leave a review. Doesn’t mean they should. This site helps me
      filter <br /> out the noise and focus on feedback from people who actually
      get it.`
    </p>
  </>
);

export default function Login() {
  return (
    <div>
      <SectionTitle
        title="Log In"
        subTitle="The reviews are in. Time to clap back."
      />

      <LoginPage />

      <ProfileSection
        image={signUp}
        des={des}
        shortName="— Jordan K., Los Angeles"
      />
    </div>
  );
}
