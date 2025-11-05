"use client";
import React from "react";
import { motion } from "framer-motion";
import { GalleryGrid } from "@/app/components/GalleryGrid";
import { SectionProps } from "@/lib/header";
import { AnimationWrapper } from "@/app/components/AnimationWrapper";
import { getGalleryImages, getGalleryMessages } from "@/lib/gallery";

export const Gallery = ({ messages }: SectionProps) => {
  const galleryMessages = getGalleryMessages(messages);

  const images = getGalleryImages(galleryMessages.images);

  return (
    <section
      id="gallery"
      className="center flex-col! relative w-full overflow-hidden bg-[neutral-0] py-20"
    >
      <div className="w-full ">
        <AnimationWrapper
          as={motion.header}
          className="center flex-col! text-center w-full mb-12"
          animate={true}
          offset={30}
        >
          <h2>{galleryMessages.title}</h2>
          <p className="max-w-3xl">{galleryMessages.subtitle}</p>
        </AnimationWrapper>

        <GalleryGrid images={images} messages={galleryMessages} />
      </div>
    </section>
  );
};
