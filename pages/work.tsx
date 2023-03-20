import * as React from "react"

import { ArrowRight } from "akar-icons"

import Container from "components/atoms/Container"
import Layout from "components/atoms/Layout"
import AppLink from "components/atoms/Link"
import { allProjects } from "utils/data"

const WorkPage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <section className="flex h-screen items-start pt-56">
          <div className="w-full">
            <h1 className="text-5xl font-bold text-zinc-300">Work</h1>

            <div className="-mx-3 mt-16 flex flex-col gap-1 pb-16">
              {allProjects.map((project, index) => (
                <AppLink
                  key={index}
                  href={project.link}
                  target="_blank"
                  className="group flex items-center justify-between rounded-md px-3 py-2 text-zinc-500 hover:bg-zinc-800"
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
