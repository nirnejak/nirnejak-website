"use client"
import * as React from "react"

import { XSmall } from "akar-icons"
import { motion } from "framer-motion"
import Image from "next/image"

import classNames from "utils/classNames"

interface Props {
  images: string[]
}

const allTags = [
  "street",
  "cafe",
  "food",
  "concert",
  "beach",
  "mountain",
  "sky",
  "sunset",
  "snow",
  "train",
  "holy",
  "city",
  "waterfall",
  "river",
  "lake",
]

const PhotoGallery: React.FC<Props> = ({ images }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const [currentImage, setCurrentImage] = React.useState("")
  const [selectedTags, setSelectedTags] = React.useState<string[]>([])

  const openModal = (imageUrl: string): void => {
    setCurrentImage(imageUrl)
    setIsModalVisible(true)
    document.body.style.overflowY = "hidden"
  }

  const closeModal = (): void => {
    setIsModalVisible(false)
    setCurrentImage("")
    document.body.style.overflowY = "unset"
  }

  const addRemoveTag = (tag: string): void => {
    if (selectedTags.includes(tag)) {
      setSelectedTags((currentTags) => currentTags.filter((t) => t !== tag))
    } else {
      setSelectedTags((currentTags) => [...currentTags, tag])
    }
  }

  return (
    <>
      {isModalVisible && (
        <div className="fixed left-0 top-0 z-20 grid h-screen w-full place-items-center bg-zinc-900/30 backdrop-blur-lg">
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
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentImage}
              alt={currentImage}
              className="h-[calc(100vh-50px)] rounded-2xl"
            />
          </motion.div>
        </div>
      )}
      <div className="-mx-5 mb-5 hidden flex-wrap gap-1">
        {allTags.map((tag, index) => (
          <button
            key={index}
            className={classNames(
              "z-0 flex items-center gap-1.5 px-3 py-1.5 text-xs text-zinc-400 hover:text-zinc-300",
              selectedTags.includes(tag) ? "bg-zinc-800 rounded-lg" : "hover-bg"
            )}
            onClick={() => {
              addRemoveTag(tag)
            }}
          >
            #{tag}
          </button>
        ))}
      </div>
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
            />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default PhotoGallery
