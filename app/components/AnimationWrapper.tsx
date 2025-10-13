"use client";

import { FadeInVariants } from "@/app/variants";
import { motion, Variants } from "framer-motion";
import React from "react";

type AnimationWrapperProps = {
  children: React.ReactNode;
  delay?: number;
  offset?: number;
  as?:
    | typeof motion.div
    | typeof motion.header
    | typeof motion.article
    | typeof motion.h1
    | typeof motion.p;
  className?: string;
  variantsFn?: (offset: number, delay: number) => Variants;
  animate?: boolean;
  viewport?: {
    once: boolean;
    amount: number;
  };
};

export const AnimationWrapper = ({
  children,
  delay = 0,
  offset = 0,
  as: Component = motion.div,
  className,
  variantsFn = (offset: number, delay: number) => FadeInVariants(offset, delay),
  animate = true,
  viewport = { once: true, amount: 0.3 },
}: AnimationWrapperProps) => (
  <Component
    variants={variantsFn(offset, delay)}
    initial="hidden"
    {...(animate
      ? { animate: "visible" }
      : { whileInView: "visible", viewport })}
    className={className}
  >
    {children}
  </Component>
);
