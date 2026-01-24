import React from "react";
import Image from "next/image";

export default async function HeroSection() {
  return (
    <>
      <div
        className="relative w-full bg-[#FEE3B3] h-[calc(100vh-80px)]"
        style={{}}
      >
        {/* Background Image */}
        {/* <Image
          src={bgImage}
          alt="Restaurant Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        /> */}

        <video
          src="/banner-two.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full mx-auto h-full object-contain ring-0 outline-none border border-[#FEE3B3]"
        ></video>

        {/* Overlay */}
        {/* <div className="absolute inset-0  bg-opacity-40 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-semibold text-center mb-6">
            They rated you – now rate them back.
          </h1>

          <Search />
        </div> */}
      </div>
      <section className="bg-black">
        <div className="flex flex-col lg:flex-row items-center justify-around py-12 px-8 gap-16">
          <div>
            <h1 className="text-xl md:text-3xl font-bold sm:flex items-center space-x-2 my-3">
              <span className="text-orange-600">We’re Clapbac</span>
              <span className="text-white">|</span>
              <span className="text-[#C4D82D]">We Rate the Raters</span>
            </h1>
            <div className="flex flex-col justify-center  text-white">
              <p className="text-lg  800 mb-1 leading-8">
                This isn’t another review site. Clapbac is where business owners
                fight back. <br /> No more silent frustration while trolls run
                wild. Rate the reviewers, expose <br /> the haters, drop stars
                on critics, tag shady haters and honor great patrons <br />{" "}
                boldly! Reclaim your reputation, your business, your comeback.{" "}
                <br /> Rate the raters at Clapbac.
              </p>
            </div>
          </div>

          <Image
            priority={true}
            alt="Person using phone"
            width={402}
            height={368}
            className=" object-cover"
            src="/home-man.png"
          />
        </div>
      </section>
    </>
  );
}
