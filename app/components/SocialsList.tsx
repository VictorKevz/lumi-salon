import { iconMap, socials } from "@/lib/header";
import Link from "next/link";
import React from "react";
type SocialsListProps = {
  iconClassName?: string;
  fontSize?: "small" | "inherit" | "large" | "medium";
};
export const SocialsList = ({
  iconClassName = "h-6.5 w-6.5 ",
  fontSize = "small",
}: SocialsListProps) => {
  return (
    <ul className="center gap-3 text-sm">
      {socials.map((s) => {
        const Icon = iconMap[s.id];
        return (
          <li key={s.id}>
            <Link href={s.href} aria-label={s.label}>
              {Icon ? (
                <span
                  className={`center bg-[var(--primary-6)] rounded-full hover:bg-[var(--primary-5)] ${iconClassName} hover:-translate-y-0.5 transition-all duration-300 ease-in-out`}
                >
                  <Icon
                    fontSize={fontSize}
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
