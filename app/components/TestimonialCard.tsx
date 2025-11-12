"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TestimonialCardProps } from "@/app/types/testimonials";
import { FormatQuote } from "@mui/icons-material";

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  index,
}) => {
  return (
    <motion.article
      className="relative flex flex-col items-center rounded-lg bg-[var(--primary-1)] p-6 shadow-lg transition-shadow hover:shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Quote Icon */}
      <FormatQuote
        className="absolute left-4 top-4 text-[var(--primary-4)] opacity-30"
        sx={{ fontSize: 48 }}
        aria-hidden="true"
      />

      {/* Profile Image */}
      <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-full border-4 border-[var(--primary-3)] shadow-md">
        <Image
          src={testimonial.profile}
          alt={`${testimonial.name} profile photo`}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>

      {/* Name and Role */}
      <header className="mb-3 text-center">
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">
          {testimonial.name}
        </h3>
        <p className=" text-[var(--text-secondary)] text-lg!">
          {testimonial.role}
        </p>
      </header>

      {/* Quote */}
      <blockquote className="relative z-10 text-center">
        <p className="italic text-[var(--text-primary)] text-sm!">
          "{testimonial.quote}"
        </p>
      </blockquote>
    </motion.article>
  );
};
