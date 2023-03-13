import * as React from "react"

import Head from "next/head"

const Home = () => {
  return (
    <div className="bg-zinc-900">
      <Head>
        <title>Jitendra Nirnejak</title>
        <meta name="description" content="Next.js Typescript Starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid h-screen place-content-center">
        <h1 className="flex gap-1.5 text-center text-5xl font-bold text-zinc-800">
          <span className="text-gradient-1">Design,</span>
          <span className="text-gradient-2">Code & </span>
          <span className="text-gradient-3">Write.</span>
        </h1>
      </main>
    </div>
  )
}

export default Home
