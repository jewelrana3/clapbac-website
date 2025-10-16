"use client";

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { myFetch } from "@/utils/myFetch";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function InputOTPPattern() {
  const [otpValue, setOtpValue] = useState("");
  const router = useRouter();

  const handleOtpChange = (value: string) => {
    setOtpValue(value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      email: "jbdcalling@gmail.com",
      oneTimeCode: Number(otpValue),
    };

    try {
      const res = await myFetch("/auth/verify-email", {
        method: "POST",
        body: payload,
      });

      if (res.success) {
        router.push(`/reset-password?token=${res.data}`);
      } else {
        toast.error(res.message || "Email Sent Failed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center  h-screen">
      <form className="" onSubmit={handleSubmit}>
        <div className="bg-[#E8E8E8] shadow-md rounded-md p-10 max-w-2xl mx-auto">
          <p className="text-[#3E464F] text-lg mb-7">
            We’ve sent a one-time password (OTP) to your email/phone. <br />{" "}
            Please enter the code below to continue.
          </p>

          <InputOTP
            maxLength={6}
            value={otpValue}
            onChange={handleOtpChange}
            pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
          >
            <InputOTPGroup>
              {[...Array(6)].map((_, i) => (
                <InputOTPSlot
                  key={i}
                  index={i}
                  className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              ))}
            </InputOTPGroup>
          </InputOTP>

          <div className="flex flex-col items-center justify-center mt-5">
            <p className="text-gray-500 text-sm mb-3">Resent in 0:59</p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition">
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
