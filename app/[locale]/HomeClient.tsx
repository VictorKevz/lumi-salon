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
      const isHome = href === "#" || href === "#home";
      const navbarHeight = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = isHome
        ? elementPosition + window.pageYOffset
        : elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
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

        <LazySuspenseSection Component={Services} messages={messages} />
        <LazySuspenseSection Component={Pricing} messages={messages} />
        <LazySuspenseSection Component={Contact} messages={messages} />
        <LazySuspenseSection Component={About} messages={messages} />
        <LazySuspenseSection Component={Footer} messages={messages} />
      </main>
    </>
  );
}
function LazySuspenseSection({
  Component,
  messages,
}: {
  Component: React.ComponentType<{ messages: Messages }>;
  messages: Messages;
}) {
  return (
    <LazySection>
      <Suspense fallback={<SectionLoading />}>
        <Component messages={messages} />
      </Suspense>
    </LazySection>
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
