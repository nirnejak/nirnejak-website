"use client"
import * as React from "react"

import { XSmall } from "akar-icons"
import { motion } from "framer-motion"
import Image from "next/image"

import useModalWithContent from "hooks/useModalWithContent"

interface Props {
  images: string[]
}

const PhotoGallery: React.FC<Props> = ({ images }) => {
  const { isOpen, content, openModal, closeModal } = useModalWithContent()

  return (
    <>
      {isOpen && (
        <div className="fixed left-0 top-0 z-20 grid h-screen w-full place-items-center bg-zinc-50/30 backdrop-blur-lg dark:bg-zinc-900/30">
          <button
            className="fixed right-5 top-5 rounded-full bg-zinc-300 p-1.5 text-zinc-900 hover:bg-zinc-400 dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-500"
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
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
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
            initial={{ scale: 0.9, rotate: "5deg", opacity: 0 }}
            animate={{ scale: 1, rotate: "0deg", opacity: 1 }}
            transition={{
              delay: 0.1 * (index + 1),
              type: "spring",
              stiffness: 350,
              damping: 25,
              duration: 0.15,
            }}
          >
            <Image
              src={imageUrl}
              alt={imageUrl}
              className="rounded-2xl"
              width="360"
              height="640"
              priority={index < 5}
            />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default PhotoGallery
