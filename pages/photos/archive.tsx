import * as React from "react"

import { Camera } from "akar-icons"
import Link from "next/link"

import Container from "components/atoms/Container"
import PhotoGallery from "components/PhotoGallery"
import SEO from "components/SEO"

const images = [
  "/photos/archive/DJI_20211230_180216_620.JPG",
  "/photos/archive/IMG_0076.jpeg",
  "/photos/archive/IMG_7178.jpeg",
  "/photos/archive/IMG_7008.jpeg",
  "/photos/archive/IMG_7254.jpeg",
  "/photos/archive/DJI_20220611_124058_027.JPG",
  "/photos/archive/IMG_1506.JPG",
  "/photos/archive/IMG_2258.JPG",
  "/photos/archive/IMG_1397.JPG",
  "/photos/archive/IMG_7231.JPG",
  "/photos/archive/IMG_7247.JPG",
  "/photos/archive/IMG_7248.JPG",
  "/photos/archive/IMG_7254.JPG",
  "/photos/archive/IMG_7197.JPG",
]

const ArchivePage: React.FC = () => {
  return (
    <Container>
      <SEO
        title="Archive | Jitendra Nirnejak"
        description="An archive of the Photos captured by Jitendra Nirnejak"
        path="/photos/archive/"
      />
      <section className="flex min-h-screen items-start pt-32 md:pt-40">
        <div className="w-full">
          <div className="flex justify-between">
            <h1 className="text-5xl font-bold text-zinc-300">Archive</h1>
            <div>
              <Link
                href={"/photos/"}
                className="hover-bg flex items-center gap-1.5 px-4 py-2 text-sm text-zinc-400 hover:text-zinc-300"
              >
                <Camera size={22} />
                <span>All Photos</span>
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

export default ArchivePage
