"use client"
import * as React from "react"

import { XSmall } from "akar-icons"
import { motion } from "framer-motion"
import Image from "next/image"

import useClickOutside from "hooks/useClickOutside"
import useModalWithContent from "hooks/useModalWithContent"

interface Props {
  images: string[]
}

const PhotoGallery: React.FC<Props> = ({ images }) => {
  const { isOpen, content, openModal, closeModal } = useModalWithContent()

  const ref = useClickOutside(closeModal)

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {images.map((imageUrl, index) => (
          <motion.div
            key={index}
            role="button"
            tabIndex={0}
            onClick={() => {
              openModal(imageUrl)
            }}
            onKeyUp={(e) => {
              e.key === "Enter" && openModal(imageUrl)
            }}
            initial={{ opacity: 0, scale: 0.02, rotate: 5 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,

              transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.1,
                delay: 0.05 * (index + 1),
              },
            }}
            className="rounded-3xl bg-white p-2 md:p-3"
          >
            <Image
              src={imageUrl}
              alt={imageUrl}
              className="rounded-2xl"
              width="360"
              height="640"
              priority={index < 11}
            />
          </motion.div>
        ))}
      </div>
      {isOpen && (
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
            initial={{ opacity: 0, translateY: 15 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0 }}
            className="flex p-5"
            ref={ref}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={content}
              alt={content}
              className="h-[calc(100vh-50px)] rounded-2xl"
            />
          </motion.div>
        </div>
      )}
    </>
  )
}

export default PhotoGallery
