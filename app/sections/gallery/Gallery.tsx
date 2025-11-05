"use client";
import React from "react";
import { motion } from "framer-motion";
import { GalleryGrid } from "@/app/components/GalleryGrid";
import { SectionProps } from "@/lib/header";
import { AnimationWrapper } from "@/app/components/AnimationWrapper";
import { getGalleryImages, getGalleryMessages } from "@/lib/gallery";

export const Gallery = ({ messages }: SectionProps) => {
  // Build messages object from translations
  const galleryMessages = getGalleryMessages(messages);

  // Get gallery images with translated alt texts
  const images = getGalleryImages(galleryMessages.images);

  return (
    <section
      id="gallery"
      className="relative w-full overflow-hidden bg-white py-20"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimationWrapper
          as={motion.header}
          className="mb-12 text-center max-w-4xl w-full"
          animate={true}
          offset={30}
        >
          <h2>{galleryMessages.title}</h2>
          <p>{galleryMessages.subtitle}</p>
        </AnimationWrapper>

        {/* Gallery Grid */}
        <GalleryGrid images={images} messages={galleryMessages} />
      </div>
    </section>
  );
};
