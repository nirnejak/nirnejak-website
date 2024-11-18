import * as React from "react"

import { type Metadata } from "next"

import AppLink from "components/atoms/Link"
import { allBlogs } from "utils/data"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/blogs/",
  title: "Blogs | Jitendra Nirnejak",
  description: "Blogs and articles written by Jitendra Nirnejak",
})

const BlogsPage: React.FC = () => {
  return (
    <main>
      <section className="container mt-32 md:mt-40">
        <h1 className="text-4xl font-bold tracking-tighter text-zinc-300 md:text-5xl">
          Blogs
        </h1>
      </section>
      <section className="container mb-16 mt-10 text-sm md:mt-16">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:gap-24">
          <div className="text-zinc-300 md:mt-3">2023</div>
          <div className="flex flex-col gap-1 md:mx-3">
            {allBlogs[2023].map((blog, index) => (
              <AppLink
                key={index}
                href={blog.url}
                target="_blank"
                className="hover-bg -mx-3 p-3 outline-none md:mx-0"
              >
                <h2 className="font-bold text-zinc-300">{blog.title}</h2>
                <p className="mt-1.5 text-xs text-zinc-500">
                  {blog.description}
                </p>
              </AppLink>
            ))}
          </div>
        </div>
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:gap-24">
          <div className="text-zinc-300 md:mt-3">2022</div>
          <div className="flex flex-col gap-1 md:mx-3">
            {allBlogs[2022].map((blog, index) => (
              <AppLink
                key={index}
                href={blog.url}
                target="_blank"
                className="hover-bg -mx-3 p-3 outline-none md:mx-0"
              >
                <h2 className="font-bold text-zinc-300">{blog.title}</h2>
                <p className="mt-1.5 text-xs text-zinc-500">
                  {blog.description}
                </p>
              </AppLink>
            ))}
          </div>
        </div>
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:gap-24">
          <div className="text-zinc-300 md:mt-3">2021</div>
          <div className="flex flex-col gap-1 md:mx-3">
            {allBlogs[2021].map((blog, index) => (
              <AppLink
                key={index}
                href={blog.url}
                target="_blank"
                className="hover-bg -mx-3 p-3 outline-none md:mx-0"
              >
                <h2 className="font-bold text-zinc-300">{blog.title}</h2>
                <p className="mt-1.5 text-xs text-zinc-500">
                  {blog.description}
                </p>
              </AppLink>
            ))}
          </div>
        </div>
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:gap-24">
          <div className="text-zinc-300 md:mt-3">2020</div>
          <div className="flex flex-col gap-1 md:mx-3">
            {allBlogs[2020].map((blog, index) => (
              <AppLink
                key={index}
                href={blog.url}
                target="_blank"
                className="hover-bg -mx-3 p-3 outline-none md:mx-0"
              >
                <h2 className="font-bold text-zinc-300">{blog.title}</h2>
                <p className="mt-1.5 text-xs text-zinc-500">
                  {blog.description}
                </p>
              </AppLink>
            ))}
          </div>
        </div>
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:gap-24">
          <div className="text-zinc-300 md:mt-3">2019</div>
          <div className="flex flex-col gap-1 md:mx-3">
            {allBlogs[2019].map((blog, index) => (
              <AppLink
                key={index}
                href={blog.url}
                target="_blank"
                className="hover-bg -mx-3 p-3 outline-none md:mx-0"
              >
                <h2 className="font-bold text-zinc-300">{blog.title}</h2>
                <p className="mt-1.5 text-xs text-zinc-500">
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
