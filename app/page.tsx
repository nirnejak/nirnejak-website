import { ArrowRight } from "akar-icons"
import type { Metadata } from "next"
import Image from "next/image"
import type * as React from "react"
import Photo from "@/assets/photo.jpg"
import JsonLd from "@/components/JsonLd"
import SocialIcons from "@/components/SocialIcons"
import config from "@/config"
import getMetadata from "@/utils/metadata"
import { personSchema, websiteSchema } from "@/utils/schema"

export const metadata: Metadata = getMetadata({
  path: "/",
  ogType: "profile",
  title: "Jitendra Nirnejak — Design Engineer",
  description:
    "Design engineer based in Bangalore, crafting tasteful websites, user-interfaces, and web animations for ambitious product teams.",
})

const HomePage: React.FC = () => {
  return (
    <main className="flex min-h-[calc(100dvh-46px)] flex-col justify-center">
      <JsonLd schema={[personSchema, websiteSchema]} />
      <section className="container my-24 sm:my-0">
        <Image
          src={Photo}
          alt="Jitendra Nirnejak"
          placeholder="blur"
          className="mb-6 w-16 rounded-full"
        />
        <h1 className="text-title-soft mb-2 max-w-[36ch] text-2xl font-medium tracking-tighter md:text-3xl">
          I&apos;m Jeet, designer & engineer,
          <br />
          crafting fast, obsessive, motion-rich <br />
          <span className="text-gradient-blue font-bold">interfaces,</span>{" "}
          <span className="text-gradient-red font-bold">web-animations,</span>{" "}
          and <span className="text-gradient-green font-bold">sites.</span>
        </h1>
        <p className="text-muted mb-6 text-sm font-medium sm:text-base">
          I thrive at the intersection of design and code, obsessing over the
          smallest details to craft experiences that are both functional and
          delightful. My work is driven by a passion for elegance, precision,
          and seamless interactivity that makes people fall in love with a
          product.
        </p>
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-6">
            <a
              className="group bg-inverse-soft text-on-inverse hover:bg-inverse-hover focus:bg-inverse-hover inline-flex items-center gap-1.5 rounded-full py-3 pr-4 pl-5 text-sm leading-none font-medium outline-hidden transition-colors active:scale-98"
              href={config.SCHEDULE_CALL_LINK}
              target="_blank"
              rel="noopener"
            >
              <span>Schedule call</span>
              <ArrowRight
                size={14}
                className="transition-transform group-hover:-rotate-45 group-focus:-rotate-45"
              />
            </a>
            <p className="text-muted text-sm font-medium">
              or{" "}
              <a
                href="mailto:hello@nirnejak.com?subject=Project%20Enquiry"
                className="text-dim hover:text-body focus:text-body ml-3 underline-offset-2 outline-hidden transition-colors hover:underline focus:underline"
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
