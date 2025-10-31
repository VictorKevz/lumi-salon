"use client";

import { ContactCard as ContactCardType } from "@/app/types/contact";
import Link from "next/link";

interface ContactCardProps {
  card: ContactCardType;
}

export const ContactCard = ({ card }: ContactCardProps) => {
  const Icon = card.icon;

  return (
    <article className="w-full bg-[var(--primary-3)] rounded-lg p-5 shadow-xl">
      <header className="flex items-center gap-3 mb-4">
        <span className="center w-12 h-12 rounded-full bg-[var(--neutral-6)] text-[var(--text-on-primary)]">
          <Icon />
        </span>
        <h3 className="text-xl font-bold">{card.title}</h3>
      </header>
      <ul className="space-y-3">
        {card.details.map((detail) => {
          const isLink = detail.type === "phone" || detail.type === "email";
          const content = (
            <span className="text-base text-[var(--text-secondary)]">
              {detail.label && (
                <strong className="font-semibold text-[var(--text-primary)] mr-2">
                  {detail.label}:
                </strong>
              )}
              {detail.value}
            </span>
          );

          return (
            <li key={detail.id}>
              {isLink && detail.href ? (
                <Link
                  href={detail.href}
                  className="hover:text-[var(--accent)] transition-colors duration-200 inline-block"
                  aria-label={`${detail.type === "phone" ? "Call" : "Email"} ${
                    detail.value
                  }`}
                >
                  {content}
                </Link>
              ) : (
                content
              )}
            </li>
          );
        })}
      </ul>
    </article>
  );
};
