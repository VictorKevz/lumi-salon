"use client";
import React, { useState } from "react";
import { GalleryGridProps } from "../types/gallery";
import { GalleryItem } from "./GalleryItem";
import { Lightbox } from "./Lightbox";

export const GalleryGrid = ({ images, messages }: GalleryGridProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handleNavigate = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((image, index) => (
          <GalleryItem
            key={image.id}
            image={image}
            index={index}
            onClick={handleImageClick}
          />
        ))}
      </div>

      <Lightbox
        images={images}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigate}
        messages={messages.lightbox}
      />
    </>
  );
};
