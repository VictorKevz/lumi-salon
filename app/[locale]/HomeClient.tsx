"use client";
import React, { useEffect, useState, useRef, lazy, Suspense } from "react";
import { Header } from "../sections/header/Header";
import { Hero } from "../sections/Hero/Hero";
import { Messages } from "@/lib/header";
import { Contact } from "../sections/contact/Contact";
import { Footer } from "../sections/footer/Footer";

const Services = lazy(() =>
  import("../sections/services/Services").then((mod) => ({
    default: mod.Services,
  }))
);
const Pricing = lazy(() =>
  import("../sections/pricing/Pricing").then((mod) => ({
    default: mod.Pricing,
  }))
);
const About = lazy(() =>
  import("../sections/about/About").then((mod) => ({ default: mod.About }))
);

const SectionLoading = () => (
  <div className="min-h-[30vh] w-full animate-pulse bg-neutral-100 rounded-md" />
);

export default function HomeClient({ messages }: { messages: Messages }) {
  useEffect(() => {
    document.body.classList.remove("preload");
    document.body.classList.add("loaded");
  }, []);

  useEffect(() => {
    function handleAnchorClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest("a[href^='#']");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const header = document.querySelector("header.sticky");
      const offset = header ? (header as HTMLElement).offsetHeight : 0;
      const rect = target.getBoundingClientRect();
      const scrollTop = window.pageYOffset + rect.top - offset - 8; // 8px extra space
      window.scrollTo({ top: scrollTop, behavior: "smooth" });
    }
    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a[href^='#']");
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href.startsWith("#")) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <>
      <Header messages={messages} />
      <main className="w-full overflow-x-hidden">
        <Hero messages={messages} />

        <LazySection>
          <Suspense fallback={<SectionLoading />}>
            <Services messages={messages} />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SectionLoading />}>
            <Pricing messages={messages} />
          </Suspense>
        </LazySection>
        <LazySection>
          <LazySection>
            <Suspense fallback={<SectionLoading />}>
              <Contact messages={messages} />
            </Suspense>
          </LazySection>
          <Suspense fallback={<SectionLoading />}>
            <About messages={messages} />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SectionLoading />}>
            <Footer messages={messages} />
          </Suspense>
        </LazySection>
      </main>
    </>
  );
}

function LazySection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "150px" }
    );

    // Save a reference to the current value of ref.current
    const currentRef = ref.current;

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div ref={ref} className="w-full">
      {isVisible ? children : null}
    </div>
  );
}
