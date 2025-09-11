import Signup from "@/components/auth/SignUp";
import ProfileSection from "@/components/share/ProfileSection";
import SectionTitle from "@/components/share/SectionTitle";
import React from "react";
import signUp from "../../../public/signup.jpg";

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
        des="Anyone can leave a review. Doesn’t mean they should. This site helps me filter out the noise and focus on feedback from people who actually get it.
"
        shortName="— Jordan K., Los Angeles"
      />
    </div>
  );
}
