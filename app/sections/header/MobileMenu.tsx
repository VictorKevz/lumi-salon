"use client";
import { Logo } from "@/app/components/Logo";
import { SocialsList } from "@/app/components/SocialsList";
import { NavLink } from "@/lib/header";
import { Close, KeyboardArrowRight } from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { SlideInVariants } from "@/app/variants";

type MobileMenuProps = {
  toggleMenu: () => void;
  navLinks: NavLink[];
};
export const MobileMenu = ({ toggleMenu, navLinks }: MobileMenuProps) => {
  return (
    <motion.nav
      className="between flex-col! gap-4 absolute top-0 left-0 w-full sm:w-[70vw] min-h-dvh bg-[var(--neutral-0)] z-20 sm:border-r-2 border-[var(--primary-4)] pb-10 shadow-amber-950/20 shadow-2xl"
      aria-label="Mobile navigation menu"
      role="navigation"
      variants={SlideInVariants("-100%", 0.05)}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="center justify-between! w-full h-[4.5rem] bg-[var(--primary-3)] px-4">
        <Logo />
        <button
          type="button"
          onClick={toggleMenu}
          className="center h-8 w-8 rounded-lg shadow-2xl bg-[var(--neutral-6)] text-[var(--text-on-primary)]"
          aria-label="Close menu"
        >
          <Close />
        </button>
      </div>
      <ul className="flex flex-col w-full gap-2" role="list">
        {navLinks.map((l) => (
          <li key={l.id} className="w-full not-last:pb-4 px-4" role="listitem">
            <Link
              href={l.href}
              onClick={toggleMenu}
              className="center justify-between! py-1 px-2 rounded-lg relative border border-[var(--border-light)] hover:text-[var(--primary-4)] hover:bg-[var(--neutral-6)] text-xl font-normal"
              aria-label={l.label}
            >
              {l.label}
              <span
                className="center bg-[var(--primary-6)] text-[var(--text-on-primary)] rounded-full"
                aria-hidden="true"
              >
                <KeyboardArrowRight className="" fontSize="small" />
              </span>
              <span className="sr-only">Navigate to {l.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <SocialsList iconClassName="w-10 h-10" fontSize="medium" />
    </motion.nav>
  );
};
