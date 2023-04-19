import * as React from "react"

import { ArrowRight, LinkOut } from "akar-icons"

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
      <section className="flex h-screen items-start pt-32 md:pt-40">
        <div className="w-full">
          <h1 className="text-5xl font-bold text-zinc-300">Work</h1>

          <div className="-mx-3 mt-10 flex flex-col gap-1 pb-16 md:mt-16">
            {allProjects.map((project, index) => (
              <AppLink
                key={index}
                href={project.link}
                target="_blank"
                className="hover-bg group flex items-center justify-between rounded-md px-3 py-2 text-sm text-zinc-500 outline-none md:text-base  "
              >
                <p>{project.title}</p>
                <ArrowRight
                  size={12}
                  className="hidden animate-slideLeftAndFade hover:block group-hover:block group-focus-visible:block"
                />
              </AppLink>
            ))}
          </div>

          <div className="-mx-3 mb-3 flex">
            <div className="mr-auto">
              <AppLink
                className="hover-bg flex items-center gap-1.5 rounded-md px-4 py-2 text-xs font-medium outline-none"
                href="https://layers.to/nirnejak"
                target="_blank"
              >
                <span className="">Designs</span>
                <LinkOut className="" size={14} />
              </AppLink>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default WorkPage
