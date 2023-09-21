import * as React from "react"

import { Inbox } from "akar-icons"
import Link from "next/link"

import Container from "components/atoms/Container"
import PhotoGallery from "components/PhotoGallery"
import SEO from "components/SEO"

const images = [
  "/photos/IMG_2399.jpeg",
  "/photos/IMG_7027.jpeg",
  "/photos/IMG_0218.jpeg",
  "/photos/IMG_1075.jpeg",
  "/photos/IMG_0234.jpeg",
  "/photos/IMG_1130.jpeg",
  "/photos/IMG_1188.jpeg",
  "/photos/DJI_20220830_163224_064.jpg",
  "/photos/IMG_9280.jpeg",
  "/photos/IMG_7206.jpeg",
  "/photos/IMG_1385.jpeg",
  "/photos/IMG_2403.jpeg",
  "/photos/IMG_7197.jpeg",
  "/photos/IMG_0097.jpeg",
  "/photos/IMG_8448.jpeg",
  "/photos/DJI_20220901_175441_067.jpg",
  "/photos/IMG_8761.jpeg",
  "/photos/DJI_20220130_093513_544.jpg",
  "/photos/IMG_7284.jpeg",
  "/photos/IMG_8976.jpeg",
  "/photos/IMG_2028.jpeg",
  "/photos/IMG_9371.jpeg",
  "/photos/IMG_7292.jpeg",
  "/photos/IMG_9327.jpeg",
  "/photos/IMG_1469.jpeg",
  "/photos/IMG_9370.jpeg",
  "/photos/IMG_0794.jpeg",
  "/photos/IMG_7285.jpeg",
  "/photos/IMG_1392.jpeg",
  "/photos/IMG_7315.jpeg",
  "/photos/IMG_0311.jpeg",
  "/photos/IMG_9130.jpeg",
  "/photos/IMG_0223.jpeg",
  "/photos/IMG_2025.jpeg",
  "/photos/IMG_6965.jpeg",
  "/photos/IMG_1189.jpeg",
  "/photos/IMG_1776.jpeg",
  "/photos/DJI_20220901_182944_806.JPG",
  "/photos/IMG_6846.jpeg",
  "/photos/IMG_1395.jpeg",
  "/photos/IMG_6885.jpeg",
  "/photos/IMG_7282.jpeg",
  "/photos/IMG_1182.jpeg",
  "/photos/IMG_9048.jpeg",
  "/photos/IMG_2389.jpeg",
  "/photos/IMG_1376.jpeg",
  "/photos/IMG_0137.jpeg",
  "/photos/IMG_0072.jpeg",
  "/photos/IMG_9341.jpeg",
  "/photos/IMG_2022.jpeg",
  "/photos/IMG_6962.jpeg",
  "/photos/IMG_8993.jpeg",
  "/photos/IMG_0136.jpeg",
  "/photos/IMG_7309.jpeg",
  "/photos/IMG_2263.jpeg",
  "/photos/IMG_0415.jpeg",
  "/photos/IMG_9049.jpeg",
  "/photos/IMG_0395.jpeg",
  "/photos/IMG_7283.jpeg",
  "/photos/IMG_1455.jpeg",
  "/photos/IMG_1286.jpeg",
  "/photos/DJI_20220130_093712_764.JPG",
  "/photos/IMG_7313.jpeg",
  "/photos/IMG_8377.jpeg",
  "/photos/IMG_7201.jpeg",
  "/photos/IMG_7296.jpeg",
  "/photos/IMG_7042.jpeg",
  "/photos/IMG_1180.jpeg",
  "/photos/IMG_7054.jpeg",
  "/photos/IMG_8964.jpeg",
  "/photos/IMG_7280.jpeg",
  "/photos/IMG_1285.jpeg",
  "/photos/IMG_0355.jpeg",
  "/photos/IMG_7039.jpeg",
  "/photos/IMG_7019.jpeg",
  "/photos/IMG_8991.jpeg",
  "/photos/IMG_1525.jpeg",
  "/photos/IMG_8987.jpeg",
  "/photos/IMG_9380.jpeg",
  "/photos/IMG_7218.jpeg",
  "/photos/IMG_1374.jpeg",
  "/photos/IMG_8401.jpeg",
  "/photos/IMG_0318.jpeg",
  "/photos/IMG_8912.jpeg",
  "/photos/IMG_0288 2.jpeg",
  "/photos/DJI_20211230_180133_585.JPG",
  "/photos/IMG_9051.jpeg",
  "/photos/IMG_1461.jpeg",
  "/photos/IMG_7389.jpeg",
  "/photos/IMG_7274.jpeg",
  "/photos/DJI_20220130_102000_467.JPG",
  "/photos/IMG_9421.jpeg",
  "/photos/IMG_2312.jpeg",
  "/photos/IMG_8924.jpeg",
  "/photos/IMG_1036.jpeg",
  "/photos/IMG_2030.jpeg",
  "/photos/IMG_8411.jpeg",
  "/photos/IMG_8446.jpeg",
  "/photos/DJI_20220901_181309_583.JPG",
  "/photos/IMG_8295.jpeg",
  "/photos/IMG_7910.jpeg",
  "/photos/IMG_0282.jpeg",
  "/photos/IMG_9365.jpeg",
  "/photos/IMG_8173.jpeg",
  "/photos/2588D839-1C32-4D20-86A1-E1B215D274F8.JPG",
  "/photos/IMG_0353.jpeg",
  "/photos/IMG_1391.jpeg",
  "/photos/IMG_2102.jpeg",
  "/photos/IMG_7300.jpeg",
  "/photos/IMG_0095.jpeg",
  "/photos/IMG_7253.jpeg",
  "/photos/IMG_7068.jpeg",
  "/photos/IMG_0312.jpeg",
  "/photos/IMG_7205.jpeg",
  "/photos/IMG_7252.jpeg",
  "/photos/IMG_7317.jpeg",
  "/photos/IMG_9020.jpeg",
  "/photos/IMG_1390.jpeg",
  "/photos/IMG_9155.jpeg",
  "/photos/IMG_9431.jpeg",
  "/photos/IMG_2085.jpeg",
  "/photos/IMG_7638.jpeg",
  "/photos/IMG_7053.jpeg",
  "/photos/IMG_6984.jpeg",
  "/photos/IMG_7229.jpeg",
  "/photos/IMG_0295.jpeg",
  "/photos/IMG_6654.jpeg",
  "/photos/IMG_7157.jpeg",
  "/photos/IMG_2363.jpeg",
  "/photos/IMG_0077.jpeg",
  "/photos/IMG_0098.jpeg",
  "/photos/IMG_2271.jpeg",
  "/photos/IMG_8386.jpeg",
  "/photos/IMG_1563.jpeg",
  "/photos/IMG_1172.jpeg",
]

const PhotosPage: React.FC = () => {
  return (
    <Container>
      <SEO
        title="Photos | Jitendra Nirnejak"
        description="A gallery of Photos captured by Jitendra Nirnejak"
        path="/photos/"
      />
      <section className="flex min-h-screen items-start pt-32 md:pt-40">
        <div className="w-full">
          <div className="flex justify-between">
            <h1 className="text-5xl font-bold text-zinc-300">Photos</h1>
            <div>
              <Link
                href={"/photos/archive"}
                className="hover-bg z-0 flex items-center gap-1.5 px-4 py-2 text-sm text-zinc-400 hover:text-zinc-300"
              >
                <Inbox size={22} />
                <span>Archive</span>
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-1 pb-16 md:mt-16">
            <PhotoGallery images={images} />
          </div>
        </div>
      </section>
    </Container>
  )
}

export default PhotosPage
