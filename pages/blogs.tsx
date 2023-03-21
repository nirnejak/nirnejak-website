import * as React from "react"

import Container from "components/atoms/Container"
import Layout from "components/atoms/Layout"
import AppLink from "components/atoms/Link"
import { allBlogs } from "utils/data"

const BlogsPage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <section className="flex min-h-screen items-start pt-32 md:pt-40">
          <div>
            <h1 className="text-5xl font-bold text-zinc-300">Blogs</h1>

            <div className="mt-10 flex flex-col gap-10 pb-16 md:mt-16">
              <div className="flex gap-24">
                <div className="mt-3 text-sm text-zinc-300">2022</div>
                <div className="mx-3 flex flex-col gap-1">
                  {allBlogs[2022].map((blog, index) => (
                    <AppLink
                      key={index}
                      href={blog.url}
                      target="_blank"
                      className="hover-bg p-3"
                    >
                      <h3 className="text-sm font-bold">{blog.title}</h3>
                      <p className="mt-1.5 text-xs text-zinc-500">
                        {blog.description}
                      </p>
                    </AppLink>
                  ))}
                </div>
              </div>
              <div className="flex gap-24">
                <div className="mt-3 text-sm text-zinc-300">2021</div>
                <div className="mx-3 flex flex-col gap-1">
                  {allBlogs[2021].map((blog, index) => (
                    <AppLink
                      key={index}
                      href={blog.url}
                      target="_blank"
                      className="hover-bg p-3"
                    >
                      <h3 className="text-sm font-bold">{blog.title}</h3>
                      <p className="mt-1.5 text-xs text-zinc-500">
                        {blog.description}
                      </p>
                    </AppLink>
                  ))}
                </div>
              </div>
              <div className="flex gap-24">
                <div className="mt-3 text-sm text-zinc-300">2020</div>
                <div className="mx-3 flex flex-col gap-1">
                  {allBlogs[2020].map((blog, index) => (
                    <AppLink
                      key={index}
                      href={blog.url}
                      target="_blank"
                      className="hover-bg p-3"
                    >
                      <h3 className="text-sm font-bold">{blog.title}</h3>
                      <p className="mt-1.5 text-xs text-zinc-500">
                        {blog.description}
                      </p>
                    </AppLink>
                  ))}
                </div>
              </div>
              <div className="flex gap-24">
                <div className="mt-3 text-sm text-zinc-300">2019</div>
                <div className="mx-3 flex flex-col gap-1">
                  {allBlogs[2019].map((blog, index) => (
                    <AppLink
                      key={index}
                      href={blog.url}
                      target="_blank"
                      className="hover-bg p-3"
                    >
                      <h3 className="text-sm font-bold">{blog.title}</h3>
                      <p className="mt-1.5 text-xs text-zinc-500">
                        {blog.description}
                      </p>
                    </AppLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default BlogsPage
