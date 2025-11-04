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
import { useRouter } from "next/navigation";

type UserRole = "Admin" | "Super Admin" | "User" | string;

interface ProfileData {
  firstName?: string;
  image?: string;
  role?: UserRole;
}

interface Props {
  profileData?: ProfileData;
}

export function UserDropdownMenu({ profileData }: Props) {
  const router = useRouter();

  const handleLogout = () => {
    deleteCookie("accessToken");
    router.push("/login");
    window.location.replace("/login");
  };

  const handleDashboard = () => {
    router.push("/dashboard");
  };

  if (!profileData) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild aria-label="User menu">
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
          <UserImage item={profileData.image || ""} />
          <Button className="text-white font-bold">
            {profileData.firstName || "User"}
          </Button>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-44 bg-white shadow-lg rounded-md cursor-pointer"
      >
        <DropdownMenuLabel className="text-sm font-semibold text-gray-700">
          My Account
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {["Admin", "Super Admin"].includes(profileData.role || "") && (
          <DropdownMenuItem
            onClick={handleDashboard}
            className="text-sm cursor-pointer hover:bg-gray-100 flex items-center"
          >
            <LayoutDashboard className="h-4 w-4 mr-2 text-gray-600" />
            Dashboard
          </DropdownMenuItem>
        )}

        <Link href="/profile">
          <DropdownMenuItem className="text-sm cursor-pointer hover:bg-gray-100 flex items-center">
            <User className="h-4 w-4 mr-2 text-gray-600" />
            Profile
          </DropdownMenuItem>
        </Link>

        <DropdownMenuItem
          onClick={handleLogout}
          className="text-sm cursor-pointer hover:bg-gray-100 flex items-center"
        >
          <LogOut className="h-4 w-4 mr-2 text-gray-600" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
