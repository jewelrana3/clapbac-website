import ProfileSection from "@/components/share/ProfileSection";
import { Input } from "@/components/ui/input";
import React from "react";
import signUp from "../../../public/signup.jpg";
import SectionTitle from "@/components/share/SectionTitle";
import Link from "next/link";
import Button from "@/components/share/Button";

const des = (
  <>
    <p>
      `Anyone can leave a review. Doesn’t mean they should. This site helps me
      filter <br /> out the noise and focus on feedback from people who actually
      get it.`
    </p>
  </>
);

export default function page() {
  return (
    <>
      <SectionTitle title="Forgot Password" />
      <section className="mt-0 py-20">
        <div className="max-w-xl mx-auto px-16 shadow-xl bg-[#E8E8E8] py-10">
          <form className="space-y-3">
            <Input
              type="email"
              placeholder="Enter Email"
              className="form-input"
            />

            {/* Submit Button */}
            <div className="flex flex-col md:flex-row gap-3 my-4">
              <Link href="/reset-password" className="w-full">
                <Button
                  type="submit"
                  className="bg-[#E95022]  w-full text-white font-bold py-2 rounded-xl"
                >
                  Continue
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </section>
      <ProfileSection
        image={signUp}
        des={des}
        shortName="— Jordan K., Los Angeles"
      />
    </>
  );
}
