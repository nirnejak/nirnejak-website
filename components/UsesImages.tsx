"use client"
import * as React from "react"

import * as motion from "framer-motion/client"
import Image from "next/image"

import MysticallyAwkward from "assets/uses/IMG_0849.jpeg"
import GoodVibesGreatCoffee from "assets/uses/IMG_2056.jpeg"
import ChurchStreet from "assets/uses/IMG_2249.jpeg"
import TopDownBnW from "assets/uses/IMG_2448.jpeg"
import Bunny from "assets/uses/IMG_4289.jpeg"
import BlueTokai from "assets/uses/IMG_4772.jpeg"
import GirlDrawing from "assets/uses/IMG_4890.jpeg"
import TacoXbox from "assets/uses/IMG_8559.jpeg"

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
  const [isLoaded, setIsLoaded] = React.useState(false)

  React.useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative -ml-4 mt-10 grid w-[calc(100vw+32px)] grid-cols-4 md:-ml-5 md:mt-20 md:grid-cols-8">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={index > 3 ? "-mt-4 md:mt-0" : ""}
          initial={{ opacity: 0, scale: 0.02 }}
          animate={{ opacity: 1, scale: 1, rotate: rotation[index % 3] }}
          whileHover={{ scale: 1.3, rotate: 0, zIndex: 5 }}
          transition={{
            type: "spring",
            stiffness: isLoaded ? 530 : 100,
            damping: isLoaded ? 20 : 10,
            mass: 0.7,
            duration: 0.1,

            delay: isLoaded ? 0 : 0.05 * index,
          }}
        >
          <div
            className="relative w-[calc(100%+10px)] overflow-hidden rounded-3xl shadow-xl after:absolute after:inset-0 after:rounded-3xl
            after:border-[6px] after:border-white/30 hover:shadow-2xl md:w-[calc(100%+20px)]
            md:after:border-8"
          >
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
