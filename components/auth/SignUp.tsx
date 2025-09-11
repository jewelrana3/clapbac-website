import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import React from "react";
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";

export default function Signup() {
  return (
    <div className="max-w-md mx-auto p-6 shadow-xl bg-[#E9E9E9] rounded my-10 border-r-2">
      {/* Social Buttons */}
      <div className="space-y-3">
        <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded hover:bg-gray-50">
          <FaGoogle className="text-xl" />
          <span>Sign Up with Google</span>
        </button>
        <button className="w-full flex items-center justify-center gap-3 border border-gray-900 bg-black text-white py-2 rounded hover:bg-gray-800">
          <FaApple className="text-xl" />
          <span>Sign Up with Apple</span>
        </button>
        <button className="w-full flex items-center justify-center gap-3 border border-blue-500 text-blue-600 py-2 rounded hover:bg-blue-50">
          <FaFacebookF className="text-xl" />
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
        <Input type="tel" placeholder="Phone Number" className="form-input" />
        <Input type="url" placeholder="Website" className="form-input" />

        {/* Terms */}
        <div className="flex items-start gap-2 text-sm">
          <Checkbox className="mt-1 bg-white" />
          <label className="text-md text-[#3D454E]">
            I have read and agree to Clapbac’s{" "}
            <a href="#" className="text-[#F05223]">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#F05223]">
              Privacy Policy
            </a>
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
          <a href="#" className="text-[#E95022] font-medium">
            Log In
          </a>
        </p>
      </form>
    </div>
  );
}
