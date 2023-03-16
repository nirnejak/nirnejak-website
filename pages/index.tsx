import * as React from "react"

import Layout from "components/atoms/Layout"

const HomePage = () => {
  return (
    <Layout>
      <main className="grid h-screen place-content-center">
        <h1 className="flex gap-1.5 text-center text-5xl font-bold text-zinc-800">
          <span className="text-gradient-blue">Design,</span>
          <span className="text-gradient-red">Code & </span>
          <span className="text-gradient-yellow">Write.</span>
        </h1>
      </main>
    </Layout>
  )
}

export default HomePage
