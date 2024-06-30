"use client"
import * as React from "react"
import Image from "next/image"

interface Props {
  images: Array<{ src: string; title: string }>
}

const ProjectImagesGallery: React.FC<Props> = ({ images }) => {
  return (
    <div className="my-32 min-h-screen grid grid-cols-3 gap-3 px-3">
      {images.map((image) => (
        <Image src={image.src} alt={image.title} width={600} height={200} />
      ))}
    </div>
  )
}

export default ProjectImagesGallery
