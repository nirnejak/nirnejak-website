import * as React from "react"

import Head from "next/head"

import classNames from "utils/classNames"

interface Props {
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
}

const Layout: React.FC<Props> = ({
  title,
  description,
  children,
  className,
  ...restProps
}) => {
  return (
    <main {...restProps}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </main>
  )
}

Layout.defaultProps = {
  title: "Jitendra Nirnejak",
  description:
    "Jitendra Nirnejak is a developer and designer based out of Bangalore, India. He has expertise in React, TypeScript, Node.js, UI Design and Prototyping.",
}

export default Layout
