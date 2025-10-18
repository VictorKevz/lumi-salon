"use client";
import { FadeInVariants } from "@/app/variants";
import { motion, Variants } from "framer-motion";
import React from "react";

type AnimationWrapperProps = {
  children: React.ReactNode;
  delay?: number;
  offset?: number;
  xOffset?: number;
  as?: React.ElementType;
  className?: string;
  variantsFn?: (offset: number, delay: number, xOffset: number) => Variants;
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
  xOffset = 0,
  as: Component = motion.div,
  className,
  variantsFn = (offset: number, delay: number, xOffset: number) =>
    FadeInVariants(offset, delay, xOffset),
  animate: triggerOnView = true,
  viewport = { once: true, amount: 0.25 },
}: AnimationWrapperProps) => {
  const motionProps = triggerOnView
    ? { whileInView: "visible", viewport }
    : { animate: "visible" };

  return (
    <Component
      variants={variantsFn(offset, delay, xOffset)}
      initial="hidden"
      {...motionProps}
      className={className}
    >
      {children}
    </Component>
  );
};

export const FadeInSection = (props: Omit<AnimationWrapperProps, "as">) => (
  <AnimationWrapper as={motion.section} {...props} />
);

export const FadeInHeader = (props: Omit<AnimationWrapperProps, "as">) => (
  <AnimationWrapper as={motion.header} {...props} />
);

export const FadeInFigure = (props: Omit<AnimationWrapperProps, "as">) => (
  <AnimationWrapper as={motion.figure} {...props} />
);
