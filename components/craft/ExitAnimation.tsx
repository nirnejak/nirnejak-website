"use client"
import * as React from "react"

import { AnimatePresence, motion } from "framer-motion"

const ExitAnimation: React.FC = () => {
  const [isActive, setIsActive] = React.useState(false)

  return (
    <div className="flex flex-col items-center justify-center gap-6 text-white">
      <div className="grid h-64 w-96 place-content-center rounded-lg bg-black p-4 text-center text-sm transition-all ease-out">
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, translateY: 10 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: -10 }}
              className="rounded-full bg-zinc-900 px-7 py-3 text-sm text-zinc-50"
            >
              Element
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <button
        className="rounded bg-zinc-100 px-3 py-1.5 text-sm text-zinc-900"
        onClick={() => {
          setIsActive(!isActive)
        }}
      >
        Toggle Visible
      </button>
    </div>
  )
}

export default ExitAnimation
