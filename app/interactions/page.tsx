import * as React from "react"

import type { Metadata } from "next"

import getMetadata from "@/utils/metadata"

import PhotoCards from "@/components/interactions/PhotoCards"
import Bulb from "@/components/interactions/Bulb"
import JellyTags from "@/components/interactions/JellyTags"
import UpvoteButton from "@/components/interactions/UpvoteButton"
import SliderTabs from "@/components/interactions/SliderTabs"

export const metadata: Metadata = getMetadata({
  path: "/contact/",
  title: "Contact | Jitendra Nirnejak",
  description:
    "Contact Jitendra Nirnejak, get in touch on social media, fill the form or reach out via email",
})

const InteractionsPage: React.FC = () => {
  return (
    <main className="min-h-[77vh]">
      <section className="container mt-32 md:mt-40">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-300 md:text-5xl">
          Interactions
        </h1>
      </section>
      <section className="container my-10">
        <PhotoCards />
      </section>
      <section className="container my-10">
        <JellyTags />
      </section>
      <section className="container my-10">
        <UpvoteButton />
      </section>
      <section className="container my-10">
        <Bulb />
      </section>
      <section className="container my-10">
        <SliderTabs />
      </section>
    </main>
  )
}

export default InteractionsPage
