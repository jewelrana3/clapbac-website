"use client";
import { myFetch } from "@/utils/myFetch";
import Link from "next/link";
import { useEffect, useState } from "react";

type AllName = {
  title: string;
  message: string;
  url: string;
};

export default function ActiveOffer() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [data, setData] = useState<AllName | null>(null);

  const threshold = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (lastScrollY - currentScrollY > threshold) {
        setShow(true);
        setLastScrollY(currentScrollY);
      } else if (currentScrollY - lastScrollY > threshold) {
        setShow(false);
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, threshold]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await myFetch("/announcements/active/User", {
          method: "GET",
        });
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return null;
  }

  return (
    <div
      className={`z-50 bg-[#F05223] text-white text-center w-full flex justify-center py-1`}
    >
      <Link href={data?.url || ""}>{data?.message}</Link>
    </div>
  );
}
