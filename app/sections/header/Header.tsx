"use client";
import { Menu } from "@mui/icons-material";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import {
  getContacts,
  getNavLinks,
  socials,
  Messages,
  iconMap,
} from "@/lib/header";
import { MobileMenu } from "./MobileMenu";
import { SocialsList } from "@/app/components/SocialsList";
import { LanguageSwitcher } from "@/app/components/LanguageSwitcher";
import { Logo } from "@/app/components/Logo";
import { motion, AnimatePresence } from "framer-motion";
import { SlideInVariants } from "@/app/variants";

type HeaderProps = { isClient: boolean; messages: Messages };

export const Header = ({ isClient, messages }: HeaderProps) => {
  const contacts = getContacts(messages);
  const navLinks = getNavLinks(messages);

  if (!isClient) {
    return (
      <header role="banner">
        <nav aria-label="Main navigation">
          <div>
            <h1 className="sr-only">
              {messages["nav.brand"]} - Main Navigation
            </h1>
          </div>
          <ul>
            {navLinks.map((l) => (
              <li key={l.id}>
                <Link href={l.href} aria-label={l.label}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={`tel:${(messages["header.banner.phone"] || "").replace(
                  /\s/g,
                  ""
                )}`}
                aria-label={messages["header.cta.call"]}
              >
                {messages["header.cta.call"]}
              </Link>
            </li>
            <li>
              <LanguageSwitcher messages={messages} />
            </li>
          </ul>
        </nav>
        <div>
          <ul aria-label="Contact information">
            {contacts.map((c) => (
              <li key={c.type}>
                {c.href ? (
                  <Link href={c.href} aria-label={c.label}>
                    {c.label}
                  </Link>
                ) : (
                  <span>{c.label}</span>
                )}
              </li>
            ))}
          </ul>
          <ul aria-label="Social media links">
            <li>{messages["header.banner.follow"]}</li>
            {socials.map((s) => (
              <li key={s.id}>
                <Link href={s.href} aria-label={s.label}>
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    );
  }

  return (
    <header className="w-full sticky top-0 z-50">
      <Banner isClient={isClient} messages={messages} />
      <Navbar isClient={isClient} messages={messages} />
    </header>
  );
};

export const Banner = ({ messages }: HeaderProps) => {
  const contacts = getContacts(messages);

  return (
    <div
      className="between hidden! lg:flex! w-full h-[2.7rem] bg-[var(--neutral-6)] text-[var(--neutral-0)] px-4 lg:px-8"
      aria-label="Salon contact information and social media banner"
      role="banner"
    >
      <ul
        className="center  divide-x divide-[var(--border-light)] "
        aria-label="Contact information list"
        role="list"
      >
        {contacts.map((c) => {
          const Icon = iconMap[c.type];
          return (
            <li key={c.type} className="text-sm not-first:px-4 first:pr-4 ">
              {c.href ? (
                <Link
                  href={c.href}
                  aria-label={c.label}
                  className="flex items-center gap-2 hover:text-[var(--primary-3)]"
                >
                  {Icon ? (
                    <Icon
                      fontSize="small"
                      aria-hidden="true"
                      className="text-[var(--primary-5)]"
                    />
                  ) : null}
                  <span>{c.label}</span>
                </Link>
              ) : (
                <span className="center gap-2">
                  {Icon ? (
                    <Icon
                      fontSize="small"
                      aria-hidden="true"
                      className="text-[var(--primary-5)]"
                    />
                  ) : null}
                  <span>{c.label}</span>
                </span>
              )}
            </li>
          );
        })}
      </ul>
      <SocialsList />
    </div>
  );
};

export const Navbar = ({ messages }: HeaderProps) => {
  const navLinks = getNavLinks(messages);
  const [isOpen, setOpen] = useState<boolean>(false);
  const toggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <nav
      className="between relative w-full h-[4.5rem] bg-[var(--neutral-2)] px-4 lg:px-8 z-50"
      aria-label="Main navigation"
    >
      <div className="center gap-1">
        <button
          type="button"
          className="center lg:hidden!"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          <Menu />
        </button>
        <Logo />
      </div>
      <ul className="center hidden! lg:flex! items-center ml-10" role="list">
        {navLinks.map((l) => (
          <li key={l.id}>
            <Link
              href={l.href}
              className="nav-link center min-w-max relative px-4 z-5 hover:h-10 hover:text-[var(--primary-5)] "
              aria-label={l.label}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="center gap-2">
        <Link
          href={`tel:${messages["phone"] || ""}`}
          className="center h-10 sm:min-w-[8rem] px-2 w-full bg-[var(--neutral-6)] text-[var(--primary-3)] font-bold rounded-lg"
          aria-label={messages["header.cta.call"]}
        >
          {messages["header.cta.call"]}
        </Link>
        <LanguageSwitcher messages={messages} />
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            <MobileMenu toggleMenu={toggleMenu} navLinks={navLinks} />
            <motion.div
              className="absolute top-0 left-0 w-full min-h-dvh bg-[var(--overlay)] backdrop-blur-[2px] backdrop-saturate-150 z-10"
              aria-hidden="true"
              variants={SlideInVariants("-100%")}
              initial="hidden"
              animate="visible"
            ></motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
