import * as React from "react"

import { type Metadata } from "next"

import { CircleFill } from "akar-icons"

import Container from "components/atoms/Container"
import SocialLinks from "components/SocialLinks"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Jitendra Nirnejak - Portfolio Website",
  description: "Portfolio Website of Jitendra Nirnejak, Developer and Designer",
})

const HomePage: React.FC = () => {
  return (
    <Container>
      <section className="flex h-screen items-start pt-32 md:pt-56">
        <div>
          <div className="mb-8 flex">
            <span className="relative flex items-center gap-1.5 rounded-full bg-pink-800/10 px-5 py-2 pl-7 text-xs text-pink-600">
              <CircleFill
                size={5}
                className="absolute left-3.5 animate-ping text-pink-600"
              />
              <CircleFill
                size={5}
                className="absolute left-3.5 text-pink-600"
              />
              Open to projects
            </span>
          </div>
          <h1 className="mb-5 text-4xl font-bold tracking-tighter text-zinc-300 md:text-5xl">
            Jitendra Nirnejak
          </h1>
          <p className="mb-14 text-sm leading-7 text-zinc-400 md:text-base">
            I&apos;m a freelance{" "}
            <span className="text-gradient-blue font-bold">Developer</span> &
            <span className="text-gradient-red font-bold"> Designer </span>,
            obsessed with elegant user interfaces, web- animations, and data
            visualization.
          </p>
          <p className="mb-3.5 text-sm text-zinc-400">
            ✦ &nbsp;<strong>5+</strong> Years Experience, &nbsp;
            <strong>25+</strong> Projects, &nbsp;<strong>10+</strong> Clients
          </p>
          <p className="mb-16 text-sm text-zinc-400">
            ✦ &nbsp;Currently working with{" "}
            <span className="text-gradient-green text-sm font-bold">
              @atollon.com.au
            </span>{" "}
            and{" "}
            <span className="text-gradient-purple text-sm font-bold">
              @roboto.studio
            </span>
          </p>
          <div className="flex">
            <SocialLinks />
          </div>
        </div>
      </section>
    </Container>
  )
}

export default HomePage
