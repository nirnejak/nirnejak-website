import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactCompiler: true,
  trailingSlash: true,
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
      // The old /craft/ demos all folded into the work page.
      {
        source: "/craft/:slug/",
        destination: "/work/",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
