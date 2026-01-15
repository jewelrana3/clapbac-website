"use client";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import Link from "next/link";
import Button from "../share/Button";
import { myFetch } from "@/utils/myFetch";
import toast from "react-hot-toast";
import { setCookie } from "cookies-next";
import { useSearchParams } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { set } from "zod";

export default function LoginPage() {
  const redirect = useSearchParams().get("redirect");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    toast.loading("Logging in...", { id: "login" });

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
        setCookie("accessToken", res?.data?.accessToken);
        setCookie("role", res?.data?.role);

        const isAdmin =
          res?.data?.role === "Admin" || res?.data?.role === "Super Admin";
        const target = redirect || (isAdmin ? "/dashboard" : "/");

        window.location.replace(target);
      } else {
        toast.error(res?.message || "Login failed", { id: "login" });
      }
    } catch (error) {
      toast.error("Error during login", { id: "login" });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-xl mx-auto py-12  px-8 md:px-16 shadow-xl bg-[#E8E8E8] rounded my-10 border-r-2">
      {/* Form Fields */}
      <form className="space-y-3" onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          className="form-input"
        />
        <div className="relative">
          <Input
            name="password"
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            className="form-input"
            required
          />

          <span
            className="absolute top-3 right-3"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? (
              <Eye className="text-[#3D454E] cursor-pointer" />
            ) : (
              <EyeOff className="text-[#3D454E] cursor-pointer" />
            )}
          </span>
        </div>

        {/* Submit Button */}
        <div className="grid sm:grid-cols-2 gap-3 my-4">
          <Button
            htmlType="submit"
            disabled={loading}
            className="bg-[#E95022] w-full md:flex-1 text-white font-bold py-2 rounded-xl"
          >
            {loading ? "Loading..." : "Login"}
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
