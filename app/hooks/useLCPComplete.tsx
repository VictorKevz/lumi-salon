"use client";

import { useEffect, useState } from "react";

export function useLCPComplete() {
  const [lcpComplete, setLcpComplete] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("PerformanceObserver" in window) {
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];

        if (lastEntry) {
          setTimeout(() => {
            setLcpComplete(true);
          }, 100);

          lcpObserver.disconnect();
        }
      });

      lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });

      const fallbackTimer = setTimeout(() => {
        setLcpComplete(true);
        lcpObserver.disconnect();
      }, 2000);

      return () => {
        lcpObserver.disconnect();
        clearTimeout(fallbackTimer);
      };
    } else {
      const timer = setTimeout(() => {
        setLcpComplete(true);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, []);

  return lcpComplete;
}
