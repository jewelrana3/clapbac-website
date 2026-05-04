"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LogOut,
  LayoutDashboard,
  User,
  KeyRound,
  MessageCircleMore,
} from "lucide-react";
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

  if (!profileData) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild aria-label="User menu">
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 size-20">
          <UserImage item={profileData.image || ""} />
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
          <Link href="/dashboard">
            <DropdownMenuItem className="text-sm cursor-pointer hover:bg-gray-100 flex items-center">
              <LayoutDashboard className="h-4 w-4 mr-2 text-gray-600" />
              Dashboard
            </DropdownMenuItem>
          </Link>
        )}

        {profileData.role === "Owner" && (
          <Link href="/my-reviews">
            <DropdownMenuItem className="text-sm cursor-pointer hover:bg-gray-100 flex items-center">
              <MessageCircleMore className="h-4 w-4 mr-2 text-gray-600" />
              My Reviews
            </DropdownMenuItem>
          </Link>
        )}

        <Link href="/profile">
          <DropdownMenuItem className="text-sm cursor-pointer hover:bg-gray-100 flex items-center">
            <User className="h-4 w-4 mr-2 text-gray-600" />
            Profile
          </DropdownMenuItem>
        </Link>

        {["User", "Owner"].includes(profileData.role || "") && (
          <Link href="/change-password">
            <DropdownMenuItem className="text-sm cursor-pointer hover:bg-gray-100 flex items-center">
              <KeyRound className="h-4 w-4 mr-2 text-gray-600" />
              Change Password
            </DropdownMenuItem>
          </Link>
        )}

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
