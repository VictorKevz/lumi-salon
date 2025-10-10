"use client";
import React, { useEffect, useState } from "react";
import { Header } from "../sections/header/Header";
import { Hero } from "../sections/Hero/Hero";

type Messages = Record<string, string>;

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
      </main>
    </>
  );
}
