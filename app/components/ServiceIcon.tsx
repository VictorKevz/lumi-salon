"use client";
import Image from "next/image";
import React from "react";
type ServiceIconProps = {
  url: string;
  hide?: boolean;
};
export const ServiceIcon = ({ url, hide = true }: ServiceIconProps) => {
  return (
    <span
      className={`${
        hide ? "hidden! md:flex! items-center justify-center" : "center"
      } w-20 h-20 rounded-full shadow-sm bg-[var(--primary-4)]`}
      role="presentation"
    >
      <Image
        src={url}
        width={48}
        height={48}
        alt=""
        aria-hidden="true"
        role="presentation"
      />
    </span>
  );
};
