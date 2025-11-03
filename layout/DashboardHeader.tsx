"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { myFetch } from "@/utils/myFetch";
import UserImage from "@/components/share/customImageHandle/UserImage";

interface ProfileData {
  firstName: string;
  image: string;
}

export default function DashboardHeader() {
  const [profileData, setProfileData] = React.useState<ProfileData | null>(
    null
  );
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await myFetch("/users/profile", {
          tags: ["users-profile"],
        });
        setProfileData(res.data);
      } catch (err: any) {
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // ✅ run once

  return (
    <header className="fixed w-full top-0 z-50 bg-[#191919] py-2">
      <div className="flex justify-between items-center h-16 bg-[#191919] px-7">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2 h-fit">
          <Image
            src="/logo-white.png"
            alt="Logo"
            width={200}
            height={30}
            className="w-auto max-h-16"
          />
        </Link>

        {/* Navigation */}
        <div className="hidden lg:flex items-center space-x-4">
          {loading ? (
            <span className="text-gray-400">Loading...</span>
          ) : error ? (
            <span className="text-red-500">{error}</span>
          ) : profileData ? (
            <div
              className="flex items-center space-x-2 focus:outline-none"
              aria-haspopup="true"
            >
              <Link href="/profile" className="flex items-center gap-4">
                <UserImage item={profileData?.image || ""} />
                <span className="text-white font-medium">
                  {profileData.firstName || "User"}
                </span>
              </Link>
            </div>
          ) : (
            <Link href="/login">
              <button className="px-3 py-2 rounded transition-colors duration-200 font-bold bg-orange-600 text-white cursor-pointer">
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Placeholder (Future Implementation) */}
        {/* 
        <div className="lg:hidden">
          <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div> 
        */}
      </div>

      {/* 
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 right-0 w-[220px] bg-zinc-900 shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {mobileMenuItems.map((item) => (
              <Link
                key={item.title}
                onClick={() => setIsMenuOpen(false)}
                href={item.href}
                className="block px-3 py-2 font-semibold text-white hover:text-red-500 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )} 
      */}
    </header>
  );
}
