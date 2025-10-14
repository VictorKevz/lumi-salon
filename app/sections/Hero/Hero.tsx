"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { CTALink } from "@/app/components/CTALink";
import { formatPhoneNumber } from "@/lib/format";
import {
  ArrowDownward,
  Call,
  KeyboardArrowDown,
  Message,
} from "@mui/icons-material";
import { AnimationWrapper } from "@/app/components/AnimationWrapper";
import { SectionProps } from "@/lib/header";

export const Hero = ({ isClient, messages }: SectionProps) => {
  if (!isClient) {
    return (
      <section
        id="home"
        aria-label="hero section"
        className="center flex-col! items-start! w-full min-h-[calc(100dvh-4.5rem)] lg:min-h-[calc(100dvh-7.2rem)] relative py-10 px-4 lg:px-8 z-5"
      >
        <div className="center max-w-screen-md w-full h-full flex-col! px-4 py-8 backdrop-blur-[0.08rem] bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-lg">
          <header className="w-full">
            <h1 className="text-3xl lg:text-6xl text-[var(--text-primary)] max-w-2xl">
              {messages["hero.title"]}
            </h1>
            <p className="max-w-xl !text-[var(--text-primary)]">
              {messages["hero.subtitle"]}
            </p>
          </header>
          <div className="w-full max-w-md flex flex-col sm:flex-row gap-4 mt-6">
            <CTALink
              href={`tel:${formatPhoneNumber(messages["phone"])}`}
              variant="fill"
              Icon={Call}
            >
              {messages["header.cta.call"]}
            </CTALink>
            <CTALink href="#contact" variant="outline" Icon={Message}>
              {messages["contact.title"]}
            </CTALink>
          </div>
        </div>
        <Link
          href={"#services"}
          className="center w-12 h-12 absolute bottom-4 rounded-full backdrop-blur-2xl border-2 border-[var(--border-dark)] text-[var(--neutral-6)]"
        >
          <span className="sr-only">{messages["cta.services"]}</span>
          <span aria-hidden="true">
            <ArrowDownward fontSize="large" />
          </span>
        </Link>
        <picture className="absolute top-0 left-0 w-full h-full inset-0 -z-2 pointer-events-none">
          <source
            media="(min-width:1024px )"
            srcSet="/images/hero-desktop.webp"
          />
          <img
            src="/images/hero-mobile.webp"
            alt="Salon interior showing modern styling stations and elegant decor"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="gradient-overlay backdrop-blur-[3px] lg:backdrop-blur-none backdrop-saturate-150 backdrop-brightness-50 -z-1"></div>
      </section>
    );
  }
  return (
    <section
      id="home"
      aria-label="hero section"
      className="center flex-col! w-full min-h-[calc(100dvh-4.5rem)] lg:min-h-[calc(100dvh-7.2rem)] relative py-10 px-4 lg:px-8 z-5"
    >
      <AnimationWrapper
        offset={5}
        className="center max-w-screen-md w-full h-full flex-col! px-4 py-8 backdrop-blur-[0.08rem] bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-lg"
      >
        <header className="center flex-col! w-full text-center">
          <AnimationWrapper
            as={motion.h1}
            delay={0.1}
            offset={10}
            className="text-3xl lg:text-6xl text-[var(--text-primary)] max-w-2xl"
          >
            {messages["hero.title"]}
          </AnimationWrapper>
          <AnimationWrapper
            as={motion.p}
            offset={10}
            delay={0.2}
            className="max-w-xl !text-[var(--text-primary)]"
          >
            {messages["hero.subtitle"]}
          </AnimationWrapper>
        </header>
        <AnimationWrapper
          offset={10}
          delay={0.3}
          className="w-full max-w-md flex flex-col sm:flex-row gap-4 mt-6"
        >
          <CTALink
            href={`tel:${formatPhoneNumber(messages["phone"])}`}
            variant="fill"
            Icon={Call}
          >
            {messages["header.cta.call"]}
          </CTALink>
          <CTALink href="#contact" variant="outline" Icon={Message}>
            {messages["contact.title"]}
          </CTALink>
        </AnimationWrapper>
      </AnimationWrapper>
      <Link
        href={"#services"}
        className="center min-w-13 min-h-13 md:w-16 md:h-16 absolute bottom-2.5 sm:bottom-8 xl:bottom-4 rounded-full bg-[var(--primary-6)] hover:bg-[var(--neutral-6)] text-[var(--neutral-3)]"
      >
        <span className="sr-only">{messages["cta.services"]}</span>
        <motion.span
          aria-hidden="true"
          animate={{
            y: [0, 9, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <KeyboardArrowDown className="text-3xl! lg:text-5xl!" />
        </motion.span>
      </Link>
      <picture className="absolute top-0 left-0 w-full h-full inset-0 -z-2 pointer-events-none">
        <source
          media="(min-width:1024px )"
          srcSet="/images/hero-desktop.webp"
        />
        <img
          src="/images/hero-mobile.webp"
          alt="Salon interior showing modern styling stations and elegant decor"
          className="w-full h-full object-cover"
        />
      </picture>
      <div className="overlay backdrop-saturate-120 backdrop-brightness-90 -z-1"></div>
    </section>
  );
};
