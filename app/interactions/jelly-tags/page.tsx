import * as React from "react"

import { type Metadata } from "next"

import JellyTags from "@/components/interactions/JellyTags"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/interactions/jelly-tags/",
  title: "Jelly Tags | Jitendra Nirnejak",
  description: "Jelly Tags animation by Jitendra Nirnejak",
})

const JellyTagsPage: React.FC = () => {
  return (
    <main className="min-h-dvh">
      <section className="container mt-32 md:mt-40">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-300 md:text-5xl">
          Jelly Tags
        </h1>
      </section>
      <section className="container mt-10 md:mt-16">
        <JellyTags />
      </section>
    </main>
  )
}

export default JellyTagsPage
