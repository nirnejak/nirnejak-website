import * as React from "react"

import PlausibleProvider from "next-plausible"

import { Html, Head, Main, NextScript } from "next/document"

const MyDocument: React.FC = () => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-512x512.png"></link>
        <meta name="theme-color" content="#00d09f" />
        {/* Basic Meta */}
        <meta
          name="keywords"
          content="Designer, Developer, Content, Blogging, React, TypeScript, Node, JavaScript, Postgres"
        />
        <meta name="author" content="Jitendra Nirnejak" />
        <meta name="application-name" content="Jitendra Nirnejak" />
        {/* Schema.org for Google */}
        <meta itemProp="name" content="Jitendra Nirnejak" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={"Jitendra Nirnejak"} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@jeetnirnejak" />
        <meta name="twitter:site" content="@jeetnirnejak" />
      </Head>
      <body className="overflow-x-hidden bg-zinc-900">
        <PlausibleProvider domain="nirnejak.com">
          <Main />
        </PlausibleProvider>
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
