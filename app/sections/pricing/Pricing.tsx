import { PictureBg } from "@/app/components/PictureBg";
import { ServiceIcon } from "@/app/components/ServiceIcon";
import { PricingTabId } from "@/app/types/pricing";
import { SectionProps } from "@/lib/header";
import { getPricingData, getPricingTabs } from "@/lib/pricing";
import Image from "next/image";
import React, { useState } from "react";

export const Pricing = ({ isClient, messages }: SectionProps) => {
  const [selectedTab, setSelectedTab] = useState<PricingTabId>("haircut");
  const tabs = getPricingTabs(messages);
  const pricingData = getPricingData(messages);
  return (
    <section className="center flex-col! w-full relative py-20 px-4 lg:px-8 z-5">
      <header className="center flex-col! max-w-3xl w-full  text-center card-inset center px-4 py-8 backdrop-blur-[0.2rem] bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-lg">
        <h2>{messages["pricing.heading"]}</h2>
        <p className="text-[var(--text-primary)]! font-semibold">
          {messages["pricing.intro"]}
        </p>
      </header>
      <div className="center flex-col! max-w-screen-xl w-full mt-10 px-4 lg:px-6 py-8 backdrop-blur-[0.8rem] bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-lg">
        <nav className="w-full" aria-label={messages["pricing.tabs.ariaLabel"]}>
          <ul
            role="tablist"
            className="w-full grid justify-between gap-2 grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
          >
            {tabs.map((tab) => {
              const isActive = selectedTab === tab.id;
              return (
                <li key={tab.id} role="presentation" className="w-full">
                  <button
                    role="tab"
                    aria-selected={selectedTab === tab.id}
                    aria-controls={`tabpanel-${tab.id}`}
                    id={`tab-${tab.id}`}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`center  flex-col! w-full border rounded-xl px-2.5 py-3 font-bold gap-1 uppercase ${
                      isActive
                        ? "shadow-2xl text-[var(--neutral-0)] bg-[var(--primary-6)]"
                        : "card-inset border-[var(--glass-border)] backdrop-blur-2xl"
                    }`}
                  >
                    <ServiceIcon url={tab.icon} hide={true} />

                    {tab.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
        <ul className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
          {pricingData[selectedTab].map((option) => (
            <li
              key={option.id}
              className="w-full relative between backdrop-blur-[1rem] bg-[var(--glass-bg)] border border-[var(--glass-border)] px-3.5 py-5 rounded-xl"
            >
              <div>
                <Image
                  src={option.image}
                  width={40}
                  height={40}
                  alt=""
                  className="w-14 h-14 lg:w-18 lg:h-18 object-cover rounded-full shadow-2xl border-2 border-[var(--glass-border)]"
                />
                <h3 className="font-bold text-[var(--text-primary)]">
                  {option.title}
                </h3>
                <p className="text-lg!">{option.description}</p>
              </div>
              <span className="text-[var(--primary-6)] text-3xl font-bold">
                {option.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <PictureBg
        desktopUrl="/images/pricing-desktop.webp"
        mobileUrl="/images/pricing-mobile.webp"
        alt={messages["hero.bg.alt"]}
      />
      <div className="overlay backdrop-blur-[0.1rem] backdrop-saturate-150 backdrop-brightness-90 -z-1"></div>
    </section>
  );
};
