import * as React from "react"

import { type Metadata } from "next"

import { LinkOut } from "akar-icons"
import { redirect } from "next/navigation"

import Container from "components/atoms/Container"
import AppLink from "components/atoms/Link"
import ProjectImagesGallery from "components/ProjectImagesGallery"
import { allProjects } from "utils/data"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/work/",
  title: "Work | Jitendra Nirnejak",
  description: "Projects built by Jitendra Nirnejak",
})

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
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

  if (project === undefined) {
    redirect("/404")
  } else {
    return (
      <>
        <Container>
          <section className="flex w-full pt-32 md:pt-40">
            <div className="flex flex-1 flex-col">
              <h1 className="mb-3 text-3xl font-bold text-zinc-300">
                {project.title}
              </h1>
              <p className="text-sm text-zinc-400">{project.type}</p>
              <div className="-mb-2 -ml-4 mt-24 flex">
                <AppLink
                  className="hover-bg group flex items-center gap-1.5 rounded-md px-4 py-2 text-xs font-medium outline-none"
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
            <div className="flex-1 text-sm text-zinc-400">
              <p className="mb-6">{project.description}</p>
              <p className="mb-2 font-semibold text-zinc-300">Contributions</p>
              <ul className="ml-4 flex list-disc flex-col gap-2.5">
                {project.contributions?.map((contribution, index) => (
                  <li key={index}>{contribution}</li>
                ))}
              </ul>
            </div>
          </section>
        </Container>
        <ProjectImagesGallery images={project.images} />
        <div className="mb-28 flex justify-center">
          <AppLink
            className="hover-bg group flex items-center gap-1.5 rounded-md px-4 py-2 text-xs font-medium outline-none"
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
