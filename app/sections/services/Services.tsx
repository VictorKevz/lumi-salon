import { SectionProps } from "@/lib/header";
import { getServices } from "@/lib/services";
import Image from "next/image";
import React from "react";

export const Services = ({ messages, isClient }: SectionProps) => {
  const services = getServices(messages);
  if (!isClient) {
    return (
      <section
        id="services"
        className="center flex-col! w-full relative bg-[var(--primary-0)] py-20 px-4 lg:px-8 z-5"
      >
        <header className="max-w-4xl w-full center flex-col! text-center">
          <h2>{messages["services.title"]}</h2>
          <p>{messages["services.intro"]}</p>
        </header>
        <div className="max-w-screen-xl w-full grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 mt-20">
          {services.map((service) => (
            <article
              key={service.id}
              className="between flex-col! w-full h-full bg-[var(--primary-3)] rounded-lg"
            >
              <span
                className="center w-20 h-20 rounded-full bg-[var(--primary-6)] -mt-10 text-[var(--neutral-0)]"
                role="presentation"
              >
                <Image
                  src={service.icon}
                  width={48}
                  height={48}
                  alt=""
                  aria-hidden="true"
                  role="presentation"
                />
              </span>
              <header className=" mt-4 text-center px-3.5">
                <h3 className="font-semibold text-xl">{service.title}</h3>
                <p className="text-base! md:text-lg!">{service.description}</p>
              </header>
              <footer className="w-full min-h-40 relative mt-4">
                <Image
                  src={service.image}
                  height={160}
                  width={400}
                  alt={service.description}
                  className="w-full! object-cover object-center rounded-b-lg"
                />
                <div className="overlay"></div>
              </footer>
            </article>
          ))}
        </div>
      </section>
    );
  }
  return (
    <section
      id="services"
      className="center flex-col! w-full relative bg-[var(--primary-0)] py-20 px-4 lg:px-8 z-5"
    >
      <header className="max-w-4xl w-full center flex-col! text-center">
        <h2>{messages["services.title"]}</h2>
        <p>{messages["services.intro"]}</p>
      </header>
      <div className="max-w-screen-xl w-full grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 mt-20">
        {services.map((service) => (
          <article
            key={service.id}
            className="between flex-col! w-full h-full bg-[var(--primary-3)] rounded-lg"
          >
            <span
              className="center w-20 h-20 rounded-full bg-[var(--primary-6)] -mt-10 text-[var(--neutral-0)]"
              role="presentation"
            >
              <Image
                src={service.icon}
                width={48}
                height={48}
                alt=""
                aria-hidden="true"
                role="presentation"
              />
            </span>
            <header className=" mt-4 text-center px-3.5">
              <h3 className="font-semibold text-xl">{service.title}</h3>
              <p className="text-base! md:text-lg!">{service.description}</p>
            </header>
            <footer className="w-full min-h-40 relative mt-4">
              <Image
                src={service.image}
                height={160}
                width={400}
                alt={service.description}
                className="w-full! object-cover object-center rounded-b-lg"
              />
              <div className="overlay rounded-b-lg"></div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
};
