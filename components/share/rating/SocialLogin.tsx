import Image from "next/image";
import React from "react";
import { FaApple } from "react-icons/fa";
import google from "../../../public/auth/google.png";
import facebook from "../../../public/auth/facebook.jpg";

export default function SocialLogin() {
  return (
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

      <div className="flex items-center my-4">
        <div className="flex-grow h-px bg-gray-300" />
        <span className="px-3 text-gray-500 text-sm">or</span>
        <div className="flex-grow h-px bg-gray-300" />
      </div>
    </div>
  );
}
