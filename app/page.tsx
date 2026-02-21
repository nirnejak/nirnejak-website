import { ArrowRight } from "akar-icons"
import type { Metadata } from "next"
import Image from "next/image"
import type * as React from "react"
import Photo from "@/assets/photo.jpg"
import SocialIcons from "@/components/SocialIcons"
import config from "@/config"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/",
  title: "Jitendra Nirnejak - Developer & Designer",
  description: "Portfolio Website of Jitendra Nirnejak, Developer and Designer",
})

const HomePage: React.FC = () => {
  return (
    <main className="flex min-h-[calc(100dvh-46px)] flex-col justify-center">
      <section className="container my-24 sm:my-0">
        <Image
          src={Photo}
          alt="Jitendra Nirnejak's Photo"
          placeholder="blur"
          className="mb-6 w-16 rounded-full"
        />
        <h1 className="mb-3 max-w-[36ch] font-medium text-2xl text-zinc-400 tracking-tighter md:text-3xl">
          Hi, I&apos;m Jitendra Nirnejak — developer, designer & founder at{" "}
          <a
            target="_blank"
            href="https://oven.studio/"
            className="transition-colors hover:text-zinc-200"
            rel="noopener"
          >
            Oven Studio
          </a>
          . Crafting tasteful, elegant{" "}
          <span className="font-bold text-gradient-blue">websites,</span>{" "}
          <span className="font-bold text-gradient-red">user-interfaces,</span>{" "}
          and{" "}
          <span className="font-bold text-gradient-green">web-animations.</span>
        </h1>
        <p className="mb-16 font-medium text-sm text-zinc-500 sm:text-base">
          I thrive at the intersection of design and code, obsessing over the
          smallest details to craft experiences that are both functional and
          delightful. My work is driven by a passion for elegance, precision,
          and seamless interactivity that makes people fall in love with a
          product.
        </p>
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-6">
            <a
              className="group inline-flex items-center gap-1.5 rounded-full bg-zinc-300 py-3 pr-4 pl-5 font-medium text-sm text-zinc-900 leading-none outline-hidden transition-colors hover:bg-zinc-200 focus:bg-zinc-200 active:scale-98"
              href={config.SCHEDULE_CALL_LINK}
              target="_blank"
            >
              <span>Schedule call</span>
              <ArrowRight
                size={14}
                className="transition-transform group-hover:-rotate-45 group-focus:-rotate-45"
              />
            </a>
            <p className="font-medium text-sm text-zinc-500">
              or{" "}
              <a
                href="mailto:hi@roasted.studio"
                className="ml-3 text-zinc-400 underline-offset-2 outline-hidden transition-colors hover:text-zinc-300 hover:underline focus:text-zinc-300 focus:underline"
              >
                hello@nirnejak.com
              </a>
            </p>
          </div>
          <div className="md:-mr-3.5 md:ml-auto">
            <SocialIcons />
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
