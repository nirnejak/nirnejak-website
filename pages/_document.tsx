import * as React from "react"

import { Html, Head, Main, NextScript } from "next/document"

const MyDocument: React.FC = () => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        {/* Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/icon-512x512.png" />
        <link rel="mask-icon" href="/icons/icon-512x512.png" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        {/* Basic Meta */}
        <meta
          name="keywords"
          content="Designer, Developer, Content, Blogging, React, TypeScript, Node, JavaScript, Postgres"
        />
        <meta name="author" content="Jitendra Nirnejak" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="application-name" content="Jitendra Nirnejak" />
        {/* Schema.org for Google */}
        <meta itemProp="name" content="Jitendra Nirnejak" />
        {/* Open Graph */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={"Jitendra Nirnejak"} />
        {/* Facebook App */}
        <meta property="fb:admins" content="100003147340678" />
        <meta property="fb:app_id" content="303711933555596" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@jeetnirnejak" />
        <meta name="twitter:site" content="@jeetnirnejak" />
        {/* Plausible Analytics */}
        <script
          defer
          data-domain="nirnejak.com"
          src="https://plausible.io/js/script.js"
        />
        {/* Pirsch Analytics */}
        <script
          defer
          type="text/javascript"
          src="https://api.pirsch.io/pirsch-extended.js"
          id="pirschextendedjs"
          data-code="2BnVC2295vEXRAma6sGBZZjGsRZ1d0D2"
        />
      </Head>
      <body className="overflow-x-hidden bg-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
