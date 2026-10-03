import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactCompiler: true,
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
        source: "/interactions/",
        destination: "/work/",
        permanent: true,
      },
      {
        source: "/work/sites/",
        destination: "/work/projects/",
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
}

export default nextConfig
