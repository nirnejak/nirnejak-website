/** @type {import('next').NextConfig} */

import nextPwa from "next-pwa"

const withPWA = nextPwa({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
})

const nextConfig = {
  swcMinify: true,
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/resources/",
        destination: "/blogs/",
        permanent: true,
      },
      {
        source: "/photos/archive/",
        destination: "/photos/",
        permanent: true,
      },
      {
        source: "/craft/animate-height/",
        destination: "/work/",
        permanent: true,
      },
      {
        source: "/craft/dynamic-button/",
        destination: "/work/",
        permanent: true,
      },
      {
        source: "/craft/dynamic-island/",
        destination: "/work/",
        permanent: true,
      },
      {
        source: "/craft/gradual-content-loading/",
        destination: "/work/",
        permanent: true,
      },
      {
        source: "/craft/photo-cards/",
        destination: "/work/",
        permanent: true,
      },
      {
        source: "/craft/slider-tabs/",
        destination: "/work/",
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.giphy.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

export default withPWA(nextConfig)
