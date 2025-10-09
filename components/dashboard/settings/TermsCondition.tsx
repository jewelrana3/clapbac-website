"use client";

import { useRef, useState } from "react";

import { useMediaQuery } from "react-responsive";
import Button from "@/components/share/Button";
import { JoditEditor } from "./JodiEditor";

export default function TermsCondition() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const isLargeScreen = useMediaQuery({ minWidth: 1536 });

  const handleOnSave = (value: string) => {
    console.log(value);
  };
  return (
    <section className="p-3">
      <div className="">
        <div className="">
          <JoditEditor
            className="border-none "
            ref={editor}
            value={content}
            config={{
              height: isLargeScreen ? 600 : 470,
              theme: "",
              readonly: false,
            }}
            onBlur={(newContent) => setContent(newContent)}
          />
        </div>
      </div>

      <Button
        onClick={() => handleOnSave(content)}
        htmlType="submit"
        className="bg-[#C5D92D] text-black font-bold px-10 text-[14px] 2xl:text-lg rounded-full transform transition-all duration-300 ease-in-out 0.5s ease  mt-4 "
      >
        Publish
      </Button>
    </section>
  );
}
