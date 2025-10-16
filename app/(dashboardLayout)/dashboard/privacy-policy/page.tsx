import PrivacyPolicy from "@/components/dashboard/settings/PrivacyPolicy";
import { myFetch } from "@/utils/myFetch";
import React from "react";

export default async function page() {
  const privacy = await myFetch("/disclaimers/privacy-policy");
  return (
    <div>
      <h1 className="text-lg 2xl:text-2xl font-medium px-4 capitalize">
        Privacy & Policy
      </h1>
      <PrivacyPolicy privacy={privacy?.data} />
    </div>
  );
}
