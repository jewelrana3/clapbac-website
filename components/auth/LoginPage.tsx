"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { FaApple } from "react-icons/fa";
import google from "../../public/auth/google.png";
import facebook from "../../public/auth/facebook.jpg";
import Link from "next/link";
import Button from "../share/Button";
import { myFetch } from "@/utils/myFetch";
import toast from "react-hot-toast";
import { setCookie } from "cookies-next";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  // GET PROFILE

  const router = useRouter();
  const redirect = useSearchParams()?.get("redirect");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await myFetch("/auth/login", {
        method: "POST",
        body: { email, password },
      });

      if (res.success) {
        toast.success("Login successful", { id: "login" });
        setCookie("OWNER_TOKEN", res.data);
        setCookie("refreshToken", res.data.refreshToken);
        router.push(redirect || "/");
      } else {
        toast.error(res?.message || "Login failed", { id: "login" });
      }
    } catch (error) {}
  };
  return (
    <div className="max-w-xl mx-auto py-12  px-8 md:px-16 shadow-xl bg-[#E8E8E8] rounded my-10 border-r-2">
      {/* Social Buttons */}
      <div className="space-y-3 text-[#A0A0A0]">
        <button className="w-full flex items-center justify-center gap-3 border border-[#D3D3D3] py-2  bg-white">
          <Image src={google} width={30} height={30} alt="google" />
          <span>Sign Up with Google</span>
        </button>
        <button className="w-full flex items-center justify-center gap-3 border border-[#D3D3D3] py-1  bg-white">
          <FaApple className="text-4xl text-black" />
          <span className="mr-3">Sign Up with Apple</span>
        </button>
        <button className="w-full flex items-center justify-center gap-3 border border-[#D3D3D3]  py-2 bg-white">
          <Image
            src={facebook}
            width={30}
            height={30}
            alt="fb"
            className="ml-4"
          />
          <span>Sign Up with Facebook</span>
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center my-4">
        <div className="flex-grow h-px bg-gray-300" />
        <span className="px-3 text-gray-500 text-sm">or</span>
        <div className="flex-grow h-px bg-gray-300" />
      </div>

      {/* Form Fields */}
      <form className="space-y-3" onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          className="form-input"
        />
        <Input
          name="password"
          type="password"
          placeholder="password"
          className="form-input"
        />

        {/* Submit Button */}
        <div className="grid sm:grid-cols-2 gap-3 my-4">
          <Button
            htmlType="submit"
            className="bg-[#E95022] w-full md:flex-1 text-white font-bold py-2 rounded-xl"
          >
            Login
          </Button>

          <Link href="/forgot-password">
            <Button
              htmlType="button"
              className="bg-white w-full text-[#A0A0A0] font-semibold py-2 rounded-xl border border-[#D3D3D3] cursor-pointer"
            >
              Forgot Your Password
            </Button>
          </Link>
        </div>

        {/* Login link */}
        <p className="text-md  text-[#3D454E] font-semibold">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-[#E95022] font-medium">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
