import * as React from "react"
import type { Metadata } from "next"

import getMetadata from "@/utils/metadata"
import AppLink from "@/components/atoms/Link"

export const metadata: Metadata = getMetadata({
  path: "/blogs/",
  title: "Blogs | Jitendra Nirnejak",
  description: "Blogs and articles written by Jitendra Nirnejak",
})

const BlogsPage: React.FC = () => {
  return (
    <main>
      <section
        className="
          container mt-32
          md:mt-40
        "
      >
        <h1
          className="
            text-4xl font-bold tracking-tight text-zinc-300
            md:text-5xl
          "
        >
          Blogs
        </h1>
      </section>
      <section
        className="
          container mt-10 mb-16 text-sm
          md:mt-16
        "
      >
        <div
          className="
            mb-16 flex flex-col gap-8
            md:flex-row md:gap-24
          "
        >
          <div
            className="
              flex flex-col gap-1
              md:-mx-3
            "
          >
            {allBlogs.map((blog, index) => (
              <AppLink
                key={index}
                href={blog.url}
                target="_blank"
                className="
                  hover-bg -mx-3 p-3 outline-hidden
                  md:mx-0
                "
                isFollowLink
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

const allBlogs = [
  {
    author: "Jitendra Nirnejak",
    date: "30 December 2025",
    description:
      "A developer's guide to serverless databases: Understand the technical differences from traditional setups and explore tools like Prisma Postgres, Neon, and Turso.",
    title: "The Shift to Serverless: A Guide to Modern Database Architecture",
    url: "https://datavidhya.com/blog/serverless-sql-database/",
  },
  {
    author: "Jitendra Nirnejak",
    date: "12 November 2025",
    description:
      "Discover Ruff and uv, Rust-fueled beasts revolutionizing Python dev. Blast through linting, packaging, and deps with 10x speed gains. Level up your code game now.",
    title:
      "UV and Ruff: Turbocharging Python Development with Rust-Powered Tools",
    url: "https://www.devtoolsacademy.com/blog/uv-and-ruff-turbocharging-python-development-with-rust-powered-tools/",
  },
  {
    author: "Jitendra Nirnejak",
    date: "17 April 2025",
    description:
      "Choosing the right Node.js CMS: A technical guide. Explore the APIs, data models, code architecture, and performance benchmarks of Strapi, Sanity, Keystone, Payload, Dato, Ghost, and Tina to find the best fit.",
    title: "A Developer's Guide to Choosing the Right Headless CMS for Node.js",
    url: "https://yourbrandmate.agency/blog/a-developer-s-guide-to-choosing-the-right-headless-cms-for-node-js",
  },
  {
    author: "Jitendra Nirnejak",
    date: "24 February 2025",
    description:
      "Discover how the View Transitions API enhances web experiences with seamless animations and smooth page transitions, improving user engagement and performance.",
    title: "Enhancing Web Experiences with the View Transitions API",
    url: "https://www.devtoolsacademy.com/blog/enhancing-web-experiences-with-the-view-transitions-api/",
  },
  {
    author: "Jitendra Nirnejak",
    date: "8 May 2023",
    description:
      "Discover the power of SVGs! Learn the basics and advanced techniques for creating and animating stunning, scalable graphics for web",
    title: "SVG Basics - Elements, Styling, Transformation & Animations",
    url: "https://www.inkoop.io/blog/svg-basics-element-styling-transformation-animations/",
  },
  {
    author: "Jitendra Nirnejak",
    date: "23 March 2023",
    description:
      "An In-Depth Comparison of two popular Node.js Frameworks, and why choosing Fastify may be a better option.",
    title: "Express.js vs Fastify - In-Depth Comparison of Node.js Frameworks",
    url: "https://www.inkoop.io/blog/express-vs-fastify-in-depth-comparison-of-node-js-frameworks/",
  },
  {
    author: "Jitendra Nirnejak",
    date: "25 November 2022",
    description:
      "A brief comparison of hstore and JSON data types in PostgreSQL. We learn about the pros and cons of both the data types and when to use them.",
    title:
      "Postgres hstore vs JSON - comparing different unstructured data types in PostgreSQL",
    url: "https://www.draxlr.com/blogs/postgres-hstore-vs-json-comparing-different-unstructured-data-types-in-postgresql/",
  },
  {
    author: "Jitendra Nirnejak",
    date: "11 November 2022",
    description:
      "A guide to hstore data type in postgres, details of various postgres hstore operators and functions, when and how to use them.",
    title: "Postgres HStore data type and how to use it?",
    url: "https://www.draxlr.com/blogs/postgres-hstore-data-type-and-how-to-use-it/",
  },
  {
    author: "Jitendra Nirnejak",
    date: "15 September 2022",
    description:
      "A guide to storing and querying json data in postgres, details of various postgres json operators and functions, when and how to use them.",
    title: "Postgres JSON data type and how to query it?",
    url: "https://www.draxlr.com/blogs/postgres-json-data-type-and-how-to-query-it/",
  },
  {
    author: "Jitendra Nirnejak",
    date: "19 July 2022",
    description:
      "Draxlr is the first BI tool with full support for PlanetScale Databases. Build Filter, Sort, Summarize and Visualize your MySQL Database from PlanetScale.",
    title:
      "Build Dashboards and Setup Slack Alerts on your PlanetScale Database",
    url: "https://www.draxlr.com/blogs/build-dashboards-and-setup-slack-alerts-on-your-planetScale-database/",
  },
  {
    author: "Jitendra Nirnejak",
    date: "1 Jun 2021",
    description:
      "A closer look into the new image api of Gatsby 3. What's new, what's changed and what's gone.",
    title: "Gatsby 3 Image - A Deep-dive into the new image API features",
    url: "https://www.inkoop.io/blog/gatsby-3-image-a-deep-dive-into-the-new-image-api-features/",
  },
  {
    author: "Jitendra Nirnejak",
    date: "11 February 2021",
    description:
      "Integrate your Shopify Store with Gatsby Site, build e-commerce website using Gatsby and Shopify.",
    title: "How to integrate Gatsby with Shopify Store",
    url: "https://www.inkoop.io/blog/how-to-integrate-gatsby-with-shopify-store/",
  },
  {
    author: "Jitendra Nirnejak",
    date: "19 Nov 2020",
    description:
      "A Guide to setting up ESLint for React with Prettier, Pre-commit Hook and Visual Studio Code for better development with linting and code formatting that works with your editor.",
    title: "Setup ESLint for React with Prettier, pre-commit and VSCode",
    url: "https://www.inkoop.io/blog/setup-eslint-for-react-with-prettier-pre-commit-and-vscode/",
  },
  {
    author: "Jitendra Nirnejak",
    date: "10 February 2020",
    description:
      "A guide to building input forms that are easy to use and aesthetically pleasing. UX design tips & tricks to provide better visuals & great user experience.",
    title:
      "Forms that don't suck | How to ensure great user experience on forms",
    url: "https://www.inkoop.io/blog/how-to-ensure-great-user-experience-on-forms/",
  },
  {
    author: "Jitendra Nirnejak",
    date: "31 Jan 2020",
    description:
      "A comprehensive list of extremely useful Gatsby Plugins that can help you build, deploy and monitor a great blog.",
    title: "Must have Gatsby plugins for a great blog",
    url: "https://www.inkoop.io/blog/must-have-gatsby-plugins-for-a-great-blog/",
  },
  {
    author: "Jitendra Nirnejak",
    date: "31 Dec 2019",
    description:
      "A guide to building custom global vue.js plugins for app-wide accessible components, customs filters and custom directives.",
    title: "Building custom plugins for Vue.js | Supercharge Development",
    url: "https://www.inkoop.io/blog/building-custom-plugins-for-vue/",
  },
  {
    author: "Jitendra Nirnejak",
    date: "30 Nov 2019",
    description:
      "Vuesax - The all-new Vue Component Library. Why Vuesax? How to Install & Integrate Vuesax? How to customize Vuesax Theme?",
    title: "Vuesax - The all new Vue Component Library",
    url: "https://www.inkoop.io/blog/vuesax-the-all-new-vue-component-library/",
  },
  {
    author: "Jitendra Nirnejak",
    date: "30 Oct 2019",
    description:
      "A Guide to using JSDoc for generating documentation for react.js applications. Find out the benefits of using JSDoc and using JSDoc with React Component.",
    title:
      "A Guide to using JSDoc for React.js | Better Documentation in React",
    url: "https://www.inkoop.io/blog/a-guide-to-js-docs-for-react-js/",
  },
  {
    author: "Jitendra Nirnejak",
    date: "24 Sep 2019",
    description:
      "AdminJS is a React JS based admin panel for Node JS. We talk about how to set it up and use it in Node JS applications with MongoDB and SQL Databases.",
    title:
      "AdminJS - a Modern Admin Panel for Node JS | React based Admin Panel",
    url: "https://www.inkoop.io/blog/adminjs-a-modern-admin-panel-for-node-js/",
  },
]
