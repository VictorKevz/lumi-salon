"use client";
import React from "react";
import { motion } from "framer-motion";
import { SectionProps } from "@/lib/header";
import { getTestimonials } from "@/lib/testimonials";
import { TestimonialCard } from "@/app/components/TestimonialCard";
import { AnimationWrapper } from "@/app/components/AnimationWrapper";

export const Testimonial = ({ messages }: SectionProps) => {
  const testimonials = getTestimonials(messages);

  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-[var(--primary-0)] py-20 px-4 lg:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <AnimationWrapper
          as={motion.header}
          className="mb-12 text-center max-w-4xl w-full mx-auto"
          animate={true}
          offset={30}
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
            {messages["testimonials.title"]}
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            {messages["testimonials.subtitle"]}
          </p>
        </AnimationWrapper>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
