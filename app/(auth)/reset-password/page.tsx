"use client";
import ProfileSection from "@/components/share/ProfileSection";
import { Input } from "@/components/ui/input";
import React from "react";
import signUp from "../../../public/signup.jpg";
import SectionTitle from "@/components/share/SectionTitle";
import Button from "@/components/share/Button";
import { myFetch } from "@/utils/myFetch";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

const des = (
  <>
    <p>
      `Anyone can leave a review. Doesn’t mean they should. This site helps me
      filter <br /> out the noise and focus on feedback from people who actually
      get it.`
    </p>
  </>
);

export default function ResetPassword() {
  const router = useRouter();
  const token = useSearchParams()?.get("token") as string;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const newPassword = data.get("newPassword") as string;
    const confirmPassword = data.get("confirmPassword") as string;

    const payload = {
      // token,
      newPassword,
      confirmPassword,
    };

    try {
      const res = await myFetch("/auth/reset-password", {
        method: "POST",
        body: payload,
        token,
      });

      if (res.success) {
        router.push("/login");
      } else {
        toast.error(res.message || "Reset Password Failed");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <SectionTitle title="Reset Password" />
      <section className="mt-0 py-20">
        <div className="max-w-xl mx-auto px-16 shadow-xl bg-[#E8E8E8] py-10">
          <form className="space-y-3" onSubmit={handleSubmit}>
            <Input
              name="newPassword"
              type="newPassword"
              placeholder="Enter New Password"
              className="form-input"
            />
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Enter Confirm Password"
              className="form-input"
            />{" "}
            <Button
              htmlType="submit"
              className="bg-[#E95022] w-full text-white font-bold py-2 rounded-xl"
            >
              Continue
            </Button>
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
