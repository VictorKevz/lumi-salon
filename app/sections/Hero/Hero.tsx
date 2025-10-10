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
      <section id="home">
        <header>
          <h1>{messages["hero.title"]}</h1>
          <p>{messages["hero.subtitle"]}</p>
        </header>
      </section>
    );
  }
  return (
    <section
      id="home"
      className="center flex-col! w-full min-h-[calc(100dvh-4.5rem)] lg:min-h-[calc(100dvh-7.2rem)] relative py-10 px-4"
    >
      <header className="w-full center flex-col!">
        <motion.h1
          className="text-4xl"
          variants={FadeInVariants(-10, 0)}
          initial="hidden"
          animate="visible"
        >
          {messages["hero.title"]}
        </motion.h1>
        <motion.p
          variants={FadeInVariants(10, 0.2)}
          initial="hidden"
          animate="visible"
        >
          {messages["hero.subtitle"]}
        </motion.p>
      </header>
      <div className="w-full max-w-md center gap-4 mt-6">
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
    </section>
  );
};
