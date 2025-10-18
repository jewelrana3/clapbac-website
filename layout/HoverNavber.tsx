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

import { LogOut, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { deleteCookie } from "cookies-next/client";
import { useRouter } from "next/navigation";

export function UserDropdownMenu() {
  const router = useRouter();
  const handleLogout = () => {
    deleteCookie("OWNER_TOKEN");
    router.push("/login");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-white font-bold cursor-pointer">
          Juyel
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-40 bg-white shadow-lg rounded-md"
      >
        <DropdownMenuLabel className="text-sm font-semibold text-gray-700">
          My Account
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <Link href="/dashboard">
          <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 flex items-center space-x-2">
            <LayoutDashboard className="h-4 w-4 mr-2 text-gray-600" />
            <span>Dashboard</span>
          </DropdownMenuItem>
        </Link>
        <Link href="/dashboard/profile">
          <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 flex items-center space-x-2">
            <LayoutDashboard className="h-4 w-4 mr-2 text-gray-600" />
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
