"use client"
import * as React from "react"

import { motion } from "framer-motion"

const GradualContentLoading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-white">
      <div className="flex min-h-64 w-96 flex-col gap-3.5 rounded-lg bg-black p-8">
        {COPY.map((copy, index) => (
          <motion.p
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              delay: 0.12 * index,
              type: "spring",
              bounce: 0,
            }}
            key={copy}
            className="font-serif text-base font-normal"
          >
            {copy}
          </motion.p>
        ))}
      </div>
    </div>
  )
}

const COPY = [
  `Framer Motion's my new obsession. It's like magic for web design. I've been playing around with page transitions, and now my site feels like a slick digital mag. So cool!`,
  `Interactive cards? Total game-changer. I threw in some subtle hover effects - just a smidge of scale and rotation. It's crazy how these tiny tweaks make everything feel alive.`,
  `Loading screens used to be a snooze fest. Not anymore! I cooked up this quirky little animated mascot. It hops around while content loads. People can't stop talking about it.`,
  `Micro-interactions are where I'm at right now. Bouncy buttons, smooth expanding menus - the works. These small touches make a huge difference. My UI game's never been stronger.`,
]

export default GradualContentLoading
