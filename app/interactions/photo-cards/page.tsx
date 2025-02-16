import * as React from "react"

import { type Metadata } from "next"

import getMetadata from "@/utils/metadata"
import PhotoCards from "@/components/interactions/PhotoCards"

export const metadata: Metadata = getMetadata({
  path: "/interactions/photo-cards/",
  title: "Photo Cards | Jitendra Nirnejak",
  description: "Photo cards reveal animation by Jitendra Nirnejak",
})

const PhotoCardsPage: React.FC = () => {
  return (
    <main className="min-h-dvh">
      <section className="container mt-32 md:mt-40">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-300 md:text-5xl">
          Photo Cards
        </h1>
      </section>
      <section className="container mt-10 md:mt-16">
        <PhotoCards />
      </section>
    </main>
  )
}

export default PhotoCardsPage
