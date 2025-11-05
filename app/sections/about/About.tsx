import { AnimationWrapper } from "@/app/components/AnimationWrapper";
import { Stats } from "@/app/components/Stats";
import { getAboutStats, getAboutValues } from "@/lib/about";
import { SectionProps } from "@/lib/header";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
export const About = ({ messages }: SectionProps) => {
  const aboutValuesData = getAboutValues(messages);
  const statsData = getAboutStats(messages);

  return (
    <section
      id="about"
      className="center flex-col! items-center w-full relative bg-[var(--neutral-0)] z-5"
    >
      <Stats data={statsData} />

      <AnimationWrapper
        as={motion.header}
        className="max-w-4xl w-full center flex-col! text-center pt-20 "
        animate={true}
        offset={-10}
      >
        <h2>{messages["about.title"]}</h2>
        <p>{messages["about.intro"]}</p>
      </AnimationWrapper>
      <div className="between flex-col! justify-center max-w-screen-xl w-full text-center px-4 lg:px-8">
        <ul className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
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
                  className="center flex-col! w-full"
                >
                  <div className="center relative w-36 h-36 rounded-full border-2 border-dashed border-[var(--primary-5)] p-2">
                    <span
                      className={`center w-full h-full bg-[var(--neutral-0)] shadow-2xl rounded-full text-[var(--primary-5)]`}
                    >
                      <value.icon fontSize="large" />
                    </span>
                    <p className="center absolute -bottom-6 h-10 w-10 rounded-full bg-[var(--neutral-6)] text-[var(--text-on-primary)]! right-[10%]">
                      0{i + 1}
                    </p>
                  </div>
                  <h3 className="text-lg font-bold mt-10">{value.title}</h3>
                  <p className="text-base!">{value.description}</p>
                </AnimationWrapper>
              </li>
            );
          })}
        </ul>
      </div>
      <AnimationWrapper
        as={motion.figure}
        animate={true}
        offset={-20}
        className="relative w-full mt-12"
      >
        <Image
          src={"/images/salon.png"}
          alt={messages["about.fig.alt"]}
          height={350}
          width={450}
          className="w-full! h-[15rem] 2xl:h-[20rem] object-cover"
        />
        <div className="card-overlay opacity-75 backdrop-saturate-150"></div>
        <figcaption className="sr-only">{messages["about.fig.alt"]}</figcaption>
      </AnimationWrapper>
    </section>
  );
};
