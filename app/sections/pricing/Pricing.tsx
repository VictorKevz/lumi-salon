import { AnimationWrapper } from "@/app/components/AnimationWrapper";
import { PictureBg } from "@/app/components/PictureBg";
import { ServiceIcon } from "@/app/components/ServiceIcon";
import { PricingTabId } from "@/app/types/pricing";
import { SectionProps } from "@/lib/header";
import { getPricingData, getPricingTabs } from "@/lib/pricing";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

export const Pricing = ({ messages }: SectionProps) => {
  const [selectedTab, setSelectedTab] = useState<PricingTabId>("haircut");
  const tabs = getPricingTabs(messages);
  const pricingData = getPricingData(messages);

  return (
    <section
      id="pricing"
      className="center flex-col! w-full relative pt-10 sm:py-20 sm:px-4 lg:px-8 z-5"
      aria-labelledby="pricing-heading"
    >
      <AnimationWrapper
        as={motion.header}
        animate={true}
        offset={-30}
        className="center flex-col! max-w-3xl w-full text-center card-inset center px-4 py-8 backdrop-blur-[1rem] bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-4xl sm:rounded-lg"
      >
        <h2 id="pricing-heading">{messages["pricing.heading"]}</h2>
        <p className="text-[var(--text-primary)]! font-semibold">
          {messages["pricing.intro"]}
        </p>
      </AnimationWrapper>

      <AnimationWrapper
        offset={-10}
        animate={true}
        className="center flex-col! max-w-screen-xl w-full mt-10 px-4 py-6 lg:p-6 backdrop-blur-[0.8rem] bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-t-4xl sm:rounded-2xl"
        aria-live="polite"
      >
        <nav className="w-full" aria-label={messages["pricing.tabs.ariaLabel"]}>
          <ul
            role="tablist"
            className="w-full grid justify-between gap-2 grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
          >
            {tabs.map((tab) => {
              const isActive = selectedTab === tab.id;
              return (
                <AnimationWrapper
                  key={tab.id}
                  as={motion.li}
                  offset={-10}
                  animate={true}
                  className="w-full"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`tabpanel-${tab.id}`}
                    id={`tab-${tab.id}`}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`center flex-col! w-full border rounded-xl px-2.5 py-3 font-bold gap-1 uppercase hover:bg-[var(--primary-6)]! hover:text-[var(--neutral-0)] hover:scale-105 hover:-translate-y-0.5 ${
                      isActive
                        ? "shadow-2xl text-[var(--neutral-0)] bg-[var(--primary-6)]"
                        : "card-inset border-[var(--glass-border)] backdrop-blur-2xl"
                    }`}
                  >
                    <ServiceIcon url={tab.icon} hide={true} />
                    <span>{tab.label}</span>
                    {isActive && <span className="sr-only">(current tab)</span>}
                  </button>
                </AnimationWrapper>
              );
            })}
          </ul>
        </nav>

        {tabs.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`tabpanel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={selectedTab !== tab.id}
            className="w-full"
          >
            <ul className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
              {pricingData[tab.id].map((option) => (
                <li key={option.id} className="w-full">
                  <AnimationWrapper
                    as={motion.article}
                    offset={-10}
                    animate={true}
                    className="w-full relative between backdrop-blur-[0.1rem] border border-[var(--glass-border)] px-3.5 py-5 rounded-xl"
                  >
                    <div>
                      <Image
                        src={option.image}
                        width={40}
                        height={40}
                        alt={`${option.title} illustration`}
                        className="w-14 h-14 lg:w-18 lg:h-18 object-cover rounded-full shadow-2xl border-2 border-[var(--glass-border)]"
                      />
                      <h3 className="font-bold text-[var(--text-primary)]">
                        {option.title}
                      </h3>
                      <p className="text-lg! text-[var(--neutral-5)]! font-medium">
                        {option.description}
                      </p>
                    </div>
                    <span
                      className="text-[var(--primary-6)] text-3xl font-bold"
                      aria-label={`${option.price} euros`}
                    >
                      {option.price}
                    </span>
                  </AnimationWrapper>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </AnimationWrapper>

      <PictureBg
        desktopUrl="/images/pricing-desktop.png"
        mobileUrl="/images/pricing-mobile.png"
        alt={messages["hero.bg.alt"]}
      />
      <div className="overlay backdrop-blur-[0.5rem] -z-1"></div>
    </section>
  );
};
