import type { MetadataRoute } from "next"

import { allBlogs } from "@/utils/blogs"
import config from "@/config"

const { baseUrl } = config

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Google reads lastModified and ignores changeFrequency/priority, so this
  // reports it only where there is a real date behind it. A build timestamp on
  // every route would just be noise Google learns to distrust.
  const latestPost = new Date(
    Math.max(...allBlogs.map((blog) => new Date(blog.date).getTime()))
  )

  return [
    { url: `${baseUrl}/` },
    { url: `${baseUrl}/work/` },
    { url: `${baseUrl}/work/projects/` },
    { url: `${baseUrl}/blogs/`, lastModified: latestPost },
    { url: `${baseUrl}/photos/` },
    { url: `${baseUrl}/uses/` },
    { url: `${baseUrl}/contact/` },
  ]
}
