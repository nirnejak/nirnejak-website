import * as React from "react"

import type { Metadata } from "next"

import AppLink from "@/components/atoms/Link"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
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
        <div className="-mx-3 mb-16">
          <p className="text-zinc-200 text-center mb-6 uppercase tracking-wider font-medium">
            ECOMMERCE SITES
          </p>
          {allSites.ecommerce.map((project, index) => (
            <AppLink
              key={index}
              href={project.link}
              target="_blank"
              className="hover-bg flex flex-col md:flex-row md:items-center gap-0.5 md:gap-2 font-medium p-3"
            >
              <p className="text-zinc-300">{project.title}</p>
              <div className="flex-1 border-t border-dashed border-zinc-700" />
              <p className="flex items-center gap-1 text-zinc-500">
                {project.link}
              </p>
            </AppLink>
          ))}
        </div>

        <div className="-mx-3 mb-16">
          <p className="text-zinc-200 text-center mb-6 uppercase tracking-wider font-medium">
            Websites(with CMS)
          </p>
          {allSites.cms.map((project, index) => (
            <AppLink
              key={index}
              href={project.link}
              target="_blank"
              className="hover-bg flex flex-col md:flex-row md:items-center gap-0.5 md:gap-2 font-medium p-3"
            >
              <p className="text-zinc-300">{project.title}</p>
              <div className="flex-1 border-t border-dashed border-zinc-700" />
              <p className="flex items-center gap-1 text-zinc-500">
                {project.link}
              </p>
            </AppLink>
          ))}
        </div>

        <div className="-mx-3 mb-16">
          <p className="text-zinc-200 text-center mb-6 uppercase tracking-wider font-medium">
            Websites(without CMS)
          </p>
          {allSites.websites.map((project, index) => (
            <AppLink
              key={index}
              href={project.link}
              target="_blank"
              className="hover-bg flex flex-col md:flex-row md:items-center gap-0.5 md:gap-2 font-medium p-3"
            >
              <p className="text-zinc-300">{project.title}</p>
              <div className="flex-1 border-t border-dashed border-zinc-700" />
              <p className="flex items-center gap-1 text-zinc-500">
                {project.link}
              </p>
            </AppLink>
          ))}
        </div>
      </section>
    </main>
  )
}

export default SitesPage

const allSites = {
  ecommerce: [
    { title: "Jessica Coppet", link: "https://jessicacoppetstudio.com/" },
    { title: "ROCC Naturals", link: "https://roccnaturals.com.au/" },
  ],
  websites: [
    { title: "Draxlr", link: "https://www.draxlr.com/" },
    {
      title: "Sup Bot",
      link: "https://dribbble.com/shots/21362314-Sup-bot-Landing-Site",
    },
    { title: "Inkoop", link: "https://www.inkoop.io/" },
    {
      title: "Dev Tools Academy",
      link: "https://www.devtoolsacademy.com/",
    },
  ],
  cms: [
    { title: "Wills Property", link: "https://www.willsproperty.com.au/" },
    { title: "Warlimont & Nutt", link: "https://www.wnre.com.au/" },
    // { title: "Sciberras Group", link: "https://sciberrasgroupre.com.au/" },
    { title: "Matthews Agency", link: "https://matthews.agency/" },
    { title: "Wingspan Capital", link: "https://wingspancapital.com.au/" },
    { title: "Harris Wood", link: "https://www.harriswood.com.au/" },
    { title: "Movable", link: "https://www.movable.com.au/" },
    { title: "LBD Studios", link: "https://www.lbdstudios.com.au/" },
    {
      title: "Whitefox Real Estate",
      link: "https://www.whitefoxrealestate.com.au/",
    },
    // { title: "Kooyong Travel", link: "https://kooyongtravel.com.au/" },
    { title: "Maven", link: "https://maven.com.au/" },
    { title: "Arkhaus", link: "https://arkhaus.com.au/" },
    { title: "iRock Finishes", link: "https://irockfinishes.com.au/" },
    { title: "Flip Films", link: "https://flipfilms.com.au/" },
    {
      title: "Stuart Family Lawyers",
      link: "https://www.stuartfamilylawyers.com.au/",
    },
  ],
}
