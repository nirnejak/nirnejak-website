import * as React from "react"

import { type Metadata } from "next"

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
          <h1 className="text-4xl font-bold text-zinc-300 md:text-5xl">
            Jitendra Nirnejak
          </h1>
          <p className="mt-5 text-sm leading-7 text-zinc-400 md:text-base">
            I&apos;m an independent{" "}
            <span className="text-gradient-blue font-bold">Developer</span> &
            <span className="text-gradient-red font-bold"> Designer </span>,
            obsessed with elegant user interfaces, web- animations, and data
            visualization.
          </p>
          <p className="mt-12 text-sm text-zinc-400">
            ✦ &nbsp;<strong>5+</strong> Years Experience, &nbsp;
            <strong>25+</strong> Projects, &nbsp;<strong>10+</strong> Clients
          </p>
          <p className="mt-3.5 text-sm text-zinc-400">
            ✦ &nbsp;Open to new{" "}
            <span className="text-gradient-yellow text-sm font-bold">
              frontend/design engineer
            </span>{" "}
            opportunities
          </p>
          <p className="mt-3.5 text-sm text-zinc-400">
            ✦ &nbsp;Currently working with{" "}
            <span className="text-gradient-green text-sm font-bold">
              @atollon.com.au
            </span>{" "}
            and{" "}
            <span className="text-gradient-purple text-sm font-bold">
              @roboto.studio
            </span>
          </p>
          <div className="mt-16 flex">
            <SocialLinks />
          </div>
        </div>
      </section>
    </Container>
  )
}

export default HomePage
