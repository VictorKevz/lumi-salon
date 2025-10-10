"use client";

import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type CTAVariant = "fill" | "outline";

interface CTALinkProps extends ComponentPropsWithoutRef<typeof Link> {
  variant?: CTAVariant;
  children: React.ReactNode;
}

export function CTALink({
  variant = "fill",
  className = "",
  children,
  ...props
}: CTALinkProps) {
  const baseStyles = "center h-12 px-4 w-full rounded-lg transition-colors";
  const variantStyles = {
    fill: "bg-[var(--neutral-6)] text-[var(--primary-3)] hover:bg-[var(--neutral-5)]",
    outline:
      "border-2 border-[var(--neutral-6)] text-[var(--neutral-6)] hover:bg-[var(--neutral-6)] hover:text-[var(--primary-3)]",
  };

  return (
    <Link
      className={`font-bold ${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
