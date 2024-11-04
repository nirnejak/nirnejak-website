import * as React from "react"

import { type Metadata } from "next"

import PhotoGallery from "components/PhotoGallery"
import { photos } from "utils/photos"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/photos/",
  title: "Photos | Jitendra Nirnejak",
  description: "A gallery of Photos captured by Jitendra Nirnejak",
})

const PhotosPage: React.FC = () => {
  return (
    <main className="container">
      <section className="flex min-h-screen items-start pt-32 md:pt-40">
        <div className="w-full">
          <h1 className="text-4xl font-bold tracking-tighter text-zinc-900 md:text-5xl dark:text-zinc-300">
            Photos
          </h1>

          <div className="mt-10 flex flex-col gap-1 pb-16 md:mt-16">
            <PhotoGallery images={photos} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default PhotosPage
