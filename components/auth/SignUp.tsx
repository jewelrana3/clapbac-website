"use client";
import React, { useState } from "react";
import SignupPageOwner from "./SignupPageOwner";
import { Sign } from "crypto";
import SignupPageUser from "./SignupPageUser";

export default function SignUp({ categories }: any) {
  const [check, setCheck] = useState("user");
  return (
    <div>
      <div className="grid grid-cols-2 items-center space-x-4 my-6 mt-8 max-w-xl mx-auto">
        <button
          onClick={() => setCheck("user")}
          className={`${
            check === "user" &&
            " bg-[#F05223] text-white border !border-[#F05223]"
          } px-6 py-2 border border-gray-400 rounded cursor-pointer  transition font-bold `}
        >
          Reviewer
        </button>
        <button
          onClick={() => setCheck("owner")}
          className={`px-6 py-2 ${
            check === "owner" &&
            " bg-[#F05223] text-white border !border-[#F05223]"
          } border border-gray-400  rounded cursor-pointer transition font-bold`}
        >
          Business Owner
        </button>
      </div>

      {check === "owner" && <SignupPageOwner categories={categories} />}
      {check === "user" && <SignupPageUser />}
    </div>
  );
}
