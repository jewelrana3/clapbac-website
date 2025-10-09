import PrivacyPolicy from "@/components/dashboard/settings/PrivacyPolicy";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="text-lg 2xl:text-2xl font-medium px-4 capitalize">
        Privacy & Policy
      </h1>
      <PrivacyPolicy />
    </div>
  );
}
