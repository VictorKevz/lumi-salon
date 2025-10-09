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
    <div className="flex gap-2 items-center">
      <Link
        href={switchLocale("fi")}
        className={`text-sm ${currentLocale === "fi" ? "font-bold" : ""}`}
        aria-label={messages["nav.locale.fi.aria"]}
      >
        {messages["nav.locale.fi"]}
      </Link>
      <span>/</span>
      <Link
        href={switchLocale("en")}
        className={`text-sm ${currentLocale === "en" ? "font-bold" : ""}`}
        aria-label={messages["nav.locale.en.aria"]}
      >
        {messages["nav.locale.en"]}
      </Link>
    </div>
  );
}
