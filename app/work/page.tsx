import { ArrowRight } from "akar-icons"
import type { Metadata } from "next"
import type * as React from "react"
import AppLink from "@/components/atoms/Link"
import PastEngagements from "@/components/PastEngagements"
import SideProjects from "@/components/SideProjects"
import SocialIcons from "@/components/SocialIcons"
import getMetadata from "@/utils/metadata"
import { allSites } from "@/utils/projects"

export const metadata: Metadata = getMetadata({
  path: "/work/",
  title: "Work — Design Engineering & Frontend | Jitendra Nirnejak",
  description:
    "Selected client work and engagements by Jitendra Nirnejak — design and frontend for SaaS, real estate, and product teams across the US, UK, Australia, and India.",
})

const projectCount = allSites.websites.length + allSites.cms.length

const WorkPage: React.FC = () => {
  return (
    <main>
      <section className="container mt-32 flex items-center justify-between md:mt-40">
        <h1 className="text-title text-4xl font-bold tracking-tight md:text-5xl">
          Work
        </h1>
        <SocialIcons />
      </section>
      <section className="container mt-10 mb-16 text-sm md:mt-16">
        <SideProjects />
      </section>
      <section className="container mt-10 text-sm md:mt-16">
        <PastEngagements />
      </section>
      <section className="container mt-6 mb-16 text-sm">
        <AppLink
          href="/work/projects/"
          className="hover-bg group -mx-3 flex items-center gap-2 p-3 font-medium"
        >
          <span className="text-body">Browse every shipped project</span>
          <div className="border-line flex-1 border-t border-dashed" />
          <span className="text-muted flex items-center gap-1.5">
            {projectCount} projects
            <ArrowRight
              size={14}
              className="transition-transform group-hover:-rotate-45 group-focus:-rotate-45"
            />
          </span>
        </AppLink>
      </section>
    </main>
  )
}

export default WorkPage
