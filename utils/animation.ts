import { AnimationGeneratorType } from "motion"

export const BASE_TRANSITION = {
  duration: 0.15,
  type: "spring" as AnimationGeneratorType,
  stiffness: 200,
  damping: 15,
  bounce: 0,
}

export const revealAnimationVariants = {
  hidden: { translateY: 10, opacity: 0, filter: "blur(10px)" },
  visible: { translateY: 0, opacity: 1, filter: "none" },
}
