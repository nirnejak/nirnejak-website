"use client"
import * as React from "react"

import { motion, AnimatePresence } from "framer-motion"

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
    <div className="flex flex-col items-center justify-center gap-6 text-white">
      <div className="grid h-64 w-44 scale-[2] place-content-center rounded-lg bg-white p-4 text-center text-sm transition-all ease-out md:h-64 md:w-96">
        <button
          onClick={() => {
            upvote()
          }}
          className={classNames(
            "group flex cursor-pointer flex-col items-center justify-center gap-0.5 rounded-lg border size-12 p-6 px-3 py-1 text-center text-[#0D0D0D] focus:outline-none hover:border-[#6FCF97] hover:shadow-[0px_0px_0px_4px_#00AA4526]",
            hasUpvoted ? "border-[#6FCF97]" : "border-gray-400"
          )}
        >
          <div className="grid place-content-center rounded-full p-[4.5px] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-[#E2F5EA] group-hover:text-[#00AA45]">
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
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill={hasUpvoted ? "#6FCF97" : "none"}
                  xmlns="http://www.w3.org/2000/svg"
                  className="block transition-transform duration-300 group-hover:-translate-y-0.5"
                >
                  <path
                    d="M13.125 7.65625L7.5 2.03125L1.875 7.65625H5V12.9688H10V7.65625H13.125Z"
                    stroke={hasUpvoted ? "#00AA45" : "currentColor"}
                    strokeWidth="1.25"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-px overflow-hidden font-mono text-[10px] leading-[14px]">
            <span className={hasUpvoted ? "text-[#00AA45]" : ""}>{first}</span>
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
                className={hasUpvoted ? "text-[#00AA45]" : ""}
              >
                {second}
              </motion.span>
            </AnimatePresence>
          </div>
        </button>
      </div>
    </div>
  )
}

export default UpvoteButton
