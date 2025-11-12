import { Messages } from "./header";
import { Testimonial } from "@/app/types/testimonials";

export function getTestimonials(messages: Messages): Testimonial[] {
  const testimonials: Testimonial[] = [];

  for (let i = 1; i <= 6; i++) {
    testimonials.push({
      id: i,
      name: messages[`testimonials.${i}.name`],
      role: messages[`testimonials.${i}.role`],
      quote: messages[`testimonials.${i}.quote`],
      profile: `/images/profiles/${i}.webp`,
    });
  }

  return testimonials;
}
