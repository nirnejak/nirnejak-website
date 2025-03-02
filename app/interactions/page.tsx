import * as React from "react"

import type { Metadata } from "next"

import getMetadata from "@/utils/metadata"

import PhotoCards from "@/components/interactions/PhotoCards"
import InteractiveBulb from "@/components/interactions/InteractiveBulb"
import JellyTags from "@/components/interactions/JellyTags"
import UpvoteButton from "@/components/interactions/UpvoteButton"
import SliderTabs from "@/components/interactions/SliderTabs"
import VolumeSlider from "@/components/interactions/VolumeSlider"
import Dock from "@/components/interactions/Dock"

export const metadata: Metadata = getMetadata({
  path: "/interactions/",
  title: "Interactions | Jitendra Nirnejak",
  description: "Interactive UI components built by Jitendra Nirnejak",
})

const InteractionsPage: React.FC = () => {
  return (
    <main className="min-h-[77vh]">
      <section className="container mt-32 md:mt-40">
        <div className="flex items-start">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-300 md:text-5xl">
            Interactions
          </h1>
          <span className="text-zinc-300 font-medium">(WIP)</span>
        </div>
      </section>
      <section className="container my-10">
        <PhotoCards />
      </section>
      <section className="container my-10">
        <VolumeSlider />
      </section>
      <section className="container my-10">
        <Dock />
      </section>
      <section className="container my-10">
        <JellyTags />
      </section>
      <section className="container my-10">
        <UpvoteButton />
      </section>
      <section className="container my-10">
        <InteractiveBulb />
      </section>
      <section className="container my-10">
        <SliderTabs />
      </section>
    </main>
  )
}

export default InteractionsPage
