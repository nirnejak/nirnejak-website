"use client"
import * as React from "react"

import { motion } from "framer-motion"

import classNames from "utils/classNames"

const images = [
  "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1553342385-111fd6bc6ab3?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1534445867742-43195f401b6c?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

const rotationClasses = ["-rotate-3", "rotate-6", "rotate-9", "rotate-12"]

const AirbnbCards: React.FC = () => {
  return (
    <div className="relative mx-auto flex flex-col items-center justify-center">
      <div className="relative h-52 w-[340px] md:w-[500px]">
        {images.map((image, index) => (
          <motion.div
            initial={{ scale: 0.02, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 0.2,
              easing: "ease-out",
              delay: 0.05 * index,
              stiffness: 65,
              damping: 12,
              mass: 1,
            }}
            key={index}
            className="absolute"
            style={{ left: `${index * 20}%` }}
          >
            <div
              className={classNames(
                rotationClasses[index],
                "size-32 md:size-52 rounded-3xl bg-white p-2 md:p-3 shadow-xl"
              )}
            >
              <div
                className="size-full rounded-2xl bg-cover bg-no-repeat"
                style={{ backgroundImage: `url("${image}")` }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AirbnbCards
