"use client";

import React, { useState } from "react";
import Button from "@/components/share/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { myFetch } from "@/utils/myFetch";
import toast, { Toaster } from "react-hot-toast";

const inputs = [
  {
    name: "firstName",
    placeholder: "First Name",
    type: "text",
  },
  { name: "lastName", placeholder: "Last Name", type: "text" },
  { name: "email", placeholder: "Email", type: "email" },
  { name: "phone", placeholder: "Phone", type: "tel" },
  // { name: "address", placeholder: "Address", type: "text" },
  { name: "subject", placeholder: "Subject", type: "text" },
];

interface ContactFormProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  // address: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  // State to hold form inputs
  const [form, setForm] = useState<ContactFormProps>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Submit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = { ...form };

    try {
      const res = await myFetch("/supports/create", {
        method: "POST",
        body: payload,
      });

      if (res.success) {
        toast.success("Contact submitted successfully!");
        // Reset form after successful submit
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(res.message || "Contact submission failed.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-xl py-10 px-10 md:px-20 mx-auto bg-[#f1f1f1] shadow-md my-10 rounded border-r-2">
      <form className="space-y-4" onSubmit={handleSubmit}>
        {inputs.map(({ name, placeholder, type }) => (
          <Input
            key={name}
            name={name}
            placeholder={placeholder}
            type={type}
            value={form[name as keyof ContactFormProps]}
            onChange={handleChange}
          />
        ))}

        <Textarea
          name="message"
          id="message"
          placeholder="Message"
          rows={9}
          className="w-full h-28"
          value={form.message}
          onChange={handleChange}
        />

        <Button
          htmlType="submit"
          className="bg-orange-600 hover:bg-orange-700 w-full sm:w-[206px] h-10 text-md text-white rounded-xl font-semibold"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
