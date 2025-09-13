import Button from "@/components/share/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutFooter() {
  return (
    <>
      {/* footer */}
      <section className="bg-[#E9E9E9]">
        <div className="flex flex-col lg:flex-row items-center justify-center py-12 px-5 gap-8">
          {/* Left image */}
          <Image
            src="/about-footer.png"
            alt="Person using phone"
            width={492}
            height={368}
            className=" object-cover"
          />

          {/* Right text */}
          <div className="flex flex-col justify-center  text-[#000000]">
            <p className=" font-bold 800 mb-1 text-xl sm:text-3xl">
              Your story helps someone else choose better.
            </p>
            <p className=" mb-4 text-lg">Say it straight — we’re listening.</p>

            <Link href="/signup" className="cursor-pointer">
              <Button className="">Log In or Sign Up</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
