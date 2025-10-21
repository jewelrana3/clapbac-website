import Container from "@/layout/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface props {
  _id: string;
  name: string;
  icon: string;
}

export default function BussinessCard({ data }: { data: props[] }) {
  return (
    <Container className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 py-16">
      {data?.map((item) => (
        <Link href={`/bussiness-categories/${item._id}`} key={item._id}>
          <div className="bg-[#C5D92D] p-3  shadow-lg">
            <div className="bg-white  h-32 flex items-center justify-center gap-4 shadow-md">
              <div className="">
                <Image
                  sizes="100vh"
                  className="p-1 h-16 xl:h-[80px] w-auto"
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.icon}`}
                  width={70}
                  height={70}
                  alt={item.name}
                />
              </div>
              <h2 className="text-xl font-semibold text-black">{item.name}</h2>
            </div>
          </div>
        </Link>
      ))}
    </Container>
  );
}
