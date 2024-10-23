import * as React from "react"

import { type Metadata } from "next"

import { Inbox } from "akar-icons"
import Link from "next/link"

import Container from "components/atoms/Container"
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
    <Container>
      <section className="flex min-h-screen items-start pt-32 md:pt-40">
        <div className="w-full">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold tracking-tighter text-zinc-300 md:text-5xl">
              Photos
            </h1>
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
            <PhotoGallery images={photos} />
          </div>
        </div>
      </section>
    </Container>
  )
}

export default PhotosPage
