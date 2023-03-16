import * as React from "react"

import Container from "components/atoms/Container"
import Layout from "components/atoms/Layout"
import AppLink from "components/atoms/Link"

const HomePage = () => {
  return (
    <Layout>
      <Container>
        <section className="flex h-screen items-center">
          <div>
            <h1 className="text-5xl font-bold text-zinc-800">
              <span className="text-gradient-blue">Design, </span>
              <span className="text-gradient-red">Code & </span>
              <span className="text-gradient-yellow">Write.</span>
            </h1>
            <p className="mt-5 font-light text-gray-500">
              I am passionate about elegant user interfaces, web animations, and
              data visualization. #figma #react #typescript. Currently{" "}
              <AppLink
                href="https://www.draxlr.com/"
                target="_blank"
                className="font-normal text-slate-400"
              >
                @Inkoop(Draxlr)
              </AppLink>
            </p>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default HomePage
