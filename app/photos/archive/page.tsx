import * as React from "react"

import { type Metadata } from "next"

import { Camera } from "akar-icons"
import Link from "next/link"

import Container from "components/atoms/Container"
import PhotoGallery from "components/PhotoGallery"
import { archivedPhotos } from "utils/photos"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/photos/archive/",
  title: "Archive | Jitendra Nirnejak",
  description: "An archive of the Photos captured by Jitendra Nirnejak",
})

const PhotosArchivePage: React.FC = () => {
  return (
    <Container>
      <section className="flex min-h-screen items-start pt-32 md:pt-40">
        <div className="w-full">
          <div className="flex justify-between">
            <h1 className="text-5xl font-bold text-zinc-300">Archive</h1>
            <div>
              <Link
                href={"/photos/"}
                className="hover-bg flex items-center gap-1.5 px-4 py-2 text-sm text-zinc-500 hover:text-zinc-300"
              >
                <Camera size={22} />
                <span>All Photos</span>
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-1 pb-16 md:mt-16">
            <PhotoGallery images={archivedPhotos} />
          </div>
        </div>
      </section>
    </Container>
  )
}

export default PhotosArchivePage
