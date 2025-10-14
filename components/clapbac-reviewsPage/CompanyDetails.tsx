import React from "react";

const CompanyDetails = ({ details }: { details: any }) => {
  return (
    <div className="max-w-md">
      <h2 className="text-lg font-semibold mb-4">Company Details</h2>

      <div className="mb-6">
        <h3 className="text-red-600 font-semibold mb-2">
          Written by the Company
        </h3>
        <p className="text-gray-700 leading-relaxed">{details?.about}</p>
      </div>

      <div>
        <h3 className="text-red-600 font-semibold mb-2">Contact Info</h3>
        <address className="not-italic text-gray-700 space-y-1">
          <p>{details?.address}</p>
          <p>{details?.phone}</p>
          <p>
            <a
              href={`mailto:${details?.email}`}
              className="text-blue-600 underline"
            >
              {details?.email}
            </a>
          </p>
          <p>
            <a
              href={`https://${details?.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {details?.website}
            </a>
          </p>
        </address>
      </div>
    </div>
  );
};

export default CompanyDetails;
