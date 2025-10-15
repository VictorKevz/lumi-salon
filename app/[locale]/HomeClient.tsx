"use client";
import React, { useEffect, useState } from "react";
import { Header } from "../sections/header/Header";
import { Hero } from "../sections/Hero/Hero";
import { Messages } from "@/lib/header";
import { Services } from "../sections/services/Services";
import { Pricing } from "../sections/pricing/Pricing";

export default function HomeClient({ messages }: { messages: Messages }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    document.body.classList.remove("preload");
    document.body.classList.add("loaded");
  }, []);

  return (
    <>
      <Header isClient={isClient} messages={messages} />
      <main className="w-full">
        <Hero isClient={isClient} messages={messages} />
        <Services isClient={isClient} messages={messages} />
        <Pricing isClient={isClient} messages={messages} />
      </main>
    </>
  );
}
