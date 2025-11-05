export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export interface GalleryMessages {
  title: string;
  subtitle: string;
  images: {
    [key: string]: string; // alt texts for each image
  };
  lightbox: {
    close: string;
    previous: string;
    next: string;
    imageOf: string; // "Image {current} of {total}"
  };
}

export interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
  messages: GalleryMessages["lightbox"];
}

export interface GalleryItemProps {
  image: GalleryImage;
  index: number;
  onClick: (index: number) => void;
}

export interface GalleryGridProps {
  images: GalleryImage[];
  messages: GalleryMessages;
}
