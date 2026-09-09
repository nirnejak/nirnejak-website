import { ArrowRight } from "akar-icons"
import type { Metadata } from "next"
import Image from "next/image"
import type * as React from "react"
import Photo from "@/assets/photo.jpg"
import Tooltip from "@/components/atoms/Tooltip"
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
    <main className="mt-32 flex min-h-[calc(100dvh-173px)] flex-col md:mt-40 md:min-h-[calc(100dvh-206px)]">
      <JsonLd schema={[personSchema, websiteSchema]} />
      <section className="container sm:my-0">
        <Image
          src={Photo}
          alt="Jitendra Nirnejak"
          placeholder="blur"
          className="mb-6 w-16 rounded-full"
        />
        <h1 className="text-title-soft text-xl font-medium tracking-tighter md:text-2xl">
          Ciao, I&apos;m{" "}
          <Tooltip
            label="Jitendra Nirnejak"
            align="start"
            alignOffset={-14}
            showOnTap
          >
            <button
              type="button"
              className="decoration-placeholder hover:decoration-dim focus-visible:decoration-dim hover:text-title focus-visible:text-title cursor-help underline decoration-dotted decoration-2 underline-offset-[7px] outline-hidden transition-colors duration-150"
            >
              Jeet
            </button>
          </Tooltip>
          , designer & engineer.
        </h1>
        <p className="text-title-soft mb-2 text-xl font-medium tracking-tighter md:text-2xl">
          Crafting <span className="text-gradient-green font-bold">fast</span>,{" "}
          <span className="text-gradient-red pr-px font-bold">obsessive</span>,{" "}
          <span className="text-gradient-blue font-bold">motion-rich</span> user
          interfaces, <br className="hidden md:flex" />
          web animations, and websites that users fall in love with.
        </p>
        <p className="text-muted mb-12 text-sm font-medium sm:text-[15px]">
          I bring a deep technical understanding of how products work, and I add
          the design taste and polish on top, obsessing over the smallest
          details, the ones nobody asks for and everybody notices, to build
          experiences that are functional and delightful.
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
