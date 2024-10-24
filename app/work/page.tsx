import * as React from "react"

import { type Metadata } from "next"

import Container from "components/atoms/Container"
import AppLink from "components/atoms/Link"
import { allProjects } from "utils/data"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/work/",
  title: "Work | Jitendra Nirnejak",
  description: "Projects built by Jitendra Nirnejak",
})

const WorkPage: React.FC = () => {
  return (
    <Container>
      <section className="flex min-h-screen items-start pt-32 md:pt-40">
        <div className="w-full">
          <h1 className="text-4xl font-bold tracking-tighter text-zinc-300 md:text-5xl">
            Work
          </h1>

          <div className="mt-10 text-sm md:mt-16">
            <div className="mb-16 flex flex-col md:flex-row">
              <p className="mb-3 flex-1 text-zinc-300 md:mt-2">Projects</p>
              <div className="flex flex-1 flex-col gap-1 md:mx-3">
                {allProjects.work.map((project, index) => (
                  <AppLink
                    key={index}
                    href={project.link}
                    target="_blank"
                    className="hover-bg rounded-md px-3 py-2 outline-none"
                  >
                    <p className="mb-1.5 font-bold">{project.title}</p>
                    <p className="text-xs text-zinc-400">
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
              <div className="flex flex-1 flex-col gap-1 md:mx-3">
                {allProjects.side.map((project, index) => (
                  <AppLink
                    key={index}
                    href={project.link}
                    target="_blank"
                    className="hover-bg rounded-md px-3 py-2 outline-none"
                  >
                    <p className="mb-1.5 font-bold">{project.title}</p>
                    <p className="text-xs text-zinc-400">
                      {project.description}
                    </p>
                  </AppLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default WorkPage
