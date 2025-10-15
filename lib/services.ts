import { Messages } from "./header";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export function getServices(messages: Messages): Service[] {
  return [
    {
      id: "haircut",
      title: messages["services.haircut.title"],
      description: messages["services.haircut.description"],
      icon: "/icons/haircut.png",
      image: "/images/services/haircut.webp",
    },
    {
      id: "coloring",
      title: messages["services.coloring.title"],
      description: messages["services.coloring.description"],
      icon: "/icons/coloring.png",
      image: "/images/services/coloring.webp",
    },
    {
      id: "styling",
      title: messages["services.styling.title"],
      description: messages["services.styling.description"],
      icon: "/icons/styling.png",
      image: "/images/services/styling.webp",
    },
    {
      id: "treatment",
      title: messages["services.treatment.title"],
      description: messages["services.treatment.description"],
      icon: "/icons/treatment.png",
      image: "/images/services/treatment.webp",
    },
    {
      id: "extensions",
      title: messages["services.extensions.title"],
      description: messages["services.extensions.description"],
      icon: "/icons/extensions.png",
      image: "/images/services/extensions.webp",
    },
    {
      id: "grooming",
      title: messages["services.grooming.title"],
      description: messages["services.grooming.description"],
      icon: "/icons/grooming.png",
      image: "/images/services/grooming.webp",
    },
  ];
}
