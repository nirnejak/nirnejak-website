import * as React from "react"

import Container from "components/atoms/Container"
import AppLink from "components/atoms/Link"
import SEO from "components/SEO"
import SocialLinks from "components/SocialLinks"

// TODO: maybe add skills/expertise section - Figma, TypeScript, React, Vue, Node, Postgres
// TODO: maybe add recent blogs
// TODO: maybe add recently done projects

const HomePage: React.FC = () => {
  return (
    <Container>
      <SEO
        title="Jitendra Nirnejak"
        description="Portfolio Website of Jitendra Nirnejak, Developer and Designer"
        path="/"
      />
      <section className="flex h-screen items-start pt-32 md:pt-56">
        <div>
          <h1 className="text-4xl font-bold text-zinc-300 md:text-5xl">
            Jitendra Nirnejak
          </h1>
          <p className="mt-5 text-sm font-light leading-7 text-gray-500 md:text-base">
            I&apos;m a{" "}
            <span className="text-gradient-blue font-bold">Developer</span> &
            <span className="text-gradient-red font-bold"> Designer </span>. I
            am passionate about elegant user interfaces, web animations, and
            data visualization. Currently{" "}
            <AppLink
              href="https://www.draxlr.com/"
              target="_blank"
              className="text-gradient-yellow text-sm font-bold"
            >
              @Inkoop(Draxlr)
            </AppLink>
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
