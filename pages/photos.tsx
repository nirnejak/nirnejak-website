import * as React from "react"

import { Inbox } from "akar-icons"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import Container from "components/atoms/Container"
import SEO from "components/SEO"

const images = [
  "IMG_2399.jpeg",
  "IMG_7027.jpeg",
  "IMG_0218.jpeg",
  "IMG_1075.jpeg",
  "IMG_0234.jpeg",
  "IMG_1130.jpeg",
  "IMG_1188.jpeg",
  "DJI_20220830_163224_064.jpg",
  "IMG_9280.jpeg",
  "IMG_7206.jpeg",
  "IMG_1385.jpeg",
  "IMG_2403.jpeg",
  "IMG_7178.jpeg",
  "IMG_7197.jpeg",
  "DJI_20211230_180216_620.JPG",
  "IMG_0097.jpeg",
  "IMG_7247.jpeg",
  "IMG_8448.jpeg",
  "DJI_20220901_175441_067.jpg",
  "IMG_8761.jpeg",
  "DJI_20220130_093513_544.jpg",
  "IMG_7284.jpeg",
  "IMG_8976.jpeg",
  "IMG_2028.jpeg",
  "IMG_9371.jpeg",
  "IMG_7292.jpeg",
  "IMG_9327.jpeg",
  "IMG_1469.jpeg",
  "IMG_9370.jpeg",
  "IMG_0794.jpeg",
  "IMG_7285.jpeg",
  "IMG_1392.jpeg",
  "IMG_7315.jpeg",
  "IMG_0311.jpeg",
  "IMG_9130.jpeg",
  "IMG_0223.jpeg",
  "IMG_2025.jpeg",
  "IMG_6965.jpeg",
  "IMG_7231.jpeg",
  "IMG_1189.jpeg",
  "IMG_1776.jpeg",
  "DJI_20220901_182944_806.JPG",
  "IMG_6846.jpeg",
  "IMG_1395.jpeg",
  "IMG_6885.jpeg",
  "IMG_7282.jpeg",
  "IMG_1182.jpeg",
  "IMG_9048.jpeg",
  "IMG_2389.jpeg",
  "IMG_1376.jpeg",
  "IMG_0137.jpeg",
  "IMG_0072.jpeg",
  "IMG_9341.jpeg",
  "IMG_2258.jpeg",
  "IMG_2022.jpeg",
  "IMG_6962.jpeg",
  "IMG_8993.jpeg",
  "IMG_0136.jpeg",
  "IMG_7309.jpeg",
  "IMG_2263.jpeg",
  "IMG_0415.jpeg",
  "IMG_9049.jpeg",
  "IMG_0395.jpeg",
  "IMG_7283.jpeg",
  "IMG_1455.jpeg",
  "IMG_1286.jpeg",
  "DJI_20220130_093712_764.JPG",
  "IMG_7313.jpeg",
  "IMG_1506.jpeg",
  "IMG_8377.jpeg",
  "IMG_7201.jpeg",
  "IMG_7296.jpeg",
  "IMG_7042.jpeg",
  "IMG_1180.jpeg",
  "IMG_7054.jpeg",
  "IMG_8964.jpeg",
  "IMG_7280.jpeg",
  "IMG_1285.jpeg",
  "IMG_0355.jpeg",
  "IMG_1397.jpeg",
  "IMG_7039.jpeg",
  "IMG_9020 2.jpeg",
  "IMG_7019.jpeg",
  "IMG_8991.jpeg",
  "IMG_1525.jpeg",
  "IMG_8987.jpeg",
  "IMG_9380.jpeg",
  "IMG_7218.jpeg",
  "IMG_1374.jpeg",
  "IMG_8401.jpeg",
  "IMG_0318.jpeg",
  "IMG_8912.jpeg",
  "IMG_0288 2.jpeg",
  "IMG_9155.jpeg",
  "DJI_20211230_180133_585.JPG",
  "IMG_9051.jpeg",
  "IMG_1461.jpeg",
  "IMG_7389.jpeg",
  "IMG_8928.jpeg",
  "IMG_7274.jpeg",
  "DJI_20220130_102000_467.JPG",
  "IMG_9421.jpeg",
  "IMG_7254.jpeg",
  "IMG_0354.jpeg",
  "IMG_2312.jpeg",
  "IMG_8924.jpeg",
  "IMG_1036.jpeg",
  "IMG_2030.jpeg",
  "IMG_8411.jpeg",
  "IMG_8446.jpeg",
  "IMG_0076.jpeg",
  "DJI_20220901_181309_583.JPG",
  "IMG_8295.jpeg",
  "IMG_7910.jpeg",
  "IMG_0282.jpeg",
  "IMG_9365.jpeg",
  "IMG_8173.jpeg",
  "2588D839-1C32-4D20-86A1-E1B215D274F8.JPG",
  "IMG_0353.jpeg",
  "IMG_1391.jpeg",
  "IMG_2102.jpeg",
  "IMG_7300.jpeg",
  "IMG_0095.jpeg",
  "IMG_7253.jpeg",
  "IMG_7068.jpeg",
  "IMG_0312.jpeg",
  "IMG_7205.jpeg",
  "IMG_7252.jpeg",
  "IMG_7317.jpeg",
  "IMG_9020.jpeg",
  "IMG_1390.jpeg",
  "DJI_20220611_124058_027.JPG",
  "IMG_9155 2.jpeg",
  "IMG_9431.jpeg",
  "IMG_2085.jpeg",
  "IMG_7638.jpeg",
  "IMG_7053.jpeg",
  "IMG_6984.jpeg",
  "IMG_7229.jpeg",
  "IMG_0295.jpeg",
  "IMG_6654.jpeg",
  "IMG_7157.jpeg",
  "IMG_2363.jpeg",
  "IMG_0077.jpeg",
  "IMG_7248.jpeg",
  "IMG_0098.jpeg",
  "IMG_2271.jpeg",
  "IMG_8386.jpeg",
  "IMG_1563.jpeg",
  "IMG_7008.jpeg",
  "IMG_1172.jpeg",
]

const PhotosPage: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const [currentImage, setCurrentImage] = React.useState("")

  const openModal = (imageUrl: string): void => {
    setCurrentImage(imageUrl)
    setIsModalVisible(true)
  }
  const closeModal = (): void => {
    setIsModalVisible(false)
    setCurrentImage("")
  }

  return (
    <Container>
      <SEO
        title="Photos | Jitendra Nirnejak"
        description="A gallery of Photos captured by Jitendra Nirnejak"
        path="/photos/"
      />
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-[500px]"
            >
              <img src={currentImage} alt={currentImage} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <section className="flex min-h-screen items-start pt-32 md:pt-40">
        <div className="w-full">
          <div className="flex justify-between">
            <h1 className="text-5xl font-bold text-zinc-300">Photos</h1>
            <div>
              <Link
                href={"/photos/archive"}
                className="hover-bg z-0 flex items-center gap-1.5 px-4 py-2 text-sm text-zinc-400 hover:text-zinc-300
              "
              >
                <Inbox size={22} />
                <span>Archive</span>
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-1 pb-16 md:mt-16">
            <div className="grid grid-cols-3 gap-5">
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
          </div>
        </div>
      </section>
    </Container>
  )
}

export default PhotosPage
