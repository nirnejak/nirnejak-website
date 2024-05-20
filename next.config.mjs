/** @type {import('next').NextConfig} */

import nextPwa from "next-pwa"

import redirects from "./redirects.json" assert { type: "json" }

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
    return redirects
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.giphy.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

export default withPWA(nextConfig)
