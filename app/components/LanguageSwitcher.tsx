"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Messages } from "@/lib/header";

type Props = {
  messages: Messages;
};

export function LanguageSwitcher({ messages }: Props) {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1];

  const switchLocale = (locale: string) => {
    const newPathname = pathname.replace(`/${currentLocale}`, `/${locale}`);
    return newPathname;
  };

  return (
    <div
      className="center h-10 min-w-[6rem] w-max border text-[var(--text-primary)] border-[var(--border-dark)] rounded-lg"
      role="group"
      aria-label={messages["nav.locale.switcher"]}
    >
      <Link
        href={switchLocale("fi")}
        className={`center px-4 text-sm ${
          currentLocale === "fi"
            ? "h-9 bg-[var(--neutral-6)] text-[var(--text-on-primary)] rounded-md ml-0.5"
            : ""
        }`}
        aria-current={currentLocale === "fi" ? "true" : undefined}
        hrefLang="fi"
      >
        <span aria-hidden="true">{messages["nav.locale.fi"]}</span>
        <span className="sr-only">{messages["nav.locale.fi.aria"]}</span>
      </Link>
      <Link
        href={switchLocale("en")}
        className={`center text-sm px-4 font-bold ${
          currentLocale === "en"
            ? "h-9 bg-[var(--neutral-6)] text-[var(--text-on-primary)] rounded-md mr-0.5"
            : ""
        }`}
        aria-current={currentLocale === "en" ? "true" : undefined}
        hrefLang="en"
      >
        <span aria-hidden="true">{messages["nav.locale.en"]}</span>
        <span className="sr-only">{messages["nav.locale.en.aria"]}</span>
      </Link>
    </div>
  );
}
