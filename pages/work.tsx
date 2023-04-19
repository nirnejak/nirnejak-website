import * as React from "react"

import { ArrowRight } from "akar-icons"

import Container from "components/atoms/Container"
import AppLink from "components/atoms/Link"
import SEO from "components/SEO"
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
            <div className="grid grid-cols-1 md:grid-cols-2">
              <p className="mb-3 text-zinc-300 md:mt-2">Side Projects</p>
              <div className="-mx-3 flex flex-col gap-1 pb-16">
                {allProjects.work.map((project, index) => (
                  <AppLink
                    key={index}
                    href={project.link}
                    target="_blank"
                    className="hover-bg rounded-md px-3 py-2 outline-none md:text-base "
                  >
                    <p className="mb-1.5 font-bold">{project.title}</p>
                    <p className="text-xs text-zinc-500">
                      {project.description}
                    </p>
                  </AppLink>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <p className="mb-3 text-zinc-300 md:mt-2">Work Projects</p>
              <div className="-mx-3 flex flex-col gap-1 pb-16">
                {allProjects.side.map((project, index) => (
                  <AppLink
                    key={index}
                    href={project.link}
                    target="_blank"
                    className="hover-bg rounded-md px-3 py-2 outline-none md:text-base "
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
