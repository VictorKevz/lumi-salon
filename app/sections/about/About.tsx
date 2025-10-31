import { AnimationWrapper } from "@/app/components/AnimationWrapper";
import { getAboutStats, getAboutValues } from "@/lib/about";
import { SectionProps } from "@/lib/header";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

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
      className="flex flex-col items-center w-full relative bg-[var(--primary-2)] z-5 pb-30"
    >
      <dl className="between flex-col! md:flex-row! w-full bg-[var(--neutral-6)] grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 px-5">
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
              <CountUp
                end={Number(stat.value)}
                duration={2.5}
                enableScrollSpy
                scrollSpyOnce
              />
            </dd>
          </div>
        ))}
      </dl>
      <AnimationWrapper
        as={motion.header}
        className="max-w-4xl w-full center flex-col! text-center mt-10"
        animate={true}
        offset={-10}
      >
        <h2>{messages["about.title"]}</h2>
        <p>{messages["about.intro"]}</p>
      </AnimationWrapper>
      <div className="grid lg:grid-cols-3 gap-10 max-w-screen-xl w-full mt-12 sm:px-4 2xl:px-0">
        <AnimationWrapper
          as={motion.figure}
          animate={true}
          offset={-20}
          className="relative"
        >
          <Image
            src={"/images/about-1.webp"}
            alt={messages["about.fig.alt"]}
            height={500}
            width={450}
            className="w-full h-full rounded-t-4xl sm:rounded-xl shadow-2xl"
          />
          <div className="card-overlay rounded-t-4xl sm:rounded-xl opacity-70"></div>
          <figcaption className="sr-only">
            {messages["about.fig.alt"]}
          </figcaption>
        </AnimationWrapper>
        <article className="between flex-col! justify-center w-full bg-[var(--primary-3)] py-6 lg:col-span-2 px-4 rounded-t-4xl sm:rounded-xl text-center">
          <AnimationWrapper
            as={motion.header}
            animate={true}
            xOffset={20}
            delay={0.15}
            className="center flex-col text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold">
              {messages["about.why.title"]}
            </h3>
            <p>{messages["about.why.intro"]}</p>
          </AnimationWrapper>
          <ul className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-4 mt-12">
            {aboutValuesData.map((value, i) => {
              return (
                <li
                  key={value.id}
                  className="w-full sm:last:col-span-2 lg:last:col-span-1"
                >
                  <AnimationWrapper
                    as={motion.article}
                    animate={true}
                    xOffset={20}
                    delay={0.01 * i}
                    className="center flex-col! w-full h-full px-3.5 py-3 bg-[var(--primary-2)] rounded-lg shadow-sm"
                  >
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
                  </AnimationWrapper>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
};
