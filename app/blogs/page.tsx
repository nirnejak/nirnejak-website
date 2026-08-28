import type { Metadata } from "next"
import type * as React from "react"
import AppLink from "@/components/atoms/Link"
import JsonLd from "@/components/JsonLd"
import { allBlogs, type Blog } from "@/utils/blogs"
import getMetadata from "@/utils/metadata"
import { getCollectionPageSchema } from "@/utils/schema"

export const metadata: Metadata = getMetadata({
  path: "/blogs/",
  title: "Writing on React, TypeScript & Design | Jitendra Nirnejak",
  description:
    "Long-form writing by Jitendra Nirnejak on React, TypeScript, design engineering, animation, Postgres, and the tools that make modern web work.",
})

const BlogsPage: React.FC = () => {
  // The list is maintained newest-first, so a Map preserves descending years
  // without a sort — and still groups correctly if an entry lands out of order.
  const blogsByYear = new Map<string, Blog[]>()
  for (const blog of allBlogs) {
    const year = String(new Date(blog.date).getFullYear())
    const bucket = blogsByYear.get(year)
    if (bucket === undefined) blogsByYear.set(year, [blog])
    else bucket.push(blog)
  }

  return (
    <main>
      <JsonLd
        schema={getCollectionPageSchema({
          name: "Writing by Jitendra Nirnejak",
          description:
            "Long-form writing on React, TypeScript, design engineering, animation, Postgres, and the tools that make modern web work.",
          path: "/blogs/",
          items: allBlogs.map((blog) => ({
            title: blog.title,
            url: blog.url,
          })),
        })}
      />
      <section className="container mt-32 md:mt-40">
        <h1 className="text-title text-4xl font-bold tracking-tight md:text-5xl">
          Blogs
        </h1>
      </section>
      <section className="container mt-10 mb-16 text-sm md:mt-16">
        {[...blogsByYear].map(([year, blogs]) => (
          <div key={year} className="mb-10">
            <p className="text-label mb-3 text-xs font-medium tracking-wider uppercase">
              {year}
            </p>
            <div className="flex flex-col gap-1 md:-mx-3">
              {blogs.map((blog) => (
                <AppLink
                  key={blog.url}
                  href={blog.url}
                  target="_blank"
                  className="hover-bg -mx-3 p-3 outline-hidden md:mx-0"
                  isFollowLink
                >
                  <p className="text-muted text-xs font-medium">
                    {blog.date.replace(/\s*\d{4}$/, "")}
                  </p>
                  <p className="text-body mt-1 font-semibold">{blog.title}</p>
                  <p className="text-muted mt-1.5 text-xs font-medium">
                    {blog.description}
                  </p>
                </AppLink>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default BlogsPage
