import { GalleryImage, GalleryMessages } from "@/app/types/gallery";

export const getGalleryImages = (
  imageTranslations: Record<string, string>
): GalleryImage[] => {
  const images: GalleryImage[] = [];

  for (let i = 1; i <= 8; i++) {
    images.push({
      id: i,
      src: `/images/gallery/${i}.webp`,
      alt: imageTranslations[String(i)] || `Gallery image ${i}`,
    });
  }

  return images;
};

export const getGalleryMessages = (
  messages: Record<string, string>
): GalleryMessages => {
  return {
    title: messages["gallery.title"],
    subtitle: messages["gallery.subtitle"],
    images: {
      "1": messages["gallery.images.1"],
      "2": messages["gallery.images.2"],
      "3": messages["gallery.images.3"],
      "4": messages["gallery.images.4"],
      "5": messages["gallery.images.5"],
      "6": messages["gallery.images.6"],
      "7": messages["gallery.images.7"],
      "8": messages["gallery.images.8"],
      "9": messages["gallery.images.9"],
    },
    lightbox: {
      close: messages["gallery.lightbox.close"],
      previous: messages["gallery.lightbox.previous"],
      next: messages["gallery.lightbox.next"],
      imageOf: messages["gallery.lightbox.imageOf"],
    },
  };
};
