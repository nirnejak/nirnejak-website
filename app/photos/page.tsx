import type { Metadata } from "next"
import type * as React from "react"
import PhotoGallery from "@/components/PhotoGallery"
import getMetadata from "@/utils/metadata"
import { photos } from "@/utils/photos"

export const metadata: Metadata = getMetadata({
  path: "/photos/",
  title: "Photos | Jitendra Nirnejak",
  description: "A gallery of Photos captured by Jitendra Nirnejak",
})

const PhotosPage: React.FC = () => {
  return (
    <main>
      <section className="container mt-32 md:mt-40">
        <h1 className="font-bold text-4xl text-zinc-300 tracking-tight md:text-5xl">
          Photos
        </h1>
      </section>

      <section className="mt-10 mb-16 px-3 md:mt-16">
        <PhotoGallery photos={photos} />
      </section>
    </main>
  )
}

export default PhotosPage
