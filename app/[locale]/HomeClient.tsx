"use client";
import React, { useEffect, useState, useRef, lazy, Suspense } from "react";
import { Header } from "../sections/header/Header";
import { Hero } from "../sections/Hero/Hero";
import { Messages } from "@/lib/header";

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
          <Suspense fallback={<SectionLoading />}>
            <About messages={messages} />
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

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className="w-full">
      {isVisible ? children : null}
    </div>
  );
}
