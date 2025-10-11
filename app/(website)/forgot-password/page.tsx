"use client";

import ProfileSection from "@/components/share/ProfileSection";
import { Input } from "@/components/ui/input";
import React from "react";
import signUp from "../../../public/signup.jpg";
import SectionTitle from "@/components/share/SectionTitle";
import Link from "next/link";
import Button from "@/components/share/Button";
import { myFetch } from "@/utils/myFetch";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const des = (
  <>
    <p>
      `Anyone can leave a review. Doesn’t mean they should. This site helps me
      filter <br /> out the noise and focus on feedback from people who actually
      get it.`
    </p>
  </>
);

export default async function page() {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const email = data.get("email") as string;

    if (!email) return toast.error("Email is required");

    try {
      const res = await myFetch("/auth/forget-password", {
        method: "POST",
        body: { email },
      });

      if (res.success) {
        toast.success("Email Sent Successfully");
        router.push("/verify-otp");
      } else {
        toast.error(res.message || "Email Sent Failed");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <SectionTitle title="Forgot Password" />
      <section className="mt-0 py-20">
        <div className="max-w-xl mx-auto px-16 shadow-xl bg-[#E8E8E8] py-10">
          <form className="space-y-3" onSubmit={handleSubmit}>
            <Input
              name="email"
              type="email"
              placeholder="Enter Email"
              className="form-input"
            />

            {/* Submit Button */}
            <div className="">
              <Button
                htmlType="submit"
                className="bg-[#E95022] w-full text-white font-bold py-2 rounded-xl"
              >
                Continue
              </Button>
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
