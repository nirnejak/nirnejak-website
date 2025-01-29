import * as React from "react"

import type { Metadata } from "next"

import AppLink from "@/components/atoms/Link"
import getMetadata from "@/utils/seo"
import PastEngagements from "@/components/PastEngagements"

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
      <section className="container mb-16 text-sm md:mt-16">
        <div className="mb-16 flex flex-col md:flex-row">
          <p className="mb-3 flex-1 text-zinc-300 md:mt-2">Projects</p>
          <div className="mx-0 flex flex-1 flex-col gap-1 md:mx-3">
            {allProjects.work.map((project, index) => (
              <AppLink
                key={index}
                href={project.link}
                target="_blank"
                className="hover-bg -mx-3 rounded-md p-3 outline-hidden md:mx-0"
              >
                <p className="mb-1.5 font-semibold text-zinc-300">
                  {project.title}
                </p>
                <p className="text-xs font-medium text-zinc-500">
                  {project.description}
                </p>
              </AppLink>
            ))}
          </div>
        </div>
        <div className="mb-16 flex flex-col md:flex-row">
          <p className="mb-3 flex-1 text-zinc-300 md:mt-2">
            Cooking on the side
          </p>
          <div className="mx-0 flex flex-1 flex-col gap-1 md:mx-3">
            {allProjects.side.map((project, index) => (
              <AppLink
                key={index}
                href={project.link}
                target="_blank"
                className="hover-bg -mx-3 rounded-md p-3 outline-hidden md:mx-0"
              >
                <p className="mb-1.5 font-semibold text-zinc-300">
                  {project.title}
                </p>
                <p className="text-xs font-medium text-zinc-500">
                  {project.description}
                </p>
              </AppLink>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default WorkPage

export const allProjects = {
  side: [
    {
      title: "SVG Animations Gallery",
      description: "A Gallery of SVG Animations built with Framer Motion",
      link: "https://svg-animations-gallery.vercel.app/",
    },
    {
      title: "TailwindCSS Animations",
      description: "Copy Paste animations for TailwindCSS",
      link: "https://tailwindanimations.vercel.app/",
    },
    {
      title: "Interactive Interfaces",
      description:
        "A collection of React components animated with Framer Motion",
      link: "https://interactive-interfaces.vercel.app/",
    },
    {
      title: "React Presentation Maker",
      description: "Use your React components as presentation slides",
      link: "https://github.com/nirnejak/react-presentation/",
    },
  ],
  work: [
    {
      title: "Draxlr",
      description: "Product Design and Development",
      link: "https://www.draxlr.com/",
    },
    {
      title: "Sup Bot",
      description: "Logo, Branding, Website Design & Product Design.",
      link: "https://www.supbot.com/",
    },
    {
      title: "Draxlr",
      description: "Web Animations, Website Design & Development",
      link: "https://www.draxlr.com/",
    },
    {
      title: "Draxlr",
      description: "Logo, Branding and Illustrations",
      link: "https://www.draxlr.com/",
    },
    {
      title: "Inkoop",
      description: "SEO, Website Design and Development",
      link: "https://www.inkoop.io/",
    },
    {
      title: "Inkoop",
      description: "Social Media Content and Technical Content",
      link: "https://www.instagram.com/inkoopteam/",
    },
  ],
}
