import * as React from "react"

import { XSmall } from "akar-icons"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

import classNames from "utils/classNames"

interface Props {
  images: string[]
}

const allTags = [
  "beach",
  "mountain",
  "sky",
  "street",
  "cafe",
  "food",
  "sunset",
  "concert",
  "snow",
  "train",
  "holy",
  "city",
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
      <AnimatePresence>
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
      </AnimatePresence>
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
        <AnimatePresence>
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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 25,
              }}
            >
              <Image
                src={imageUrl}
                alt={imageUrl}
                className="rounded-lg transition-transform hover:scale-105"
                width="270"
                height="480"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  )
}

export default PhotoGallery
