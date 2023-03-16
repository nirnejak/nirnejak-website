import * as React from "react"

import Head from "next/head"

import Background from "./Background"
import Navbar from "components/Navbar"
import classNames from "utils/classNames"

type Props = {
  children: React.ReactNode
  className?: string
}

const Layout: React.FC<Props> = ({ children, className, ...restProps }) => {
  return (
    <main {...restProps} className={classNames("bg-zinc-900", className)}>
      <Head>
        <title>Jitendra Nirnejak</title>
        <meta name="description" content="Next.js Typescript Starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      {children}

      <Background />
    </main>
  )
}

export default Layout
