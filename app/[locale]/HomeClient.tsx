"use client";
import React, { useEffect, useState, lazy, Suspense } from "react";
import { Header } from "../sections/header/Header";
import { Hero } from "../sections/Hero/Hero";
import { Messages } from "@/lib/header";
import dynamic from "next/dynamic";

const Services = dynamic(
  () =>
    import("../sections/services/Services").then((mod) => ({
      default: mod.Services,
    })),
  {
    ssr: true, // Enable SSR for SEO benefits
    loading: () => (
      <div
        aria-live="polite"
        className="min-h-[30vh] flex items-center justify-center"
      >
        <span className="sr-only">Loading services section</span>
        <div className="animate-pulse bg-gray-200 rounded-md w-full max-w-3xl h-24"></div>
      </div>
    ),
  }
);

const Pricing = dynamic(
  () =>
    import("../sections/pricing/Pricing").then((mod) => ({
      default: mod.Pricing,
    })),
  {
    ssr: true, // Enable SSR for SEO benefits
    loading: () => (
      <div
        aria-live="polite"
        className="min-h-[30vh] flex items-center justify-center"
      >
        <span className="sr-only">Loading pricing section</span>
        <div className="animate-pulse bg-gray-200 rounded-md w-full max-w-3xl h-24"></div>
      </div>
    ),
  }
);

export default function HomeClient({ messages }: { messages: Messages }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const timer = setTimeout(() => {
      document.body.classList.remove("preload");
      document.body.classList.add("loaded");
    }, 100);

    const enhancePerformance = () => {
      // Add Intersection Observer for lazy loading below-the-fold elements
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "100px" }
      );

      // Target elements that should be lazy loaded
      document.querySelectorAll(".lazy-load-section").forEach((el) => {
        observer.observe(el);
      });
    };

    enhancePerformance();

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header isClient={isClient} messages={messages} />
      <main className="w-full">
        <Hero isClient={isClient} messages={messages} />

        <div className="lazy-load-section">
          <Suspense
            fallback={
              <div className="min-h-[30vh] flex items-center justify-center">
                <div className="animate-pulse bg-gray-900 rounded-md w-full max-w-3xl h-24"></div>
              </div>
            }
          >
            <Services isClient={isClient} messages={messages} />
            <Pricing isClient={isClient} messages={messages} />
          </Suspense>
        </div>
      </main>
    </>
  );
}
