import type { Metadata } from "next"
import type * as React from "react"
import AppLink from "@/components/atoms/Link"
import JsonLd from "@/components/JsonLd"
import { allSites } from "@/utils/projects"
import getMetadata from "@/utils/metadata"
import { getBreadcrumbSchema } from "@/utils/schema"

export const metadata: Metadata = getMetadata({
  path: "/work/projects/",
  title: "Projects — Shipped Sites & Apps | Jitendra Nirnejak",
  description:
    "Side projects and shipped builds by Jitendra Nirnejak, ranging from full-stack web apps to design-led marketing sites.",
})

const ProjectsPage: React.FC = () => {
  return (
    <main>
      <JsonLd
        schema={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work/" },
          { name: "Projects", path: "/work/projects/" },
        ])}
      />
      <section className="container mt-32 md:mt-40">
        <h1 className="text-title text-4xl font-bold tracking-tight md:text-5xl">
          Projects
        </h1>
      </section>
      <section className="container mt-10 mb-16 text-sm md:mt-16">
        <div className="-mx-3 mb-16">
          <p className="text-label mb-6 text-center font-medium tracking-wider uppercase">
            Products
          </p>
          {allSites.websites.map((project) => (
            <AppLink
              key={project.title}
              href={project.link}
              target="_blank"
              className="hover-bg flex flex-col gap-0.5 p-3 font-medium md:flex-row md:items-center md:gap-2"
            >
              <p className="text-body">{project.title}</p>
              <div className="border-line flex-1 border-t border-dashed" />
              <p className="text-muted flex items-center gap-1">
                {project.link === "#" ? "Discontinued" : project.link}
              </p>
            </AppLink>
          ))}
        </div>

        <div className="-mx-3 mb-16">
          <p className="text-label mb-6 text-center font-medium tracking-wider uppercase">
            Websites
          </p>
          {allSites.cms.map((project) => (
            <AppLink
              key={project.title}
              href={project.link}
              target="_blank"
              className="hover-bg flex flex-col gap-0.5 p-3 font-medium md:flex-row md:items-center md:gap-2"
            >
              <p className="text-body">{project.title}</p>
              <div className="border-line flex-1 border-t border-dashed" />
              <p className="text-muted flex items-center gap-1">
                {project.link}
              </p>
            </AppLink>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProjectsPage
