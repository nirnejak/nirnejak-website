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
        <h1 className="text-4xl font-bold tracking-tight text-zinc-300 md:text-5xl">
          Interactions
        </h1>
      </section>

      <section className="container flex flex-col gap-6 my-10">
        <PhotoCards />
        <VolumeSlider />
        <Dock />
        <JellyTags />
        <UpvoteButton />
        <InteractiveBulb />
        <SliderTabs />
      </section>
    </main>
  )
}

export default InteractionsPage
