"use client"

import { motion } from "motion/react"
import Image from "next/image"
import * as React from "react"

import MysticallyAwkward from "@/assets/uses/IMG_0849.jpeg"
import GoodVibesGreatCoffee from "@/assets/uses/IMG_2056.jpeg"
import ChurchStreet from "@/assets/uses/IMG_2249.jpeg"
import TopDownBnW from "@/assets/uses/IMG_2448.jpeg"
import Bunny from "@/assets/uses/IMG_4289.jpeg"
import BlueTokai from "@/assets/uses/IMG_4772.jpeg"
import GirlDrawing from "@/assets/uses/IMG_4890.jpeg"
import TacoXbox from "@/assets/uses/IMG_8559.jpeg"

const rotation = [-3, 3, -6, 6]

const images = [
  MysticallyAwkward,
  TopDownBnW,
  GirlDrawing,
  Bunny,
  BlueTokai,
  TacoXbox,
  GoodVibesGreatCoffee,
  ChurchStreet,
]

const UsesImages: React.FC = () => {
  // The entrance plays on a slow, staggered spring; every gesture after it
  // uses a snappier one. Motion captures a transition when it creates the
  // animation, so flipping this once the entrance settles only ever affects
  // the hover animations that come later.
  const [hasEntered, setHasEntered] = React.useState(false)

  return (
    <section className="relative mt-10 -ml-4 grid w-[calc(100vw+32px)] grid-cols-4 md:mt-20 md:-ml-5 md:grid-cols-8">
      {images.map((image, index) => (
        <motion.div
          key={image.src}
          className={index > 3 ? `-mt-4 md:mt-0` : ""}
          initial={{ opacity: 0, scale: 0.02 }}
          animate={{ opacity: 1, scale: 1, rotate: rotation[index % 3] }}
          whileHover={{ scale: 1.1, rotate: 0, zIndex: 5 }}
          transition={{
            type: "spring",
            stiffness: hasEntered ? 530 : 100,
            damping: hasEntered ? 20 : 10,
            mass: 0.7,
            duration: 0.1,

            delay: hasEntered ? 0 : 0.05 * index,
          }}
          onAnimationComplete={() => {
            setHasEntered(true)
          }}
        >
          <div className="after:border-frame relative w-[calc(100%+10px)] overflow-hidden rounded-3xl shadow-xl after:absolute after:inset-0 after:rounded-3xl after:border-[6px] hover:shadow-2xl md:w-[calc(100%+20px)] md:after:border-8">
            <Image
              width={400}
              src={image}
              alt="Image"
              className="rounded-2xl"
              placeholder="blur"
              quality={100}
              priority
            />
          </div>
        </motion.div>
      ))}
    </section>
  )
}

export default UsesImages
