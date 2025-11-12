import { AnimationWrapper } from "@/app/components/AnimationWrapper";
import { CTALink } from "@/app/components/CTALink";
import { Logo } from "@/app/components/Logo";
import { SocialsList } from "@/app/components/SocialsList";
import { getContacts, getNavLinks, iconMap, SectionProps } from "@/lib/header";
import { Message } from "@mui/icons-material";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export const Footer = ({ messages }: SectionProps) => {
  return (
    <footer className="center flex-col! w-full bg-[var(--netral-0)] z-10">
      <header className="center w-full min-h-40 bg-[var(--neutral-6)] px-4 py-6 2xl:px-8">
        <div className="between max-w-screen-xl w-full flex-col! items-start! md:flex-row! md:items-center! gap-6">
          <AnimationWrapper
            as={motion.h2}
            animate={true}
            xOffset={-20}
            className="text-[var(--primary-5)]"
          >
            {messages["footer.cta.title"]} <br />
            {messages["footer.cta.subtitle"]}
          </AnimationWrapper>
          <AnimationWrapper
            animate={true}
            xOffset={20}
            delay={0.1}
            className="max-w-xs w-full"
          >
            <CTALink
              href={"#contact"}
              variant="fill"
              Icon={Message}
              className="bg-[var(--primary-5)] text-[var(--neutral-5)]! border-2 border-transparent hover:border-[var(--primary-5)] hover:text-[var(--primary-5)]!"
            >
              {messages["contact.title"]}
            </CTALink>
          </AnimationWrapper>
        </div>
      </header>

      <div className="between w-full mt-10 flex-col! lg:flex-row! items-start! px-4 2xl:px-8">
        <AnimationWrapper
          animate={true}
          offset={30}
          className="flex flex-col items-start"
        >
          <Logo />
          <p className="text-lg! max-w-xs text-[var(--neutral-6)]!">
            {messages["hero.subtitle"]}
          </p>
        </AnimationWrapper>
        <ul
          className="flex flex-col items-start mt-8 lg:mt-0"
          aria-label="Contact information list"
          role="list"
        >
          <li>
            <h3 className="text-base font-semibold uppercase mb-2">
              {messages["footer.contact.title"]}
            </h3>
          </li>
          {getContacts(messages).map((c, i) => {
            const Icon = iconMap[c.type];
            return (
              <AnimationWrapper
                key={c.type}
                className="text-sm not-last:pb-2"
                as={motion.li}
                animate={true}
                offset={20}
                delay={0.03 * i}
              >
                {c.href ? (
                  <Link
                    href={c.href}
                    aria-label={c.label}
                    className="flex items-center gap-2 hover:text-[var(--primary-6)]"
                  >
                    {Icon ? (
                      <span className="center h-8 w-8 bg-[var(--neutral-5)] rounded-full">
                        <Icon
                          fontSize="small"
                          aria-hidden="true"
                          className="text-[var(--text-on-primary)]"
                        />
                      </span>
                    ) : null}
                    <span>{c.label}</span>
                  </Link>
                ) : (
                  <span className="center gap-2">
                    {Icon ? (
                      <span className="center h-8 w-8 bg-[var(--neutral-6)] rounded-full">
                        <Icon
                          fontSize="small"
                          aria-hidden="true"
                          className="text-[var(--text-on-primary)]"
                        />
                      </span>
                    ) : null}
                    <span>{c.label}</span>
                  </span>
                )}
              </AnimationWrapper>
            );
          })}
        </ul>
        <ul className="flex flex-col items-start mt-8 lg:mt-0">
          <li>
            <h3 className="text-base font-semibold uppercase mb-2">
              {messages["footer.quicklinks.title"]}
            </h3>
          </li>
          {getNavLinks(messages).map((link, i) => (
            <AnimationWrapper
              key={link.id}
              className="not-last:pb-1"
              as={motion.li}
              animate={true}
              offset={20}
              delay={0.03 * i}
            >
              <Link
                href={link.href}
                className="hover:text-[var(--primary-6)] hover:translate-y-1 hover:scale-105"
                aria-label={link.label}
              >
                {link.label}
              </Link>
            </AnimationWrapper>
          ))}
        </ul>
      </div>
      <AnimationWrapper
        animate={true}
        offset={-30}
        delay={0.2}
        className="between flex-col! items-start! gap-2 md:flex-row! md:items-center w-full border-t-1 border-[var(--neutral-3)] mt-6 px-4 py-6 2xl:px-8"
      >
        <SocialsList />
        <p className="text-lg!">©️Lumi. 2025</p>
        <p className="text-sm!">
          {messages["footer.dev.by"]}{" "}
          <Link
            href={"https://www.victorkevz.com"}
            target="_blank"
            rel="noopener"
            className="text-[var(--primary-5)] font-semibold"
          >
            Victor Kevz
          </Link>
        </p>
      </AnimationWrapper>
    </footer>
  );
};
