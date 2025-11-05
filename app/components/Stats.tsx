import { AboutStat } from "@/lib/about";
import React from "react";
import CountUp from "react-countup";
interface StatsProps {
  data: AboutStat[];
}
export const Stats = ({ data }: StatsProps) => {
  return (
    <dl className="between flex-col! md:flex-row! w-full bg-[var(--neutral-6)] grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 px-5">
      {data.map((stat) => (
        <div key={stat.id} className="center flex-col">
          <dt className="text-xs font-bold text-[var(--primary-1)] uppercase opacity-90">
            {stat.label}
          </dt>
          <dd
            className="text-4xl text-[var(--text-on-primary)] md:text-6xl font-extrabold mt-2 opacity-95"
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
  );
};
