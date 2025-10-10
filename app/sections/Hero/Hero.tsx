"use client";
import { FadeInVariants } from "@/app/variants";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { CTALink } from "@/app/components/CTALink";
import { formatPhoneNumber } from "@/lib/format";

type Messages = Record<string, string>;

export const Hero = ({
  isClient,
  messages,
}: {
  isClient: boolean;
  messages: Messages;
}) => {
  if (!isClient) {
    return (
      <section id="home" className="relative w-full min-h-screen">
        <header>
          <h1>{messages["hero.title"]}</h1>
          <p>{messages["hero.subtitle"]}</p>
        </header>
        <picture className="absolute top-0 left-0 w-full h-full object-cover object-center inset-0 -z-2 pointer-events-none">
          <source
            media="(min-width:1024px )"
            srcSet="/images/hero-desktop.png"
          />
          <img src="/images/hero-mobile.png" alt="" className="w-full h-auto" />
        </picture>
        <div className="gradient-overlay backdrop-saturate-120 backdrop-brightness-70 -z-1"></div>
      </section>
    );
  }
  return (
    <section
      id="home"
      className="center flex-col! items-start! w-full min-h-[calc(100dvh-4.5rem)] lg:min-h-[calc(100dvh-7.2rem)] relative py-10 px-4 lg:px-8 z-5"
    >
      <header className="w-full">
        <motion.h1
          className="text-3xl lg:text-6xl text-[var(--text-primary)] max-w-xl"
          variants={FadeInVariants(-10, 0)}
          initial="hidden"
          animate="visible"
        >
          {messages["hero.title"]}
        </motion.h1>
        <motion.p
          className="max-w-xl text-[var(--text-scondary)]"
          variants={FadeInVariants(10, 0.2)}
          initial="hidden"
          animate="visible"
        >
          {messages["hero.subtitle"]}
        </motion.p>
      </header>
      <div className="w-full max-w-md flex flex-col sm:flex-row gap-4 mt-6">
        <CTALink
          href={`tel:${formatPhoneNumber(messages["phone"])}`}
          variant="fill"
        >
          {messages["header.cta.call"]}
        </CTALink>
        <CTALink href="#contact" variant="outline">
          {messages["contact.title"]}
        </CTALink>
      </div>
      <picture className="absolute top-0 left-0 w-full h-full inset-0 -z-2 pointer-events-none">
        <source media="(min-width:1024px )" srcSet="/images/hero-desktop.png" />
        <img
          src="/images/hero-mobile.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </picture>
      <div className="gradient-overlay backdrop-saturate-120 backdrop-brightness-70 -z-1"></div>
    </section>
  );
};
