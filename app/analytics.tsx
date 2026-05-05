"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config: Record<string, unknown>,
    ) => void;
  }
}

export function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("config", "G-ZQX0HF58NB", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
