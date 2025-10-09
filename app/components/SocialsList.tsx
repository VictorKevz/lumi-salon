import { iconMap, socials } from "@/lib/header";
import Link from "next/link";
import React from "react";

export const SocialsList = () => {
  return (
    <ul className="center gap-3 text-sm">
      {socials.map((s) => {
        const Icon = iconMap[s.id];
        return (
          <li key={s.id}>
            <Link href={s.href} aria-label={s.label}>
              {Icon ? (
                <span className="center h-8 w-8 bg-[var(--primary-6)] rounded-full hover:bg-[var(--primary-4)]">
                  <Icon
                    fontSize="small"
                    aria-hidden="true"
                    className="scale-90 text-[var(--neutral-0)]"
                  />
                </span>
              ) : null}
              <legend className="sr-only">{s.label}</legend>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
