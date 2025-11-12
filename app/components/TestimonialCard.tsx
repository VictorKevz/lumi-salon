"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TestimonialCardProps } from "@/app/types/testimonials";
import { FormatQuote, Star } from "@mui/icons-material";
import { AnimationWrapper } from "./AnimationWrapper";

export const TestimonialCard = ({
  testimonial,
  index,
}: TestimonialCardProps) => {
  return (
    <AnimationWrapper
      as={motion.article}
      animate={true}
      delay={index * 0.03}
      className="relative center flex-col! rounded-lg bg-[var(--primary-1)] px-4 py-6 shadow-lg transition-shadow hover:shadow-xl w-full"
    >
      {/* Quote at top, full width */}
      <FormatQuote
        className="absolute -top-2 left-4 text-[var(--primary-4)] opacity-30 mr-2 align-top"
        sx={{ fontSize: 52 }}
        aria-hidden="true"
      />
      <blockquote className="w-full my-6 text-left">
        <span className="italic text-[var(--text-primary)] text-base sm:text-lg">
          {testimonial.quote}
        </span>
      </blockquote>

      {/* Two columns below quote */}
      <div className="flex w-full gap-4 items-center justify-between">
        {/* Profile + Name/Role */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border-4 border-[var(--primary-3)] shadow-md flex-shrink-0">
            <Image
              src={testimonial.profile}
              alt={`${testimonial.name} profile photo`}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-[var(--text-primary)] truncate">
              {testimonial.name}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] truncate">
              {testimonial.role}
            </p>
          </div>
        </div>

        {/* Stars in pill layout */}
        <div
          className="center gap-1 px-2 h-8 rounded-full bg-[var(--primary-5)]/10"
          aria-label="5 star rating"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-[var(--primary-6)]" />
          ))}
        </div>
      </div>
    </AnimationWrapper>
  );
};
