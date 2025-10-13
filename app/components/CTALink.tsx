"use client";

import { MuiIcon } from "@/lib/header";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type CTAVariant = "fill" | "outline";

interface CTALinkProps extends ComponentPropsWithoutRef<typeof Link> {
  variant?: CTAVariant;
  children: React.ReactNode;
  Icon: MuiIcon;
}

export function CTALink({
  variant = "fill",
  className = "",
  children,
  Icon,
  ...props
}: CTALinkProps) {
  const baseStyles =
    "center gap-1 h-12 px-4 w-full font-bold text-lg rounded-lg transition-colors shadow-2xl shadow-black/20";
  const variantStyles = {
    fill: "bg-[var(--neutral-6)] text-[var(--text-on-primary)] border-2 border-transparent hover:bg-transparent hover:border-[var(--border-dark)] hover:text-[var(--text-primary)]",
    outline:
      "border-2 border-[var(--neutral-6)] text-[var(--neutral-6)] hover:bg-[var(--neutral-6)] hover:text-[var(--primary-3)]",
  };

  return (
    <Link
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      rel="noopener noreferrer"
      {...props}
    >
      {children} <Icon fontSize="small" />
    </Link>
  );
}
