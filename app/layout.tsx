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

//* SEO Metadata for the entire site *//
export const metadata: Metadata = {
  title: "Clapbac | Rate the Raters",
  description:
    "Business owners: stop being silent victims of unfair reviews. Clapbac lets you rate the reviewers, expose the trolls, and honor your best patrons. Reclaim your reputation and fight back against shady critics.",
  keywords: [
    "rate the raters",
    "business owner tools",
    "reputation management",
    "review rebuttal",
    "expose fake reviews",
    "customer feedback",
    "small business defense",
  ],
  authors: [{ name: "Clapbac Team" }],
  openGraph: {
    title: "Clapbac | The Business Owner's Revenge",
    description:
      "Tired of trolls? It's time to rate the raters. Flip the script on unfair reviews.",
    url: "https://clapbac.com",
    siteName: "Clapbac",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clapbac - Rate the Raters",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clapbac | Rate the Raters",
    description:
      "No more silent frustration. Expose the haters and honor the great patrons.",
    images: ["/og-image.jpg"],
    creator: "@clapbac", // Replace with your handle
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-hide">
      <body className={`${lato.className}  antialiased `}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
