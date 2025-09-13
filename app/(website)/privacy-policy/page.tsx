import SectionTitle from "@/components/share/SectionTitle";
import { privacyPolicy, terms } from "@/demoData/privacy-policy";
import Link from "next/link";
import React from "react";

const TermsOfService = () => {
  return (
    <>
      <SectionTitle
        title="Terms of Service and Privacy Policy"
        subTitle="How We Rate and How We Respect Your Data"
      />

      {/* body */}
      <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-2xl font-bold text-[#F05223] mb-4">
          Terms of Service
        </h1>
        <p className="mb-6">
          Welcome to Clapback! By accessing or using our website, you agree to
          the following terms. Please read them carefully.
        </p>

        {terms.map((section, index) => (
          <section key={index} className="mb-6">
            <h2 className="font-semibold text-lg mb-2">{section.title}</h2>

            {section.content && (
              <p>
                {section.content}
                {section.email && (
                  <>
                    <Link
                      href={`mailto:${section.email}`}
                      className="text-[#F05223] ml-1"
                    >
                      {section.email}
                    </Link>
                    .
                  </>
                )}
              </p>
            )}

            {section.list && (
              <ul className="list-disc list-inside space-y-1 mt-2">
                {section.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-2xl font-bold text-[#F05223] mb-4">
          Privacy Policy
        </h1>
        <p className="mb-6">
          We care about your privacy. Here’s how we handle your data on Clapbac.
        </p>

        {privacyPolicy.map((section, index) => (
          <section key={index} className="mb-6">
            <h2 className="font-semibold text-lg mb-2">{section.title}</h2>

            {section.content && (
              <p>
                {section.content}
                {section.email && (
                  <>
                    <Link
                      href={`mailto:${section.email}`}
                      className="text-[#F05223] ml-1"
                    >
                      {section.email}
                    </Link>
                    .
                  </>
                )}
              </p>
            )}

            {section.list && (
              <ul className="list-disc list-inside space-y-1 mt-2">
                {section.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {/* footer */}
    </>
  );
};

export default TermsOfService;
