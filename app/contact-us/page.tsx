import ContactForm from "@/components/pages/contact/page";
import SectionTitle from "@/components/share/SectionTitle";
import React from "react";

export default function Contact() {
  return (
    <div>
      <SectionTitle
        title="Contact Us"
        subTitle=" Have Questions? We're Here to Help."
      />

      <ContactForm />

      <div className="text-center p-12 bg-[#E9E9E9]">
        <h2 className="text-[#F05223] font-semibold text-2xl mb-1"></h2>
        <p className="text-[#3D454E] text-xl   mt-2">
          Just email us at{" "}
          <a href="mailto:support@clapbac.com" className="text-[#F05223] ">
            support@clapbac.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
