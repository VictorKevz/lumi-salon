import { AnimationWrapper } from "@/app/components/AnimationWrapper";
import { Logo } from "@/app/components/Logo";
import { getAboutStats, getAboutValues } from "@/lib/about";
import { SectionProps } from "@/lib/header";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const About = ({ messages }: SectionProps) => {
  const aboutValuesData = getAboutValues(messages);
  const statsData = getAboutStats(messages);

  const colorVars: Record<string, string> = {
    quality: "info",
    care: "success",
    experience: "accent",
  };
  return (
    <section
      id="about"
      className="center flex-col! w-full relative bg-[var(--primary-1)] pt-20 sm:py-20 sm:px-4 lg:px-8 z-5"
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
            className="w-full h-full rounded-t-4xl sm:rounded-xl shadow-2xl"
          />
          <div className="card-overlay rounded-t-4xl sm:rounded-xl "></div>
        </figure>
        <div className="center flex-col! justify-center w-full bg-[var(--primary-3)] lg:col-span-2 px-4 pt-6 pb-4 rounded-t-4xl sm:rounded-xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold">
            {messages["about.why.title"]}
          </h3>
          <p>{messages["about.why.intro"]}</p>
          <ul className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-4 mt-12">
            {aboutValuesData.map((value) => {
              return (
                <li
                  key={value.id}
                  className="w-full sm:last:col-span-2 lg:last:col-span-1 shadow-sm"
                >
                  <article className="center flex-col! w-full h-full px-3.5 py-3 bg-[var(--primary-1)] rounded-lg">
                    <span
                      className={`center w-12 h-12 rounded-full text-[var(--neutral-0)]`}
                      style={{
                        backgroundColor: `var(--${colorVars[value.id]})`,
                      }}
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
      <dl className="between flex-col! md:flex-row! w-full bg-[var(--neutral-6)] sm:mt-10 sm:rounded-xl grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 px-5">
        {statsData.map((stat) => (
          <div key={stat.id} className="center flex-col">
            <dt className="text-base font-bold text-[var(--neutral-2)]">
              {stat.label}
            </dt>
            <dd
              className="text-4xl md:text-6xl font-extrabold mt-2"
              style={{ color: `var(--${colorVars[stat.id]})` }}
              aria-live="polite"
            >
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};
