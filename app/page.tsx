import * as React from "react"

import type { Metadata } from "next"

import { CircleFill } from "akar-icons"

import getMetadata from "@/utils/seo"
import SocialIcons from "@/components/SocialIcons"
import Brands from "@/components/Brands"

export const metadata: Metadata = getMetadata({
  path: "/",
  title: "Jitendra Nirnejak - Developer & Designer",
  description: "Portfolio Website of Jitendra Nirnejak, Developer and Designer",
})

const HomePage: React.FC = () => {
  return (
    <main className="min-h-[73.5vh]">
      <section className="container mt-32 md:mt-48">
        <div className="mb-8 flex items-center justify-between">
          <span className="relative flex items-center gap-1.5 rounded-full bg-zinc-800 py-2 pl-7 pr-4 text-xs font-medium text-zinc-400">
            <CircleFill
              size={5}
              className="absolute left-3.5 animate-ping text-zinc-400"
            />
            <CircleFill size={5} className="absolute left-3.5 text-zinc-400" />
            Open to projects
          </span>
          <SocialIcons />
        </div>
        <h1 className="text-2xl font-medium tracking-tight text-zinc-400 md:text-3xl">
          Hi, I&apos;m Jitendra Nirnejak — an independent developer & designer
          crafting tasteful, elegant{" "}
          <span className="text-gradient-blue font-bold">websites,</span>{" "}
          <span className="text-gradient-red font-bold">user-interfaces,</span>{" "}
          and{" "}
          <span className="text-gradient-green font-bold">web-animations.</span>
        </h1>
      </section>
      <section className="container mt-20">
        <Brands />
      </section>
    </main>
  )
}

export default HomePage
