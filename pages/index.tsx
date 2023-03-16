import * as React from "react"

import Container from "components/atoms/Container"
import Layout from "components/atoms/Layout"
import AppLink from "components/atoms/Link"
import SocialLinks from "components/SocialLinks"

const HomePage = () => {
  return (
    <Layout>
      <Container>
        <section className="flex h-screen items-start pt-56">
          <div>
            <h1 className="text-5xl font-bold text-zinc-300">
              Jitendra Nirnejak
            </h1>
            <p className="mt-5 font-light leading-7 text-gray-500">
              I{"'"}m a{" "}
              <span className="text-gradient-blue font-bold">Developer</span>,
              <span className="text-gradient-red font-bold"> Designer </span>&
              sometimes a{" "}
              <span className="text-gradient-yellow font-bold">Blogger</span>. I
              am passionate about elegant user interfaces, web animations, and
              data visualization. Currently{" "}
              <AppLink
                href="https://www.draxlr.com/"
                target="_blank"
                className="font-bold text-zinc-400"
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
