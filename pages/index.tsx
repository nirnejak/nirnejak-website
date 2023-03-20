import * as React from "react"

import Container from "components/atoms/Container"
import Layout from "components/atoms/Layout"
import AppLink from "components/atoms/Link"
import SocialLinks from "components/SocialLinks"

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Container>
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
    </Layout>
  )
}

export default HomePage
