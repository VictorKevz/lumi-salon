import { AnimationWrapper } from "@/app/components/AnimationWrapper";
import { Logo } from "@/app/components/Logo";
import { SectionProps } from "@/lib/header";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const About = ({ messages }: SectionProps) => {
  return (
    <section
      id="about"
      className="center flex-col! w-full relative bg-[var(--primary-1)] py-20 px-4 lg:px-8 z-5"
    >
      <AnimationWrapper
        as={motion.header}
        className="max-w-4xl w-full center flex-col! text-center"
        animate={false}
        offset={-10}
      >
        <h2>{messages["about.title"]}</h2>
        <p>{messages["about.intro"]}</p>
      </AnimationWrapper>
      <div className="grid lg:grid-cols-3 gap-10 max-w-screen-xl w-full mt-10">
        <figure className="relative center group">
          <Image
            src={"/images/about-1.webp"}
            alt=""
            height={500}
            width={450}
            className="w-full h-auto rounded-xl shadow-2xl"
          />
          <div className="card-overlay rounded-lg"></div>
        </figure>
        <div className="w-full h-full bg-[var(--primary-5)] lg:col-span-2 px-5 py-6 rounded-xl">
          <h2>Why choose us?</h2>
          <p>{messages["about.intro"]}</p>
        </div>
      </div>
    </section>
  );
};
