import * as React from "react"

import type { Metadata } from "next"
import Image from "next/image"

import { ArrowRight } from "akar-icons"

import getMetadata from "@/utils/metadata"
import SocialIcons from "@/components/SocialIcons"

import Photo from "@/assets/photo.jpg"
import config from "@/config"

export const metadata: Metadata = getMetadata({
  path: "/",
  title: "Jitendra Nirnejak - Developer & Designer",
  description: "Portfolio Website of Jitendra Nirnejak, Developer and Designer",
})

const HomePage: React.FC = () => {
  return (
    <main className="min-h-dvh flex flex-col justify-center">
      <section className="container my-24 sm:my-0">
        <Image
          src={Photo}
          alt="Jitendra Nirnejak's Photo"
          placeholder="blur"
          className="rounded-full mb-6 w-16"
        />
        <h1 className="mb-3 text-2xl max-w-[36ch] font-medium tracking-tighter text-zinc-400 md:text-3xl">
          Hi, I&apos;m Jitendra Nirnejak — developer, designer <br />& founder
          at Oven Studio. Crafting tasteful, elegant{" "}
          <span className="text-gradient-blue font-bold">websites,</span>{" "}
          <span className="text-gradient-red font-bold">user-interfaces,</span>{" "}
          and{" "}
          <span className="text-gradient-green font-bold">web-animations.</span>
        </h1>
        <p className="mb-16 text-sm font-medium text-zinc-500 sm:text-base">
          I thrive at the intersection of design and code, obsessing over the
          smallest details to craft experiences that are both functional and
          delightful. My work is driven by a passion for elegance, precision,
          and seamless interactivity that makes people fall in love with a
          product.
        </p>
        <div className="flex md:items-center flex-col md:flex-row gap-6">
          <div className="flex items-center gap-6">
            <a
              className="inline-flex group items-center gap-1.5 rounded-full bg-zinc-300 pr-4 pl-5 py-3 text-sm font-medium leading-none text-zinc-900 outline-hidden transition-colors hover:bg-zinc-200 focus:bg-zinc-200"
              href={config.SCHEDULE_CALL_LINK}
              target="_blank"
            >
              <span>Schedule call</span>
              <ArrowRight
                size={14}
                className="transition-transform group-hover:-rotate-45 group-focus:-rotate-45"
              />
            </a>
            <p className="text-sm font-medium text-zinc-500">
              or{" "}
              <a
                href="mailto:hi@roasted.studio"
                className="ml-3 underline-offset-2 outline-hidden transition-colors text-zinc-400 hover:text-zinc-300 hover:underline focus:text-zinc-300 focus:underline"
              >
                hello@nirnejak.com
              </a>
            </p>
          </div>
          <div className="md:ml-auto md:-mr-3.5 ">
            <SocialIcons />
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
