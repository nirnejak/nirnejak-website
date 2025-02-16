import * as React from "react"

import { type Metadata } from "next"

import UpvoteButton from "@/components/interactions/UpvoteButton"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/interactions/upvote-button/",
  title: "Upvote Button | Jitendra Nirnejak",
  description: "Upvote Button animation by Jitendra Nirnejak",
})

const UpvoteButtonPage: React.FC = () => {
  return (
    <main className="min-h-dvh">
      <section className="container mt-32 md:mt-40">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-300 md:text-5xl">
          Upvote Button
        </h1>
      </section>
      <section className="container mt-10 md:mt-16">
        <UpvoteButton />
      </section>
    </main>
  )
}

export default UpvoteButtonPage
