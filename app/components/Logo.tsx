import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href={"/"} className="center gap-1">
      <Image
        src={"/images/logo.svg"}
        height={45}
        width={45}
        alt="Lumi Salon Company logo"
        className="w-8! h-8! sm:w-11.5! sm:h-11.5!"
      />
      <span className="font-semibold text-xl" role="heading" aria-level={1}>
        Lumi
      </span>
    </Link>
  );
};
