import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { FaApple } from "react-icons/fa";
import google from "../../public/auth/google.png";
import facebook from "../../public/auth/facebook.jpg";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="max-w-xl mx-auto py-12 px-8 md:px-16 shadow-xl bg-[#E8E8E8] rounded my-10 border-r-2">
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
      <form className="space-y-3">
        <Input type="text" placeholder="First Name" className="form-input" />
        <Input type="text" placeholder="Last Name" className="form-input" />
        <Input type="text" placeholder="Company Name" className="form-input" />
        <Input type="text" placeholder="Title" className="form-input" />
        <Input
          type="text"
          placeholder="Business Category"
          className="form-input"
        />
        <Input type="email" placeholder="Email" className="form-input" />
        <Input type="password" placeholder="password" className="form-input" />
        <Input type="tel" placeholder="Phone Number" className="form-input" />
        <Input type="url" placeholder="Website" className="form-input" />

        {/* Terms */}
        <div className="flex items-start my-4 text-sm">
          <Checkbox className="mt-1 bg-white" />
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
          className="bg-[#E95022]  w-full text-white font-bold py-2 rounded-xl"
        >
          Create My Account
        </button>

        {/* Login link */}
        <p className="text-md  text-[#3D454E] font-semibold">
          Already have an account?{" "}
          <Link href="/login" className="text-[#E95022] font-medium">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
}
