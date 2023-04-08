/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
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
}

module.exports = withPWA(nextConfig)
