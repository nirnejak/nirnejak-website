import * as React from "react"

import { type Metadata } from "next"

import * as motion from "framer-motion/client"
import Image from "next/image"

import Photo1 from "assets/uses/IMG_0849.jpeg"
import Photo2 from "assets/uses/IMG_2056.jpeg"
import Photo3 from "assets/uses/IMG_2249.jpeg"
import Photo5 from "assets/uses/IMG_2448.jpeg"
import Photo6 from "assets/uses/IMG_4289.jpeg"
import Photo7 from "assets/uses/IMG_4772.jpeg"
import Photo11 from "assets/uses/IMG_8559.jpeg"
import generateMetadata from "utils/seo"

const rotation = [-3, 3, -6, 6]

const images = [Photo1, Photo5, Photo6, Photo7, Photo11, Photo2, Photo3]

export const metadata: Metadata = generateMetadata({
  path: "/uses/",
  title: "Uses | Jitendra Nirnejak",
  description: "Gears, tools and technologies used by Jitendra Nirnejak",
})

const UsesPage: React.FC = () => {
  return (
    <main>
      <section className="container mt-32 flex items-start md:mt-40">
        <h1 className="text-4xl font-bold tracking-tighter text-zinc-300 md:text-5xl">
          Uses
        </h1>
      </section>
      <section className="relative -mx-4 mt-10 grid w-[calc(100vw+32px)] grid-cols-7 md:mt-20">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.02 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: rotation[index % 3],

              transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                mass: 1,
                duration: 0.1,
                delay: 0.05 * index,
              },
            }}
            whileHover={{
              rotate: 0,
              zIndex: 5,
              translateY: -30,

              transition: {
                type: "spring",
                stiffness: 530,
                damping: 20,
                mass: 1,
                duration: 0.1,
              },
            }}
          >
            <div className="w-32 rounded-3xl bg-white p-2 shadow-xl md:w-60 md:p-3">
              <Image
                width={400}
                src={image}
                alt="Image"
                className="rounded-2xl"
                priority
              />
            </div>
          </motion.div>
        ))}
      </section>
      <section className="container mb-16 mt-10 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2">
        <div>
          <p className="text-sm text-zinc-400">Computer</p>
          <p className="mt-1.5 text-lg font-semibold text-zinc-300">
            iPad Pro 11, MacBook Air & <br />
            Apple Studio Display
          </p>
        </div>
        <div>
          <p className="text-sm text-zinc-400">Camera & Gear</p>
          <p className="mt-1.5 text-lg font-semibold text-zinc-300">
            iPhone 14 Pro, Insta 360 x3 & <br />
            DJI Osmo Mobile 4 SE
          </p>
        </div>
        <div>
          <p className="text-sm text-zinc-400">Design Tools</p>
          <p className="mt-1.5 text-lg font-semibold text-zinc-300">
            Figma, Rive & Procreate
          </p>
        </div>
        <div>
          <p className="text-sm text-zinc-400">Languages & Frameworks</p>
          <p className="mt-1.5 text-lg font-semibold text-zinc-300">
            TypeScript, React & Node.js
          </p>
        </div>
      </section>
    </main>
  )
}

export default UsesPage
