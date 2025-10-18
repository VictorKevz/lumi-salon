"use client";
import { CTALink } from "@/app/components/CTALink";
import { SectionProps } from "@/lib/header";
import { getServices } from "@/lib/services";
import Image from "next/image";
import React from "react";
import { Message } from "@mui/icons-material";
import { AnimationWrapper } from "@/app/components/AnimationWrapper";
import { motion } from "framer-motion";
import { ServiceIcon } from "@/app/components/ServiceIcon";
export const Services = ({ messages }: SectionProps) => {
  const services = getServices(messages);

  return (
    <section
      id="services"
      className="center flex-col! w-full relative bg-[var(--primary-1)] py-20 px-4 lg:px-8 z-5"
    >
      <AnimationWrapper
        as={motion.header}
        className="max-w-4xl w-full center flex-col! text-center"
        animate={true}
        offset={30}
      >
        <h2>{messages["services.title"]}</h2>
        <p>{messages["services.intro"]}</p>
      </AnimationWrapper>
      <div className="max-w-screen-xl w-full grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 mt-20">
        {services.map((service, i) => (
          <AnimationWrapper
            key={service.id}
            as={motion.article}
            animate={true}
            offset={-20}
            delay={0.05 * i}
            className="between flex-col! w-full h-full bg-[var(--primary-2)] rounded-lg shadow-2xl shadow-black/20"
          >
            <span className="-mt-10">
              <ServiceIcon url={service.icon} hide={false} />
            </span>

            <header className=" mt-4 text-center px-3.5">
              <h3 className="font-semibold text-xl">{service.title}</h3>
              <p className="text-base! md:text-lg!">{service.description}</p>
            </header>
            <div className="w-full min-h-40 relative mt-4">
              <Image
                src={service.image}
                height={160}
                width={400}
                alt={service.description}
                className="w-full! object-cover object-center rounded-b-lg"
              />
              <div className="card-overlay rounded-b-lg"></div>
            </div>
          </AnimationWrapper>
        ))}
      </div>
      <div
        className="center flex-col! mt-8 text-center"
        role="complementary"
        aria-labelledby="custom-services"
      >
        <AnimationWrapper
          as={motion.p}
          xOffset={30}
          delay={0.05}
          className="my-4"
        >
          {messages["services.custom"]}
        </AnimationWrapper>
        <AnimationWrapper delay={0.15} xOffset={30} className="max-w-xs w-full">
          <CTALink href="#contact" variant="fill" Icon={Message}>
            {messages["contact.title"]}
          </CTALink>
        </AnimationWrapper>
      </div>
    </section>
  );
};
