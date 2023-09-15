import * as React from "react"

import { Camera } from "akar-icons"
import Image from "next/image"
import Link from "next/link"

import Container from "components/atoms/Container"
import SEO from "components/SEO"

const images = [
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
                className="hover-bg flex items-center gap-1.5 px-4 py-2 text-sm text-zinc-400 hover:text-zinc-300
              "
              >
                <Camera size={22} />
                <span>All Photos</span>
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-1 pb-16 md:mt-16">
            <div className="grid grid-cols-3 gap-5">
              {images.map((imageUrl, index) => (
                <Image
                  key={index}
                  src={`/photos/${imageUrl}`}
                  alt={imageUrl}
                  className="rounded-lg"
                  width="270"
                  height="480"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default ArchivePage
