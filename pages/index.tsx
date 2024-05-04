import * as React from "react"

import Container from "components/atoms/Container"
import AppLink from "components/atoms/Link"
import SEO from "components/SEO"
import SocialLinks from "components/SocialLinks"

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
            data visualization.
          </p>
          <p className="text-gray-500 md:text-base text-sm mt-5 font-light">
            Open to{" "}
            <span className="text-gradient-yellow text-sm font-bold">
              frontend/design engineer
            </span>{" "}
            opportunities.
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
