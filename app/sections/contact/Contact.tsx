"use client";

import { AnimationWrapper } from "@/app/components/AnimationWrapper";
import { ContactCard } from "@/app/components/ContactCard";
import { ContactForm } from "@/app/components/ContactForm";
import { SectionProps } from "@/lib/header";
import { motion } from "framer-motion";
import React from "react";
import { getContactCards } from "@/lib/contact";

export const Contact = ({ messages }: SectionProps) => {
  const contactCards = getContactCards(messages);

  return (
    <section
      id="contact"
      className="center flex-col! w-full relative bg-[var(--primary-1)] py-20 px-4 lg:px-8 z-5"
    >
      <AnimationWrapper
        as={motion.header}
        className="max-w-4xl w-full center flex-col! text-center mb-12"
        animate={true}
        offset={-10}
      >
        <h2>{messages["contact.title"]}</h2>
        <p>{messages["contact.subtitle"]}</p>
      </AnimationWrapper>

      <div className="max-w-screen-xl w-full grid lg:grid-cols-3 gap-10">
        {/* Left Column: Contact Cards */}
        <div className="w-full flex flex-col justify-between gap-4">
          {contactCards.map((card, index) => (
            <AnimationWrapper
              key={card.id}
              animate={true}
              offset={-20}
              delay={index * 0.1}
            >
              <ContactCard card={card} />
            </AnimationWrapper>
          ))}
        </div>

        {/* Right Column: Contact Form */}
        <AnimationWrapper
          animate={true}
          offset={-20}
          delay={0.2}
          className="w-full lg:col-span-2"
        >
          <ContactForm messages={messages} />
        </AnimationWrapper>
      </div>
    </section>
  );
};
