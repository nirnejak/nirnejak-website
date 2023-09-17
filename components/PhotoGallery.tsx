import * as React from "react"

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

interface Props {
  images: string[]
}

const PhotoGallery: React.FC<Props> = ({ images }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const [currentImage, setCurrentImage] = React.useState("")

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

  return (
    <>
      <AnimatePresence>
        {isModalVisible && (
          <div
            className="fixed left-0 top-0 z-20 grid h-screen w-full place-items-center bg-zinc-900/30 backdrop-blur-lg"
            onClick={() => {
              closeModal()
            }}
            role="button"
            tabIndex={0}
            onKeyUp={(e) => {
              e.key === "Enter" && closeModal()
            }}
          >
            <motion.div
              initial={{ opacity: 0, translateY: 15 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0 }}
              className="w-[450px]"
            >
              <img
                src={currentImage}
                alt={currentImage}
                className="rounded-2xl"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            onClick={() => {
              openModal(imageUrl)
            }}
            role="button"
            tabIndex={0}
            onKeyUp={(e) => {
              e.key === "Enter" && openModal(imageUrl)
            }}
          >
            <Image
              src={`/photos/${imageUrl}`}
              alt={imageUrl}
              className="rounded-lg"
              width="270"
              height="480"
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default PhotoGallery
