"use client";

import { FadeInVariants } from "@/app/variants";
import { motion } from "framer-motion";
import React from "react";

type AnimationWrapperProps = {
  children: React.ReactNode;
  delay?: number;
  offset?: number;
  as?: typeof motion.div | typeof motion.h1 | typeof motion.p;
  className?: string;
};

export const AnimationWrapper = ({
  children,
  delay = 0,
  offset = 0,
  as: Component = motion.div,
  className,
}: AnimationWrapperProps) => (
  <Component
    variants={FadeInVariants(offset, delay)}
    initial="hidden"
    animate="visible"
    className={className}
  >
    {children}
  </Component>
);
