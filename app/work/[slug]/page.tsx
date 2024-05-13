import * as React from "react"
import { type Metadata } from "next"
import { redirect } from "next/navigation"

import { LinkOut } from "akar-icons"

import generateMetadata from "utils/seo"
import { allProjects } from "utils/data"
import Container from "components/atoms/Container"
import AppLink from "components/atoms/Link"
import ProjectImagesGallery from "components/ProjectImagesGallery"

export const metadata: Metadata = generateMetadata({
  path: "/work/",
  title: "Work | Jitendra Nirnejak",
  description: "Projects built by Jitendra Nirnejak",
})

export async function generateStaticParams() {
  return allProjects.work.map((post) => ({
    slug: post.slug,
  }))
}

interface Props {
  params: {
    slug: string
  }
}

const WorkDetailsPage: React.FC<Props> = ({ params }) => {
  const project = allProjects.work.find(
    (project) => project.slug === params.slug
  )

  if (!project) {
    redirect("/404")
  } else {
    return (
      <>
        <Container>
          <section className="pt-32 md:pt-40 w-full flex">
            <div className="flex-1 flex flex-col">
              <h1 className="text-3xl font-bold text-zinc-300 mb-3">
                {project.title}
              </h1>
              <p className="text-sm text-zinc-500">{project.type}</p>
              <div className="flex -ml-4 -mb-2 mt-24">
                <AppLink
                  className="font-medium text-xs rounded-md px-4 py-2 hover-bg outline-none group flex items-center gap-1.5"
                  href={project.link}
                  target="_blank"
                >
                  <span className="">Visit Project</span>
                  <LinkOut
                    className="hidden animate-slideLeftAndFade hover:block group-hover:block group-focus-visible:block"
                    size={14}
                  />
                </AppLink>
              </div>
            </div>
            <div className="flex-1 text-sm text-zinc-500">
              <p className="mb-6">{project.description}</p>
              <p className="font-semibold mb-2 text-zinc-300">Contributions</p>
              <ul className="list-disc gap-2.5 flex flex-col ml-4">
                {project.contributions?.map((contribution) => (
                  <li>{contribution}</li>
                ))}
              </ul>
            </div>
          </section>
        </Container>
        <ProjectImagesGallery images={project.images} />
        <div className="flex justify-center mb-28">
          <AppLink
            className="font-medium text-xs rounded-md px-4 py-2 hover-bg outline-none group flex items-center gap-1.5"
            href={project.link}
            target="_blank"
          >
            <span className="animate-slideLeft group-hover:animate-slideRight group-focus:animate-slideRight">
              Visit Project
            </span>
            <LinkOut
              className="hidden animate-slideLeftAndFade hover:block group-hover:block group-focus-visible:block"
              size={14}
            />
          </AppLink>
        </div>
      </>
    )
  }
}

export default WorkDetailsPage
