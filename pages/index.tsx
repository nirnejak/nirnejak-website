import * as React from "react"

import Head from "next/head"

const HomePage = () => {
  return (
    <div className="bg-zinc-900">
      <Head>
        <title>Jitendra Nirnejak</title>
        <meta name="description" content="Next.js Typescript Starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid h-screen place-content-center">
        <h1 className="flex gap-1.5 text-center text-5xl font-bold text-zinc-800">
          <span className="text-gradient-blue">Design,</span>
          <span className="text-gradient-red">Code & </span>
          <span className="text-gradient-yellow">Write.</span>
        </h1>
      </main>
    </div>
  )
}

export default HomePage
