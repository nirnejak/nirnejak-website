"use client"

import * as React from "react"

import { XSmall } from "akar-icons"
import { motion } from "framer-motion"
import Image, { type StaticImageData } from "next/image"

import useClickOutside from "@/hooks/useClickOutside"
import useModalWithContent from "@/hooks/useModalWithContent"

interface Props {
  photos: StaticImageData[]
}

const PhotoGallery: React.FC<Props> = ({ photos }) => {
  const { isOpen, content, openModal, closeModal } = useModalWithContent()

  const ref = useClickOutside(closeModal)

  const [isLoaded, setIsLoaded] = React.useState(false)

  React.useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="mb-16 mt-10 flex min-h-screen items-start px-3 md:mt-16">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            role="button"
            tabIndex={0}
            onClick={() => {
              openModal(photo)
            }}
            onKeyUp={(e) => {
              e.key === "Enter" && openModal(photo)
            }}
            initial={{ opacity: 0, scale: 0.02, rotate: 15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.16, rotate: 0, zIndex: 5 }}
            transition={{
              type: "spring",
              stiffness: isLoaded ? 530 : 100,
              damping: isLoaded ? 20 : 10,
              mass: 0.7,

              delay: isLoaded ? 0 : 0.05 * index,
            }}
            className="relative overflow-hidden rounded-3xl after:absolute after:inset-0 after:rounded-3xl after:border-8 after:border-white/30 hover:shadow-2xl"
          >
            <Image
              src={photo}
              alt={photo.src}
              placeholder="blur"
              width="360"
              height="640"
              priority={index < 11}
            />
          </motion.div>
        ))}
      </div>
      {isOpen && content !== null && (
        <div className="fixed left-0 top-0 z-30 grid h-screen w-full place-items-center bg-zinc-900/30 backdrop-blur-lg">
          <button
            className="fixed right-5 top-5 rounded-full bg-zinc-700 p-1.5 text-zinc-300 hover:bg-zinc-500"
            onClick={() => {
              closeModal()
            }}
          >
            <XSmall />
          </button>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "none" }}
            exit={{ opacity: 0 }}
            className="flex p-5 md:h-[calc(100vh-50px)]"
            ref={ref}
          >
            <Image
              src={content}
              alt={content.src}
              placeholder="blur"
              className="w-min rounded-2xl"
            />
          </motion.div>
        </div>
      )}
    </section>
  )
}

export default PhotoGallery
