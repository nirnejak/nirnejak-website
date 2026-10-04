import { ArrowRight } from "akar-icons"
import type { Metadata } from "next"
import type * as React from "react"
import JsonLd from "@/components/JsonLd"
import AppLink from "@/components/atoms/Link"
import PastEngagements from "@/components/PastEngagements"
import SideProjects from "@/components/SideProjects"
import SocialIcons from "@/components/SocialIcons"
import getMetadata from "@/utils/metadata"
import { getBreadcrumbSchema } from "@/utils/schema"
import { ALL_SITES } from "@/utils/projects"

export const metadata: Metadata = getMetadata({
  path: "/work/",
  title: "Work — Design Engineering & Frontend | Jitendra Nirnejak",
  description:
    "Selected client work and engagements by Jitendra Nirnejak — design and frontend for SaaS, real estate, and product teams across North America, Europe, Asia, and Australia.",
})

const PROJECT_COUNT = ALL_SITES.websites.length + ALL_SITES.cms.length

const WorkPage: React.FC = () => {
  return (
    <main>
      <JsonLd
        schema={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work/" },
        ])}
      />
      <section className="container mt-32 flex items-center justify-between md:mt-40">
        <h1 className="text-title text-2xl font-bold tracking-tight md:text-3xl">
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
          <span className="text-body">
            Browse a selection of shipped projects
          </span>
          <div className="border-line flex-1 border-t border-dashed" />
          <span className="text-muted flex items-center gap-1.5">
            {PROJECT_COUNT} projects
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
