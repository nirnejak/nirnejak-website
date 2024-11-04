"use client"
import * as React from "react"

import { type Metadata } from "next"

import Image from "next/image"

import AppLink from "components/atoms/Link"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Not Found | Jitendra Nirnejak",
  description: "Portfolio Website of Jitendra Nirnejak, Developer and Designer",
})

const NotFound: React.FC = () => {
  return (
    <main className="container">
      <section className="grid min-h-screen place-content-center">
        <div className="relative">
          <Image
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2YxZTBhOTc4NDE0YmQxYWUwM2M5YmVkYTkzZTgyYzEzYTk2MTYzMSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/1EmBoG0IL50VIJLWTs/giphy.gif"
            alt="Lost"
            width={480}
            height={270}
          />
          <h1 className="mb-3 mt-10 text-center text-3xl font-bold tracking-tighter text-zinc-900 md:text-4xl dark:text-zinc-300">
            You lost buddy?
          </h1>
          <p className="text-center text-zinc-800 dark:text-zinc-400">
            Let me take you{" "}
            <AppLink href="/" className="font-semibold">
              home
            </AppLink>
          </p>
        </div>
      </section>
    </main>
  )
}

export default NotFound
