import * as React from "react"

import { Camera } from "akar-icons"
import Link from "next/link"

import Container from "components/atoms/Container"
import PhotoGallery from "components/PhotoGallery"
import SEO from "components/SEO"
import { archivedPhotos } from "utils/photos"

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
            <PhotoGallery images={archivedPhotos} />
          </div>
        </div>
      </section>
    </Container>
  )
}

export default ArchivePage
