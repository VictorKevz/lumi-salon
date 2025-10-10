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

// export const FadeInVariants = (): Variants => ({
//   hidden: {
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       type: "tween",
//       ease: "easeIn",
//     },
//   },
// });
