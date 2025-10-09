"use client";
import {
  Close,
  Facebook,
  Instagram,
  KeyboardArrowRight,
  LinkedIn,
  Menu,
} from "@mui/icons-material";
import { LocalPhone, Email, WhatsApp, AccessAlarm } from "@mui/icons-material";
import Link from "next/link";
import React, { useState } from "react";
import { getContacts, getNavLinks, socials, Messages } from "@/lib/header";

type HeaderProps = { isClient: boolean; messages: Messages };

export const Header = ({ isClient, messages }: HeaderProps) => {
  const contacts = getContacts(messages);
  const navLinks = getNavLinks(messages);

  if (!isClient) {
    return (
      <header>
        <div>
          <ul>
            {contacts.map((c) => (
              <li key={c.type}>
                {c.href ? (
                  <Link href={c.href}>{c.label}</Link>
                ) : (
                  <span>{c.label}</span>
                )}
              </li>
            ))}
          </ul>
          <ul>
            <li>{messages["header.banner.follow"]}</li>
            {socials.map((s) => (
              <li key={s.id}>
                <Link href={s.href}>{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <nav>
          <div>
            <span>{messages["nav.brand"]}</span>
          </div>
          <ul>
            {navLinks.map((l) => (
              <li key={l.id}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
            <li>
              <Link
                href={`tel:${(messages["header.banner.phone"] || "").replace(
                  /\s/g,
                  ""
                )}`}
              >
                {messages["header.cta.call"]}
              </Link>
            </li>
            <li>
              <span>
                {messages["nav.locale.fi"]} / {messages["nav.locale.en"]}
              </span>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

  return (
    <header className="w-full">
      <Banner isClient={isClient} messages={messages} />
      <Navbar isClient={isClient} messages={messages} />
    </header>
  );
};

export const Banner = ({ messages }: HeaderProps) => {
  const contacts = getContacts(messages);

  const iconMap: Record<string, any> = {
    fb: Facebook,
    ig: Instagram,
    in: LinkedIn,
    phone: LocalPhone,
    email: Email,
    whatsapp: WhatsApp,
    hours: AccessAlarm,
  };

  return (
    <div className="between hidden! lg:flex! w-full h-[2.7rem] bg-[var(--neutral-6)] text-[var(--neutral-0)] px-4">
      <ul className="center  divide-x divide-[var(--border-light)] ">
        {contacts.map((c) => {
          const Icon = iconMap[c.type];
          return (
            <li key={c.type} className="text-sm not-first:px-4 first:pr-4 ">
              {c.href ? (
                <Link
                  href={c.href}
                  aria-label={c.label}
                  className="flex items-center gap-2 hover:text-[var(--primary-5)]"
                >
                  {Icon ? (
                    <Icon
                      fontSize="small"
                      aria-hidden="true"
                      className="text-[var(--primary-6)]"
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
                      className="text-[var(--primary-6)]"
                    />
                  ) : null}
                  <span>{c.label}</span>
                </span>
              )}
            </li>
          );
        })}
      </ul>
      <ul className="center gap-3 text-sm">
        <li className="opacity-80">{messages["header.banner.follow"]}</li>
        {socials.map((s) => {
          const Icon = iconMap[s.id];
          return (
            <li key={s.id}>
              <Link href={s.href} aria-label={s.label}>
                {Icon ? (
                  <span className="center p-1 bg-[var(--primary-6)] rounded-full hover:bg-[var(--primary-4)]">
                    <Icon
                      fontSize="small"
                      aria-hidden="true"
                      className="scale-90"
                    />
                  </span>
                ) : null}
                <legend className="sr-only">{s.label}</legend>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const Navbar = ({ messages }: HeaderProps) => {
  const navLinks = getNavLinks(messages);
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <nav className="between relative w-full h-[4rem] bg-[var(--primary-3)] px-4 z-5">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="center lg:hidden!"
          onClick={() => setOpen(!isOpen)}
        >
          <Menu />
        </button>
        <span className="font-semibold">{messages["nav.brand"]}</span>
      </div>
      <ul className="center hidden! lg:flex! items-center gap-6">
        {navLinks.map((l) => (
          <li key={l.id}>
            <Link
              href={l.href}
              className="nav-link center min-w-max relative px-4 z-5 hover:h-10 hover:text-[var(--primary-5)] "
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="center gap-4">
        <li>
          <Link
            href={`tel:${(messages["header.banner.phone"] || "").replace(
              /\s/g,
              ""
            )}`}
            className="center h-10 min-w-[10rem] w-full bg-[var(--neutral-6)] text-[var(--primary-3)] rounded-lg"
          >
            {messages["header.cta.call"]}
          </Link>
        </li>
        <li className="center gap-2 h-10 border border-[var(--border-dark)] px-4 rounded-lg">
          <button type="button">{messages["nav.locale.fi"]}</button>

          <button type="button">{messages["nav.locale.en"]}</button>
        </li>
      </ul>
      {isOpen && (
        <div className="absolute top-full left-0 w-full min-h-[calc(100dvh-4rem)] bg-[var(--overlay)] z-1"></div>
      )}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full sm:w-[40vw] min-h-dvh bg-[var(--neutral-0)] z-10 sm:border-r-2 border-[var(--primary-4)]">
          <div className="center justify-start! w-full h-[4rem] bg-[var(--primary-3)] px-4">
            <span className="text-3xl">Lumi</span>
          </div>
          <ul className="flex flex-col w-full gap-4 py-5 divide-y-1 divide-[var(--primary-2)]">
            {navLinks.map((l) => (
              <li key={l.id} className="w-full not-last:pb-4 px-4">
                <Link
                  href={l.href}
                  className="center justify-between! relative z-5 hover:text-[var(--primary-4)] text-xl font-semibold"
                >
                  {l.label}
                  <KeyboardArrowRight className="text-[var(--primary-6)]" />
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setOpen(!isOpen)}
            className="center h-8 w-8 absolute right-4 sm:-right-4 top-4 bg-[var(--primary-6)] rounded-full border border-[var(--border-dark)] shadow-2xl"
          >
            <Close />
          </button>
        </div>
      )}
    </nav>
  );
};
