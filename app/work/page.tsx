import type { Metadata } from "next"
import type * as React from "react"
import PastEngagements from "@/components/PastEngagements"
import SideProjects from "@/components/SideProjects"
import SocialIcons from "@/components/SocialIcons"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/work/",
  title: "Work | Jitendra Nirnejak",
  description: "History of past work and collaborations by Jitendra Nirnejak",
})

const WorkPage: React.FC = () => {
  return (
    <main>
      <section className="container mt-32 flex items-center justify-between md:mt-40">
        <h1 className="font-bold text-4xl text-zinc-300 tracking-tight md:text-5xl">
          Work
        </h1>
        <SocialIcons />
      </section>
      <section className="container mt-10 mb-16 text-sm md:mt-16">
        <SideProjects />
      </section>
      <section className="container mt-10 mb-16 text-sm md:mt-16">
        <PastEngagements />
      </section>
    </main>
  )
}

export default WorkPage
