import * as React from "react"

import type { Metadata } from "next"

import AppLink from "@/components/atoms/Link"
import { allBlogs } from "@/utils/data"
import generateMetadata from "@/utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/blogs/",
  title: "Blogs | Jitendra Nirnejak",
  description: "Blogs and articles written by Jitendra Nirnejak",
})

const BlogsPage: React.FC = () => {
  return (
    <main>
      <section className="container mt-32 md:mt-40">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-300 md:text-5xl">
          Blogs
        </h1>
      </section>
      <section className="container mb-16 mt-10 text-sm md:mt-16">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:gap-24">
          <div className="flex flex-col gap-1 md:-mx-3">
            {allBlogs.map((blog, index) => (
              <AppLink
                key={index}
                href={blog.url}
                target="_blank"
                className="hover-bg -mx-3 p-3 outline-none md:mx-0"
              >
                <p className="font-semibold text-zinc-300">{blog.title}</p>
                <p className="mt-1.5 text-xs font-medium text-zinc-500">
                  {blog.description}
                </p>
              </AppLink>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default BlogsPage
