"use client";
import { Call, Menu } from "@mui/icons-material";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { getContacts, getNavLinks, iconMap, SectionProps } from "@/lib/header";
import { MobileMenu } from "./MobileMenu";
import { SocialsList } from "@/app/components/SocialsList";
import { LanguageSwitcher } from "@/app/components/LanguageSwitcher";
import { Logo } from "@/app/components/Logo";
import { motion, AnimatePresence } from "framer-motion";
import { SlideInVariants } from "@/app/variants";

export const Header = ({ messages }: SectionProps) => {
  return (
    <header className="w-full fixed top-0 z-50">
      <Banner messages={messages} />
      <Navbar messages={messages} />
    </header>
  );
};

export const Banner = ({ messages }: SectionProps) => {
  const contacts = getContacts(messages);

  return (
    <div
      className="between hidden! lg:flex! w-full h-[2.7rem] bg-[var(--neutral-6)] text-[var(--neutral-0)] px-4 2xl:px-8"
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

export const Navbar = ({ messages }: SectionProps) => {
  const navLinks = getNavLinks(messages);
  const [isOpen, setOpen] = useState<boolean>(false);
  const toggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <nav
      className="between relative w-full h-[4.5rem] bg-[var(--primary-2)] px-4 2xl:px-8 z-50 shadow-2xl shadow-black/20"
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
          className="center gap-2 h-10 sm:min-w-[8rem] px-2 w-full bg-[var(--neutral-6)] text-[var(--primary-3)] font-bold rounded-lg"
          aria-label={messages["header.cta.call"]}
        >
          <Call fontSize="small" /> {messages["header.cta.call"]}
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
