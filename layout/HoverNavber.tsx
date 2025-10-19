"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import share from "../public/share-icon/share.webp";

import { LogOut, LayoutDashboard, User } from "lucide-react";
import Link from "next/link";
import { deleteCookie } from "cookies-next/client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function UserDropdownMenu({ profileData }: any) {
  const handleLogout = () => {
    deleteCookie("accessToken");
    window.location.replace("/login");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer">
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
          <Button className="text-white font-bold">Juyel</Button>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-40 bg-white shadow-lg rounded-md"
      >
        <DropdownMenuLabel className="text-sm font-semibold text-gray-700">
          My Account
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {profileData?.role === "Admin" ||
          (profileData?.role === "Super Admin" && (
            <Link href="/dashboard">
              <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 flex items-center space-x-2">
                <LayoutDashboard className="h-4 w-4 mr-2 text-gray-600" />
                <span>Dashboard</span>
              </DropdownMenuItem>
            </Link>
          ))}

        <Link href="/dashboard/profile">
          <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 flex items-center space-x-2">
            <User className="h-4 w-4 text-gray-600" />
            <span>Profile</span>
          </DropdownMenuItem>
        </Link>

        <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer hover:bg-gray-100 flex items-center space-x-2"
        >
          <LogOut className="h-4 w-4 mr-2 text-gray-600" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
