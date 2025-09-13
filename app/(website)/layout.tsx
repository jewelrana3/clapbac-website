import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../globals.css"; // Your global styles
import { Header } from "@/layout/Header";

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
  return (
    <html lang="en">
      <body className={`${lato.className}  antialiased`}>
        <div>
          <Header />
        </div>
        <div className="mt-16">{children}</div>
        {/* <div>
          <Footer />
        </div> */}
      </body>
    </html>
  );
}
