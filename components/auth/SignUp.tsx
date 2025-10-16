"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { FaApple } from "react-icons/fa";
import google from "../../public/auth/google.png";
import facebook from "../../public/auth/facebook.jpg";
import Link from "next/link";
import toast from "react-hot-toast";
import { myFetch } from "@/utils/myFetch";

type FormValues = {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  password: string;
  phone: string;
  website: string;
  title: string;
  businessCategory: string;
};

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: any) => {
    try {
      const res = await myFetch("/users/create-owner", {
        method: "POST",
        body: data,
      });

      if (res.success) {
        toast.success("Sign up successful! Please check your email to verify.");
      } else {
        toast.error("Sign up failed: " + res.message);
      }
    } catch (err: any) {
      toast.error("Error during sign up", err);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-8 md:px-16 shadow-xl bg-[#E8E8E8] rounded my-10 border-r-2">
      {/* Social Buttons */}
      <div className="space-y-3 text-[#A0A0A0]">
        <button className="w-full flex items-center justify-center gap-3 border border-[#D3D3D3] py-2 bg-white">
          <Image src={google} width={30} height={30} alt="google" />
          <span>Sign Up with Google</span>
        </button>
        <button className="w-full flex items-center justify-center gap-3 border border-[#D3D3D3] py-1 bg-white">
          <FaApple className="text-4xl text-black" />
          <span className="mr-3">Sign Up with Apple</span>
        </button>
        <button className="w-full flex items-center justify-center gap-3 border border-[#D3D3D3] py-2 bg-white">
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
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <Input
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>
        <div>
          <Input
            type="text"
            placeholder="Company Name"
            {...register("companyName", {
              required: "Company name is required",
            })}
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm">{errors.companyName.message}</p>
          )}
        </div>
        <div>
          <Input
            type="text"
            placeholder="Title"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>
        <div>
          <Input
            type="text"
            placeholder="Business Category"
            {...register("businessCategory", {
              required: "Business category is required",
            })}
          />
          {errors.businessCategory && (
            <p className="text-red-500 text-sm">
              {errors.businessCategory.message}
            </p>
          )}
        </div>
        <div>
          <Input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div>
          <Input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <div>
          <Input
            type="tel"
            placeholder="Phone Number"
            {...register("phone", { required: "Phone number is required" })}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <Input
            type="url"
            placeholder="Website"
            {...register("website", { required: "Website is required" })}
          />
          {errors.website && (
            <p className="text-red-500 text-sm">{errors.website.message}</p>
          )}
        </div>

        {/* Terms */}
        <div className="flex items-start my-4 text-sm">
          <input type="checkbox" className="mt-1 bg-white" />
          <label className="text-md text-[#3D454E] ml-3 leading-6">
            I have read and agree to Clapbac’s{" "}
            <Link href="/privacy-policy" className="text-[#F05223]">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="text-[#F05223]">
              Privacy Policy
            </Link>
            .
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#E95022] w-full text-white font-bold py-2 rounded-xl"
        >
          Create My Account
        </button>

        {/* Login link */}
        <p className="text-md text-[#3D454E] font-semibold">
          Already have an account?{" "}
          <Link href="/login" className="text-[#E95022] font-medium">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
}
