import * as React from "react"

import { type Metadata } from "next"

import Bulb from "@/components/interactions/Bulb"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/interactions/breaking-bulb/",
  title: "Breaking Bulb | Jitendra Nirnejak",
  description:
    "Swinging bulb, that breaks if toggled too fast by Jitendra Nirnejak",
})

const BreakingBulbPage: React.FC = () => {
  return (
    <main className="min-h-dvh">
      <section className="container mt-32 md:mt-40">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-300 md:text-5xl">
          Breaking Bulb
        </h1>
      </section>
      <section className="container mt-10 md:mt-16">
        <Bulb />
      </section>
    </main>
  )
}

export default BreakingBulbPage
