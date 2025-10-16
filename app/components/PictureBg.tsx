import React from "react";
import Image from "next/image";

type PictureBgProps = {
  desktopUrl: string;
  mobileUrl: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export const PictureBg = ({
  desktopUrl,
  mobileUrl,
  alt,
  priority = false,
  className = "absolute top-0 left-0 w-full h-full inset-0 -z-2 pointer-events-none",
}: PictureBgProps) => (
  <picture className={className}>
    <source media="(min-width:1024px)" srcSet={desktopUrl} />
    <Image
      src={mobileUrl}
      width={1080}
      height={1920}
      alt={alt}
      priority={priority}
      quality={85}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
      sizes="100vw"
      className="w-full! h-full! object-cover"
    />
  </picture>
);
