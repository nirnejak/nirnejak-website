import * as React from "react"

import type { Metadata } from "next"

import getMetadata from "@/utils/seo"

import PastEngagements from "@/components/PastEngagements"
import SideProjects from "@/components/SideProjects"

export const metadata: Metadata = getMetadata({
  path: "/work/",
  title: "Work | Jitendra Nirnejak",
  description: "Projects built by Jitendra Nirnejak",
})

const WorkPage: React.FC = () => {
  return (
    <main>
      <section className="container mt-32 md:mt-40">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-300 md:text-5xl">
          Work
        </h1>
      </section>
      <section className="container mb-16 mt-10 text-sm md:mt-16">
        <PastEngagements />
      </section>
      <section className="container mb-16 mt-10 text-sm md:mt-16">
        <SideProjects />
      </section>
    </main>
  )
}

export default WorkPage
