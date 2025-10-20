"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { myFetch } from "@/utils/myFetch";

import share from "../public/share-icon/share.webp";

interface profileData {
  firstName: string;
  image: string;
}

export default function DashboardHeader() {
  const [profileData, setProfileData] = React.useState<profileData>("" as any);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await myFetch("/users/profile");
      setProfileData(res.data);
    };

    fetchData();
  }, []);

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
        {/* navigation */}
        <div>
          <ul className="hidden lg:flex items-center space-x-4">
            {/* <li>
              <Bell className="text-[#FFFFFF] cursor-pointer" />
            </li>
            <li>
              <Mail className="text-[#FFFFFF] cursor-pointer" />
            </li> */}

            {/* profile menu desktop */}
            {profileData ? (
              <div
                className="flex items-center space-x-2 focus:outline-none"
                aria-haspopup="true"
              >
                <Link href="/profile" className="flex items-center gap-4">
                  {" "}
                  <Image
                    src={
                      profileData?.image
                        ? `http://10.10.7.7:5000/${profileData.image}`
                        : share
                    }
                    alt={`${profileData?.firstName || "User"} profile`}
                    width={40}
                    height={50}
                    className="rounded-full"
                  />
                  <span className="text-white font-medium">
                    {profileData?.firstName || "User"}
                  </span>
                </Link>
              </div>
            ) : (
              <Link href="/login">
                <button
                  // onClick={handleLogout}
                  className={`px-3 py-2 rounded transition-colors duration-200 font-bold bg-orange-600 text-white cursor-pointer `}
                >
                  Login
                </button>
              </Link>
            )}
          </ul>
        </div>

        {/* Mobile menu button */}
        {/* <div className="lg:hidden">
          <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div> */}
      </div>

      {/* {isMenuOpen && (
        <div className="lg:hidden absolute top-20 right-0 w-[220px] bg-zinc-900 shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {mobileMenuItems.map((item) => (
              <Link
                key={item.title}
                onClick={() => setIsMenuOpen(false)}
                href={item.href}
                className="block px-3 py-2 font-semibold text-white hover:text-red-500  transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )} */}
    </header>
  );
}
