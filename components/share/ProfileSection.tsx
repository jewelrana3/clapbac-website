import Image from "next/image";
import React from "react";
import one from "../../public/share-icon/one.svg";
import two from "../../public/share-icon/two.svg";
import Container from "@/layout/Container";

export default function ProfileSection({
  image,
  des,
  shortName,
  className,
}: {
  image: any;
  des: any;
  shortName: string;
  className?: string;
}) {
  return (
    <section className="bg-gray-100 py-12">
      <Container
        className={`flex flex-col md:flex-row items-center justify-center  gap-7 ${className}`}
      >
        <Image
          src={image}
          alt="Alexander S."
          width={247}
          height={295}
          className=" object-cover"
        />
        <div className="text-gray-800">
          <div className="mb-2 text-lg font-semibold ">
            <div className="flex ">
              <div className="flex items-start">
                <Image
                  src={two}
                  alt="Alexander S."
                  width={60}
                  height={42}
                  className=" object-cover"
                />
              </div>
              <div>
                <span>
                  {des}
                  <br />
                  <span> {shortName}</span>
                </span>
              </div>
              <div className="flex items-end">
                <Image
                  src={one}
                  alt="Alexander S."
                  width={60}
                  height={42}
                  className=" object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
