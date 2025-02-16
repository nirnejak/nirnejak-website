"use client"
import * as React from "react"

import { motion, AnimatePresence } from "motion/react"

import classNames from "@/utils/classNames"

const UpvoteButton: React.FC = () => {
  const [clickCount, setClickCount] = React.useState(0) // to be used as key prop, if I use count and user clicks the button too fast it add the elements 2 times to the dom
  const [count, setCount] = React.useState(20)
  const [hasUpvoted, setHasUpvoted] = React.useState(false)

  const upvote = (): void => {
    if (hasUpvoted) {
      setCount(count - 1)
    } else {
      setCount(count + 1)
    }
    setHasUpvoted(!hasUpvoted)
    setClickCount(clickCount + 1)
  }

  const variants = {
    initial: { opacity: 0, y: hasUpvoted ? -5 : 5 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: hasUpvoted ? -5 : 5 },
  }

  const ArrowVariants = {
    initial: { opacity: 0, y: hasUpvoted ? 15 : -15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: hasUpvoted ? 15 : -15 },
  }

  const [first, second] = React.useMemo(() => {
    return [Math.floor(count / 10), count % 10]
  }, [count])

  return (
    <div className="grid h-96 w-full place-content-center rounded-lg bg-zinc-800 p-4 text-center text-sm">
      <button
        onClick={() => {
          upvote()
        }}
        className={classNames(
          "group cursor-pointer flex flex-col items-center justify-center gap-2 rounded-lg border-2 px-5 py-3 text-center text-zinc-200 focus:outline-hidden hover:border-zinc-200/20 hover:shadow-[0px_0px_0px_4px_#e4e4e726]",
          hasUpvoted ? "border-zinc-200" : "border-zinc-500"
        )}
      >
        <div className="grid place-content-center rounded-full p-[4.5px] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-zinc-200/30 group-hover:text-zinc-200">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              transition={{
                type: "spring",
                duration: 0.3,
                bounce: 0,
                mass: 1,
                stiffness: 300,
                damping: 20,
              }}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={ArrowVariants}
              key={clickCount}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 15 15"
                fill={hasUpvoted ? "#e4e4e7" : "none"}
                xmlns="http://www.w3.org/2000/svg"
                className="block transition-transform duration-300 group-hover:-translate-y-0.5"
              >
                <path
                  d="M13.125 7.65625L7.5 2.03125L1.875 7.65625H5V12.9688H10V7.65625H13.125Z"
                  stroke={hasUpvoted ? "#e4e4e7" : "currentColor"}
                  strokeWidth="1.25"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-px overflow-hidden font-mono text-xl leading-none">
          <span className={hasUpvoted ? "text-zinc-200" : "text-zinc-500"}>
            {first}
          </span>
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              transition={{
                type: "spring",
                duration: 0.3,
                bounce: 0,
                mass: 1,
                stiffness: 300,
                damping: 20,
              }}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              key={clickCount}
              className={hasUpvoted ? "text-zinc-200" : "text-zinc-500"}
            >
              {second}
            </motion.span>
          </AnimatePresence>
        </div>
      </button>
    </div>
  )
}

export default UpvoteButton
