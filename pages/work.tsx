import * as React from "react"

import { LinkOut } from "akar-icons"

import Container from "components/atoms/Container"
import Layout from "components/atoms/Layout"
import AppLink from "components/atoms/Link"
import { allProjects } from "utils/data"

const WorkPage = () => {
  return (
    <Layout>
      <Container>
        <section className="flex h-screen items-start pt-56">
          <div className="w-full">
            <h1 className="text-5xl font-bold text-zinc-300">Work</h1>

            <div className="mt-20">
              {allProjects.map((project, index) => (
                <div key={index} className="mb-2 flex justify-between">
                  <p className="text-zinc-500">{project.title}</p>
                  <AppLink
                    href={project.link}
                    className="flex items-center gap-1 text-sm text-zinc-500"
                  >
                    <span>Visit</span>
                    <span>
                      <LinkOut size={12} />
                    </span>
                  </AppLink>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default WorkPage
