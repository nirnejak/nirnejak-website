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
