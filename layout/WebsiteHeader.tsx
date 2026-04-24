"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

import { UserDropdownMenu } from "./UserDropdownMenu";
import ActiveOffer from "@/components/share/ActiveOffer";
import { Skeleton } from "@/components/ui/skeleton";
import Search from "@/components/pages/home/Search";
import { deleteCookie } from "cookies-next/client";

interface ProfileData {
  firstName: string;
  image: string;
  role: string;
}

const navItems = [
  { title: "Rate a Reviewer", href: "/rate-reviewer" },
  { title: "Business Categories", href: "/bussiness-categories" },
  { title: "Reviewers", href: "/reviewers" },
  { title: "FAQ", href: "/faq" },
  { title: "About", href: "/about-us" },
  { title: "Contact", href: "/contact-us" },
];

export default function WebsiteHeader({
  profileData,
}: {
  profileData?: ProfileData;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  }, [profileData]);

  const handleLogout = () => {
    deleteCookie("accessToken");
    router.push("/login");
    window.location.replace("/login");
  };

  return (
    <>
      {pathname !== "/dashboard" && <ActiveOffer />}
      <header className="sticky top-0 w-full z-50 bg-[#191919]">
        <div className="flex justify-between items-center bg-[#191919] px-4 lg:px-16 h-20">
          {/* Logo */}
          <div className="flex items-center gap-4 w-full">
            <div>
              <Link
                href="/"
                className="flex items-center space-x-2 cursor-pointer"
              >
                <Image
                  src="/logo-white.png"
                  alt="Logo"
                  width={200}
                  height={30}
                  className="w-auto max-h-16"
                />
              </Link>
            </div>
            {!pathname.startsWith("/dashboard") && (
              <div className="w-[50%]">
                <Search />
              </div>
            )}
          </div>

          {/* Desktop Menu */}
          <ul className="hidden 2xl:flex items-center space-x-1 2xl:space-x-4">
            {!pathname.startsWith("/dashboard") &&
              navItems.map(({ href, title }) => {
                const active = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`px-3 py-2 rounded transition-colors duration-200 text-nowrap ${
                        active
                          ? "bg-white text-black"
                          : "text-white hover:text-gray-300"
                      }`}
                    >
                      {title}
                    </Link>
                  </li>
                );
              })}

            {/* Profile / Login */}
            {loading ? (
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
              </div>
            ) : (
              <div>
                {profileData ? (
                  <div>
                    <UserDropdownMenu profileData={profileData!} />
                  </div>
                ) : (
                  <Link href="/login">
                    <button className="px-3 py-2 rounded bg-orange-600 text-white font-bold transition-colors hover:bg-orange-700 cursor-pointer">
                      Login
                    </button>
                  </Link>
                )}
              </div>
            )}
          </ul>
          {/* <UserDropdownMenu profileData={profileData!} /> */}

          {/* Mobile Menu Button */}
          <div className="2xl:hidden">
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="2xl:hidden absolute top-20 right-0 w-[220px] bg-zinc-900 shadow-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(({ href, title }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 font-semibold text-white hover:text-red-500 transition-colors"
                >
                  {title}
                </Link>
              ))}

              {/* Profile / Login in mobile */}
              {loading && (
                <span className="block px-3 py-2 text-gray-400">
                  Loading...
                </span>
              )}
              {!loading && profileData && (
                <div>
                  {["Admin", "Super Admin"].includes(profileData?.role) && (
                    <Link
                      href={"/dashboard"}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-2 font-semibold text-white hover:text-red-500 transition-colors"
                    >
                      Dashboard
                    </Link>
                  )}
                  <Link
                    href={"/profile"}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 font-semibold text-white hover:text-red-500 transition-colors"
                  >
                    Profile
                  </Link>
                  <Link
                    href={"/change-password"}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 font-semibold text-white hover:text-red-500 transition-colors"
                  >
                    Change Password
                  </Link>
                  <Link
                    href={""}
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleLogout();
                    }}
                    className="block px-3 py-2 font-semibold text-red-500 hover:text-red-500 transition-colors"
                  >
                    Logout
                  </Link>
                </div>
              )}
              {!loading && !profileData && (
                <Link href="/login">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-left px-3 py-2 font-semibold text-white hover:text-red-500 transition-colors"
                  >
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
