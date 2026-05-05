import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import { AnalyticsTracker } from "./analytics";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Clapbac | Rate the Raters",
  description:
    "Business owners: stop being silent victims of unfair reviews...",
  keywords: [
    "rate the raters",
    "business owner tools",
    "reputation management",
  ],
  authors: [{ name: "Clapbac Team" }],
  openGraph: {
    title: "Clapbac | The Business Owner's Revenge",
    description: "Tired of trolls? It's time to rate the raters.",
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
    creator: "@clapbac",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scrollbar-hide">
      <head>
        {/* Load the Google Analytics script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-ZQX0HF58NB`}
        />

        {/* Initialize gtag */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZQX0HF58NB');
          `}
        </Script>
      </head>
      <body className={`${lato.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster position="bottom-right" />

        {/* Render the client tracker component */}
        <AnalyticsTracker />
      </body>
    </html>
  );
}
