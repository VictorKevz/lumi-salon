import { Variants } from "framer-motion";
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
  const hiddenState: any = { opacity: 0 };
  const visibleState: any = {
    opacity: 1,
    transition: { duration: 0.4, type: "tween", delay },
  };

  if (yOffset !== 0) {
    hiddenState.y = yOffset;
    visibleState.y = 0;
  }

  if (xOffset !== 0) {
    hiddenState.x = xOffset;
    visibleState.x = 0;
  }

  return {
    hidden: hiddenState,
    visible: visibleState,
  };
};
