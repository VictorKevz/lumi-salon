import { Target, Transition, Variants } from "framer-motion";

export const SlideInVariants = (
  xOffset: string = "100%",
  delay: number = 0
): Variants => ({
  hidden: {
    opacity: 0,
    x: xOffset,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
      delay,
    },
  },
  exit: {
    opacity: 0,
    x: xOffset,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
});

export const FadeInVariants = (
  yOffset: number = 0,
  delay: number = 0,
  xOffset: number = 0
): Variants => {
  return {
    hidden: {
      opacity: 0,
      ...(yOffset !== 0 && { y: yOffset }),
      ...(xOffset !== 0 && { x: xOffset }),
    },
    visible: {
      opacity: 1,
      ...(yOffset !== 0 && { y: 0 }),
      ...(xOffset !== 0 && { x: 0 }),
      transition: { duration: 0.4, type: "tween", delay },
    },
  };
};
