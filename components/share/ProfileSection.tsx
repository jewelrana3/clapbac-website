import Image from "next/image";
import React from "react";
import Container from "@/layout/Container";

export default function ProfileSection({
  image,
  des,
  shortName,
  className,
}: {
  image: any;
  des: any;
  shortName?: string;
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
          className="object-cover"
        />
        <div className="text-gray-800">
          <div className="mb-2 text-lg font-semibold ">
            <div>
              {des}

              <p className="ml-14 md:ml-20 mt-4"> {shortName}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
