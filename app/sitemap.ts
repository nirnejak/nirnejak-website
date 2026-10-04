import type { MetadataRoute } from "next"

import { ALL_BLOGS } from "@/utils/blogs"
import CONFIG from "@/config"

const { BASE_URL } = CONFIG

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Google reads lastModified and ignores changeFrequency/priority, so this
  // reports it only where there is a real date behind it. A build timestamp on
  // every route would just be noise Google learns to distrust.
  const latestPost = new Date(
    Math.max(...ALL_BLOGS.map((blog) => new Date(blog.date).getTime()))
  )

  return [
    { url: `${BASE_URL}/` },
    { url: `${BASE_URL}/work/` },
    { url: `${BASE_URL}/work/projects/` },
    { url: `${BASE_URL}/blogs/`, lastModified: latestPost },
    { url: `${BASE_URL}/photos/` },
    { url: `${BASE_URL}/uses/` },
    { url: `${BASE_URL}/contact/` },
  ]
}
