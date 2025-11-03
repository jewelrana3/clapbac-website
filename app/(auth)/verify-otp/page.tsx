import VerifyOtp from "@/components/auth/VerifyOtp";
import React, { Suspense } from "react";

export default function page() {
  return (
    <Suspense>
      <VerifyOtp />
    </Suspense>
  );
}
