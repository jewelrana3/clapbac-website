"use client";
import { usePathname } from "next/navigation";
import React from "react";

import DashboardHeader from "./DashboardHeader";
import WebsiteHeader from "./WebsiteHeader";

export default function Header() {
  const pathname = usePathname();

  const isDashboardRoute = pathname.startsWith("/dashboard");

  return (
    <div>{isDashboardRoute ? <DashboardHeader /> : <WebsiteHeader />}</div>
  );
}
