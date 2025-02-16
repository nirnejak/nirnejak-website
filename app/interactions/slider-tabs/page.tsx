import * as React from "react"

import { type Metadata } from "next"

import SliderTabs from "@/components/interactions/SliderTabs"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/interactions/slider-tabs/",
  title: "Slider Tabs | Jitendra Nirnejak",
  description: "Slider Tabs animation by Jitendra Nirnejak",
})

const SliderTabsPage: React.FC = () => {
  return (
    <main className="min-h-dvh">
      <section className="container mt-32 md:mt-40">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-300 md:text-5xl">
          Slider Tabs
        </h1>
      </section>
      <section className="container mt-10 md:mt-16">
        <SliderTabs />
      </section>
    </main>
  )
}

export default SliderTabsPage
