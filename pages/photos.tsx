import * as React from "react"

import { type GetStaticProps } from "next"

import Image from "next/image"

import Container from "components/atoms/Container"
import SEO from "components/SEO"
import { getAllImages } from "utils/photos"

const PhotosPage: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <Container>
      <SEO
        title="Photos | Jitendra Nirnejak"
        description="A gallery of Photos captured by Jitendra Nirnejak"
        path="/photos/"
      />
      <section className="flex min-h-screen items-start pt-32 md:pt-40">
        <div className="w-full">
          <h1 className="text-5xl font-bold text-zinc-300">Photos</h1>

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

export default PhotosPage

export const getStaticProps: GetStaticProps = async () => {
  const imageDirectories = getAllImages()

  return {
    props: {
      images: imageDirectories,
    },
  }
}
