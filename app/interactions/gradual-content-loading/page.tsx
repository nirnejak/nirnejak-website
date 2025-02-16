import * as React from "react"

import { type Metadata } from "next"

import GradualContentLoading from "@/components/interactions/GradualContentLoading"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/interactions/gradual-content-loading/",
  title: "Gradual Content Loading | Jitendra Nirnejak",
  description: "Gradual Content Loading animation by Jitendra Nirnejak",
})

const GradualContentLoadingPage: React.FC = () => {
  return (
    <main className="min-h-dvh">
      <section className="container mt-32 md:mt-40">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-300 md:text-5xl">
          Gradual Content Loading
        </h1>
      </section>
      <section className="container mt-10 md:mt-16">
        <GradualContentLoading />
      </section>
    </main>
  )
}

export default GradualContentLoadingPage
