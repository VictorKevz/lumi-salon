"use client";
import React, { useEffect, useState } from "react";
import { Header } from "../sections/header/Header";
import { Hero } from "../sections/Hero/Hero";

type Messages = Record<string, string>;

export default function HomeClient({ messages }: { messages: Messages }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <Header isClient={isClient} messages={messages} />
      <Hero isClient={isClient} messages={messages} />
    </div>
  );
}
