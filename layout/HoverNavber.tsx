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
import { LogOut, LayoutDashboard, User } from "lucide-react";
import Link from "next/link";
import { deleteCookie } from "cookies-next/client";
import UserImage from "@/components/share/customImageHandle/UserImage";
import { redirect, useRouter } from "next/navigation";

interface ProfileData {
  firstName?: string;
  image?: string;
  role?: "Admin" | "Super Admin" | "User" | string;
}

interface Props {
  profileData?: ProfileData;
}

export function UserDropdownMenu({ profileData }: Props) {
  const router = useRouter();

  const handleLogout = () => {
    deleteCookie("accessToken");
    window.location.replace("/login");
  };

  const handleDashboard = () => {
    redirect("/dashboard");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild aria-label="User menu">
        <div className="flex items-center gap-2 cursor-pointer">
          <UserImage item={profileData?.image} />
          <Button className="text-white font-bold">
            {profileData?.firstName || "User"}
          </Button>
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

        {["Admin", "Super Admin"].includes(profileData?.role || "") && (
          <DropdownMenuItem
            className="cursor-pointer hover:bg-gray-100 flex items-center space-x-2"
            onClick={handleDashboard}
          >
            <LayoutDashboard className="h-4 w-4 mr-2 text-gray-600" />
            <span>Dashboard</span>
          </DropdownMenuItem>
        )}

        <Link href="/profile">
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
