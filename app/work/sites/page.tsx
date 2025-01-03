import * as React from "react"

import type { Metadata } from "next"

import AppLink from "@/components/atoms/Link"
import { allSites } from "@/utils/data"
import generateMetadata from "@/utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/work/sites/",
  title: "Sites | Jitendra Nirnejak",
  description: "Websites built by Jitendra Nirnejak",
})

const SitesPage: React.FC = () => {
  return (
    <main>
      <section className="container mt-32 md:mt-40">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-300 md:text-5xl">
          Sites
        </h1>
      </section>
      <section className="container mb-16 mt-10 text-sm md:mt-16">
        <div className="mb-16 flex flex-col md:flex-row">
          <p className="mb-3 flex-1 text-zinc-300 md:mt-2">
            E-commerce Sites(with Shopify Backend)
          </p>
          <div className="mx-0 flex flex-1 flex-col gap-1 md:mx-3">
            {allSites.ecommerce.map((project, index) => (
              <AppLink
                key={index}
                href={project.link}
                target="_blank"
                className="hover-bg -mx-3 rounded-md p-3 outline-none md:mx-0"
              >
                <p className="mb-1.5 font-semibold">{project.title}</p>
                <p className="text-xs font-medium text-zinc-500">
                  {project.link}
                </p>
              </AppLink>
            ))}
          </div>
        </div>
        <div className="mb-16 flex flex-col md:flex-row">
          <p className="mb-3 flex-1 text-zinc-300 md:mt-2">
            Websites(with CMS Integration)
          </p>
          <div className="mx-0 flex flex-1 flex-col gap-1 md:mx-3">
            {allSites.cms.map((project, index) => (
              <AppLink
                key={index}
                href={project.link}
                target="_blank"
                className="hover-bg -mx-3 rounded-md p-3 outline-none md:mx-0"
              >
                <p className="mb-1.5 font-semibold">{project.title}</p>
                <p className="text-xs font-medium text-zinc-500">
                  {project.link}
                </p>
              </AppLink>
            ))}
          </div>
        </div>
        <div className="mb-16 flex flex-col md:flex-row">
          <p className="mb-3 flex-1 text-zinc-300 md:mt-2">
            Websites(without CMS Integration)
          </p>
          <div className="mx-0 flex flex-1 flex-col gap-1 md:mx-3">
            {allSites.websites.map((project, index) => (
              <AppLink
                key={index}
                href={project.link}
                target="_blank"
                className="hover-bg -mx-3 rounded-md p-3 outline-none md:mx-0"
              >
                <p className="mb-1.5 font-semibold">{project.title}</p>
                <p className="text-xs font-medium text-zinc-500">
                  {project.link}
                </p>
              </AppLink>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default SitesPage
