"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GalleryItemProps } from "../types/gallery";

export const GalleryItem: React.FC<GalleryItemProps> = ({
  image,
  index,
  onClick,
}) => {
  return (
    <motion.button
      onClick={() => onClick(index)}
      className="group relative aspect-square w-full overflow-hidden rounded-lg bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`View ${image.alt}`}
    >
      {/* Image */}
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />

      {/* Overlay with + icon */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/50 group-focus:bg-black/50">
        <div className="scale-0 transition-transform duration-300 group-hover:scale-100 group-focus:scale-100">
          <svg
            className="h-12 w-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      </div>
    </motion.button>
  );
};
