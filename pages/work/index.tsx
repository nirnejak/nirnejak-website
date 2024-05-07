import * as React from "react"

import Container from "components/atoms/Container"
import AppLink from "components/atoms/Link"
import SEO from "components/SEO"
import WorkLinks from "components/WorkLinks"
import { allProjects } from "utils/data"

const WorkPage: React.FC = () => {
  return (
    <Container>
      <SEO
        title="Work | Jitendra Nirnejak"
        description="Projects built by Jitendra Nirnejak"
        path="/work/"
      />
      <section className="flex min-h-screen items-start pt-32 md:pt-40">
        <div className="w-full">
          <h1 className="text-5xl font-bold text-zinc-300">Work</h1>

          <div className="mt-10 text-sm md:mt-16">
            <WorkLinks />
          </div>

          <div className="mt-10 text-sm md:mt-16">
            <div className="mb-16 flex flex-col md:flex-row">
              <p className="mb-3 flex-1 text-zinc-300 md:mt-2">Side Projects</p>
              <div className="flex flex-1 flex-col gap-1 md:mx-3">
                {allProjects.side.map((project, index) => (
                  <AppLink
                    key={index}
                    href={project.link}
                    target="_blank"
                    className="hover-bg rounded-md px-3 py-2 outline-none"
                  >
                    <p className="mb-1.5 font-bold">{project.title}</p>
                    <p className="text-xs text-zinc-500">
                      {project.description}
                    </p>
                  </AppLink>
                ))}
              </div>
            </div>
            <div className="mb-16 flex flex-col md:flex-row">
              <p className="mb-3 flex-1 text-zinc-300 md:mt-2">Work Projects</p>
              <div className="flex flex-1 flex-col gap-1 md:mx-3">
                {allProjects.work.map((project, index) => (
                  <AppLink
                    key={index}
                    href={project.link}
                    target="_blank"
                    className="hover-bg rounded-md px-3 py-2 outline-none"
                  >
                    <p className="mb-1.5 font-bold">{project.title}</p>
                    <p className="text-xs text-zinc-500">
                      {project.description}
                    </p>
                  </AppLink>
                ))}
              </div>
            </div>
            <div className="mb-16 flex flex-col md:flex-row">
              <p className="mb-3 flex-1 text-zinc-300 md:mt-2">Starters</p>
              <div className="flex flex-1 flex-col gap-1 md:mx-3">
                {allProjects.starter.map((project, index) => (
                  <AppLink
                    key={index}
                    href={project.link}
                    target="_blank"
                    className="hover-bg rounded-md px-3 py-2 outline-none"
                  >
                    <p className="mb-1.5 font-bold">{project.title}</p>
                    <p className="text-xs text-zinc-500">
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
