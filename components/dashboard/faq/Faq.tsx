import { myFetch } from "@/utils/myFetch";
import { Pencil, Plus, Trash2 } from "lucide-react";
import React from "react";
import FaqEditModal from "./FaqEditModal";
import { Button } from "@/components/ui/button";
import DeleteModal from "./DeleteModal";

export default async function Faq() {
  const getFaqs = await myFetch("/faqs", {
    method: "GET",
    tags: ["faqs"],
  });
  return (
    <div className="overflow-y-auto h-[80vh] scroll-smooth scroll-hidden">
      <div className="flex justify-end">
        <FaqEditModal
          trigger={
            <Button className="bg-[#F05223] mb-3">
              <Plus size={19} /> Add Faq
            </Button>
          }
        />
      </div>
      {getFaqs?.data?.map((faq: any) => (
        <div key={faq._id} className="mb-6 border rounded-md p-3">
          <div className="flex justify-between">
            <h2 className="font-bold text-lg mb-2">{faq.question}</h2>
            <div className="flex items-center gap-2">
              <DeleteModal
                id={faq._id}
                trigger={
                  <button>
                    <Trash2 className="text-red-400 cursor-pointer" />
                  </button>
                }
              />
              <FaqEditModal
                faq={faq}
                trigger={
                  <button className="cursor-pointer">
                    <Pencil />
                  </button>
                }
              />
            </div>
          </div>
          <p className="text-gray-700 whitespace-pre-line">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}
