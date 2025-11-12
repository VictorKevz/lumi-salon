export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  profile: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}
