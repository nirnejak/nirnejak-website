import * as React from "react"

import Container from "components/atoms/Container"
import Layout from "components/atoms/Layout"

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
            <p className="mt-5 text-gray-500">
              I am passionate about elegant user interfaces, web animations, and
              data visualization. #figma #react #typescript. Currently{" "}
              <span className="font-semibold text-slate-400">
                Inkoop(Draxlr)
              </span>
            </p>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default HomePage
