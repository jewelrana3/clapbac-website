"use client";
import React, { useState } from "react";
import SignupPageOwner from "./SignupPageOwner";
import { Sign } from "crypto";
import SignupPageUser from "./SignupPageUser";

export default function SignUp({ categories }: any) {
  const [check, setCheck] = useState("user");
  return (
    <div>
      <div className="flex items-center justify-center space-x-4 mt-4">
        <button
          onClick={() => setCheck("user")}
          className={`${
            check === "user" &&
            " bg-green-600 text-white border border-green-500 "
          } px-6 py-2 border border-blue-500 rounded cursor-pointer  transition font-bold `}
        >
          User Signup
        </button>
        <button
          onClick={() => setCheck("owner")}
          className={`px-6 py-2 ${
            check === "owner" &&
            " bg-green-600 text-white border border-green-500"
          } border border-blue-500  rounded cursor-pointer transition font-bold`}
        >
          Owner Signup
        </button>
      </div>

      {check === "owner" && <SignupPageOwner categories={categories} />}
      {check === "user" && <SignupPageUser />}
    </div>
  );
}
