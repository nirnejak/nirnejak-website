import * as React from "react"

import { type Metadata } from "next"

import AppLink from "components/atoms/Link"
import { allSites } from "utils/data"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/work/sites/",
  title: "Sites | Jitendra Nirnejak",
  description: "Websites built by Jitendra Nirnejak",
})

const SitesPage: React.FC = () => {
  return (
    <main className="container">
      <section className="flex min-h-screen items-start pt-32 md:pt-40">
        <div className="w-full">
          <h1 className="text-4xl font-bold tracking-tighter text-zinc-300 md:text-5xl">
            Sites
          </h1>

          <div className="mt-10 text-sm md:mt-16">
            <div className="mb-16 flex flex-col md:flex-row">
              <p className="mb-3 flex-1 text-zinc-300 md:mt-2">
                E-commerce Sites(with Shopify Backend)
              </p>
              <div className="flex flex-1 flex-col gap-1 md:mx-3">
                {allSites.ecommerce.map((project, index) => (
                  <AppLink
                    key={index}
                    href={project.link}
                    target="_blank"
                    className="hover-bg rounded-md px-3 py-2 outline-none"
                  >
                    <p className="mb-1.5 font-bold">{project.title}</p>
                    <p className="text-xs text-zinc-400">{project.link}</p>
                  </AppLink>
                ))}
              </div>
            </div>
            <div className="mb-16 flex flex-col md:flex-row">
              <p className="mb-3 flex-1 text-zinc-300 md:mt-2">
                Websites(with CMS Integration)
              </p>
              <div className="flex flex-1 flex-col gap-1 md:mx-3">
                {allSites.cms.map((project, index) => (
                  <AppLink
                    key={index}
                    href={project.link}
                    target="_blank"
                    className="hover-bg rounded-md px-3 py-2 outline-none"
                  >
                    <p className="mb-1.5 font-bold">{project.title}</p>
                    <p className="text-xs text-zinc-400">{project.link}</p>
                  </AppLink>
                ))}
              </div>
            </div>
            <div className="mb-16 flex flex-col md:flex-row">
              <p className="mb-3 flex-1 text-zinc-300 md:mt-2">
                Websites(without CMS Integration)
              </p>
              <div className="flex flex-1 flex-col gap-1 md:mx-3">
                {allSites.websites.map((project, index) => (
                  <AppLink
                    key={index}
                    href={project.link}
                    target="_blank"
                    className="hover-bg rounded-md px-3 py-2 outline-none"
                  >
                    <p className="mb-1.5 font-bold">{project.title}</p>
                    <p className="text-xs text-zinc-400">{project.link}</p>
                  </AppLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SitesPage
