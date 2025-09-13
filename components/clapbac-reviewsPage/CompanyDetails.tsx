import React from "react";

const CompanyDetails = ({ details }: { details: any }) => {
  const { title, descriptionTitle, description, contactTitle, contact } =
    details;

  return (
    <div className="max-w-md">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>

      <div className="mb-6">
        <h3 className="text-red-600 font-semibold mb-2">{descriptionTitle}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      <div>
        <h3 className="text-red-600 font-semibold mb-2">{contactTitle}</h3>
        <address className="not-italic text-gray-700 space-y-1">
          <p>{contact.address}</p>
          <p>{contact.phone}</p>
          <p>
            <a
              href={`mailto:${contact.email}`}
              className="text-blue-600 underline"
            >
              {contact.email}
            </a>
          </p>
          <p>
            <a
              href={`https://${contact.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {contact.website}
            </a>
          </p>
        </address>
      </div>
    </div>
  );
};

export default CompanyDetails;
