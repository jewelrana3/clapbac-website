import TermsCondition from "@/components/dashboard/settings/TermsCondition";
import { myFetch } from "@/utils/myFetch";
import React from "react";

export default async function page() {
  const terms = await myFetch("/disclaimers/terms-and-conditions");
  return (
    <div>
      <h1 className="text-lg 2xl:text-2xl font-medium px-4 capitalize">
        Terms & Conditions
      </h1>
      <TermsCondition terms={terms?.data} />
    </div>
  );
}
