import { AnimationWrapper } from "@/app/components/AnimationWrapper";
import { Logo } from "@/app/components/Logo";
import { getAboutValues } from "@/lib/about";
import { SectionProps } from "@/lib/header";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const About = ({ messages }: SectionProps) => {
  const aboutValuesData = getAboutValues(messages);
  const getClasses: Record<string, string> = {
    quality: "bg-[var(--info)]! text-[var(--neutral-0)]",
    care: "bg-[var(--success)]! text-[var(--neutral-0)]",
    experience: "bg-[var(--accent)]! text-[var(--neutral-0)]",
  };
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
      <div className="grid lg:grid-cols-3 gap-10 max-w-screen-xl w-full mt-12">
        <figure className="relative">
          <Image
            src={"/images/about-1.webp"}
            alt=""
            height={500}
            width={450}
            className="w-full h-full rounded-xl shadow-2xl"
          />
          <div className="card-overlay rounded-xl"></div>
        </figure>
        <div className="center flex-col! justify-center w-full  lg:col-span-2 px-5 py-6 rounded-xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold">
            {messages["about.why.title"]}
          </h3>
          <p>{messages["about.why.intro"]}</p>
          <ul className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-2 mt-12">
            {aboutValuesData.map((value) => {
              return (
                <li key={value.id} className="w-full">
                  <article className="center flex-col! w-full h-full px-3.5 py-3 bg-[var(--border-light)] rounded-lg">
                    <span
                      className={`center w-12 h-12 rounded-full ${
                        getClasses[value.id]
                      }`}
                    >
                      <value.icon />
                    </span>
                    <h3 className="text-lg font-bold mt-2">{value.title}</h3>
                    <p className="text-base!">{value.description}</p>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
