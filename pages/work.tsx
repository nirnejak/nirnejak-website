import * as React from "react"

import { ArrowRight } from "akar-icons"

import Container from "components/atoms/Container"
import Layout from "components/atoms/Layout"
import AppLink from "components/atoms/Link"
import { allProjects } from "utils/data"

// TODO: find a way to add work description

const WorkPage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <section className="flex h-screen items-start pt-32 md:pt-40">
          <div className="w-full">
            <h1 className="text-5xl font-bold text-zinc-300">Work</h1>

            <div className="-mx-3 mt-10 flex flex-col gap-1 pb-16 md:mt-16">
              {allProjects.map((project, index) => (
                <AppLink
                  key={index}
                  href={project.link}
                  target="_blank"
                  className="hover-bg group flex items-center justify-between rounded-md px-3 py-2 text-zinc-500"
                >
                  <p>{project.title}</p>
                  <ArrowRight
                    size={12}
                    className="hidden animate-slideLeftAndFade hover:block group-hover:block group-focus-visible:block"
                  />
                </AppLink>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default WorkPage
