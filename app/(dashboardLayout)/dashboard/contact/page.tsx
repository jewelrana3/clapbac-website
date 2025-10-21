import ContactPage from "@/components/dashboard/contactPage/ContactPage";
import { myFetch } from "@/utils/myFetch";
import React from "react";

export default async function Page() {
  const contact = await myFetch("/supports");
  return (
    <div>
      <ContactPage contact={contact?.data} />
    </div>
  );
}
