import * as React from "react"

import type { Metadata } from "next"

import PhotoGallery from "@/components/PhotoGallery"
import { photos } from "@/utils/photos"
import getMetadata from "@/utils/seo"

export const metadata: Metadata = getMetadata({
  path: "/photos/",
  title: "Photos | Jitendra Nirnejak",
  description: "A gallery of Photos captured by Jitendra Nirnejak",
})

const PhotosPage: React.FC = () => {
  return (
    <main>
      <section className="container mt-32 md:mt-40">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-300 md:text-5xl">
          Photos
        </h1>
      </section>

      <PhotoGallery photos={photos} />
    </main>
  )
}

export default PhotosPage
