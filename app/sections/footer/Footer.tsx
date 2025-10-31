import { CTALink } from "@/app/components/CTALink";
import { Logo } from "@/app/components/Logo";
import { SocialsList } from "@/app/components/SocialsList";
import { getContacts, getNavLinks, iconMap, SectionProps } from "@/lib/header";
import { Message } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

export const Footer = ({ messages }: SectionProps) => {
  return (
    <footer className="center flex-col! w-full bg-[var(--primary-1)] px-4 2xl:px-8 py-6 z-10">
      <div className="between flex-col! lg:flex-row! gap-6 max-w-screen-xl w-full min-h-40 bg-[var(--neutral-6)] rounded-lg -mt-[12%] z-20 px-4 py-6 shadow-md">
        <h2 className="text-[var(--primary-5)]">
          Contact Us <br /> Today
        </h2>
        <div className="max-w-xs w-full">
          <CTALink
            href={"#contact"}
            variant="fill"
            Icon={Message}
            className="bg-[var(--primary-5)] text-[var(--neutral-5)]! border-2 border-transparent hover:border-[var(--primary-5)] hover:text-[var(--primary-5)]!"
          >
            {messages["contact.title"]}
          </CTALink>
        </div>
      </div>
      <div className="between w-full mt-10 flex-col! lg:flex-row! items-start!">
        <div className="flex flex-col items-start">
          <Logo />
          <p className="text-lg! max-w-xs text-[var(--neutral-6)]!">
            {messages["hero.subtitle"]}
          </p>
        </div>
        <ul
          className="flex flex-col items-start mt-8 lg:mt-0"
          aria-label="Contact information list"
          role="list"
        >
          <li>
            <h3 className="text-base font-semibold uppercase mb-2 lg:mb-0">
              Contact Info
            </h3>
          </li>
          {getContacts(messages).map((c) => {
            const Icon = iconMap[c.type];
            return (
              <li key={c.type} className="text-sm not-last:pb-2">
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
              </li>
            );
          })}
        </ul>
        <ul className="flex flex-col items-start mt-8 lg:mt-0">
          <li>
            <h3 className="text-base font-semibold uppercase mb-2 lg:mb-0">
              Quick Links
            </h3>
          </li>
          {getNavLinks(messages).map((link) => (
            <li key={link.id} className="not-last:pb-1">
              <Link
                href={link.href}
                className="hover:text-[var(--primary-6)] hover:translate-y-1 hover:scale-105"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="between flex-col! items-start! gap-2 md:flex-row! md:items-center w-full border-t-1 border-[var(--primary-3)] mt-6 pt-4 ">
        <SocialsList />
        <p className="text-lg!">©️Lumi. 2025</p>
        <p className="text-sm!">
          Developed by
          <Link
            href={"https://www.victorkevz.com"}
            target="_blank"
            rel="noopener"
            className="text-[var(--primary-5)] ml-0.5 font-semibold"
          >
            Victor Kevz
          </Link>
        </p>
      </div>
    </footer>
  );
};
