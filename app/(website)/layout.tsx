import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../globals.css"; // Your global styles

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Clapbac Website",
  description: "website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="mt-16">{children}</main>;
}
