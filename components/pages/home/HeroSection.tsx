import React from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import bgImage from "../../../public/home-banner.jpg"; // replace with your actual image path

export default function HeroSection() {
  return (
    <>
      <div className="relative w-full h-[60vh] md:h-[100vh]">
        {/* Background Image */}
        <Image
          src={bgImage}
          alt="Restaurant Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0  bg-opacity-40 flex flex-col items-center justify-center text-white px-4">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-semibold text-center mb-6">
            They rated you – now rate them back.
          </h1>

          {/* Search Bar */}
          <div className="w-full max-w-xl flex items-center bg-white rounded-full shadow-md overflow-hidden">
            <input
              type="text"
              placeholder="Search reviewer or business category"
              className="flex-grow px-5 py-3 text-gray-700 outline-none rounded-l-full"
            />
            <button className=" text-gray-400 px-5 py-3 rounded-r-full cursor-pointer">
              <FaSearch size={22} />
            </button>
          </div>
        </div>
      </div>
      <section className="bg-black ">
        <div className="flex flex-col lg:flex-row items-center justify-around py-12 px-8 gap-16">
          {/* Right text */}
          <div>
            <h1 className="text-xl md:text-3xl font-bold sm:flex items-center space-x-2 my-3">
              <span className="text-orange-600">We’re Clapbac</span>
              <span className="text-white">|</span>
              <span className="text-[#C4D82D]">We Rate the Raters</span>
            </h1>
            <div className="flex flex-col justify-center  text-[#C7C7C7]">
              <p className=" font-medium 800 mb-1 leading-8">
                This isn’t another review site. Clapbac is where business owners
                fight back. <br /> No more silent frustration while trolls run
                wild. Rate the reviewers, expose <br /> the haters, drop stars
                on critics, tag shady haters and honor great patrons <br />{" "}
                boldly! Reclaim your reputation, your business, your comeback.{" "}
                <br /> Rate the raters at Clapbac.
              </p>
            </div>
          </div>

          {/* Left image */}
          <Image
            src="/home-man.png"
            alt="Person using phone"
            width={492}
            height={368}
            className=" object-cover"
          />
        </div>
      </section>
    </>
  );
}
