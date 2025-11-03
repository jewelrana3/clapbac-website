import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css"; // Your global styles

import Footer from "@/layout/Footer";
import { Toaster } from "react-hot-toast";
import Header from "@/layout/Header";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Clapbac Website",
  description: "This is the main layout for the website section",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-hide">
      <body className={`${lato.className}  antialiased `}>
        <div>
          <Header />
        </div>
        <main className="mt-16">{children}</main>
        <div>
          <Footer />
        </div>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
