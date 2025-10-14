import React from "react";

type PictureBgProps = {
  desktopUrl: string;
  mobileUrl: string;
  alt: string;
  className?: string;
};

export const PictureBg = ({
  desktopUrl,
  mobileUrl,
  alt,
  className = "absolute top-0 left-0 w-full h-full inset-0 -z-2 pointer-events-none",
}: PictureBgProps) => (
  <picture className={className}>
    <source media="(min-width:1024px)" srcSet={desktopUrl} />
    <img src={mobileUrl} alt={alt} className="w-full h-full object-cover" />
  </picture>
);
