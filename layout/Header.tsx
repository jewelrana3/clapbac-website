"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const mobileMenuItems = [
  { title: "Rate a Reviewer", href: "/rate-reviewer" },
  { title: "Business Categories", href: "/bussiness-categories" },
  { title: "Reviewers", href: "/reviewers" },
  { title: "FAQ", href: "/faq" },
  { title: "About", href: "/about-us" },
  { title: "Contact", href: "/contact-us" },
  { title: "Login", href: "/login", highlight: true },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <header className="fixed w-full top-0 z-50 bg-[#191919] h-16">
      <div className="flex justify-between items-center h-16 bg-[#191919] px-7 ">
        {/* logo */}
        <div className="">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="Logo" width={200} height={30} />
          </Link>
        </div>
        {/* navigation */}
        <div>
          <ul className="hidden lg:flex space-x-4">
            {mobileMenuItems.map(({ href, title, highlight }) => {
              const isActive = pathname === href;

              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`px-3 py-2 rounded transition-colors duration-200 
                ${highlight && "bg-[#F05223]"}
                ${isActive ? "bg-white text-black" : "text-white "} 
                `}
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
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
      )}
    </header>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
