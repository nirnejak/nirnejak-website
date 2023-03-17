import * as React from "react"

import Container from "components/atoms/Container"
import Layout from "components/atoms/Layout"

const WorkPage = () => {
  return (
    <Layout>
      <Container>
        <section className="flex h-screen items-start pt-56">
          <div>
            <h1 className="text-5xl font-bold text-zinc-300">Work</h1>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default WorkPage
