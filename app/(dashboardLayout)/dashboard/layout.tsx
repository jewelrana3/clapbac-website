import Sidebar from "@/dashboardSidebar/Sidebar";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Clapbac Dashboard",
  description: "This is the main layout for the website section",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`flex ${lato.variable} font-sans`}>
      <Sidebar />
      <div className="mt-16 flex-1 px-9 pb-20">{children}</div>
    </main>
  );
}
