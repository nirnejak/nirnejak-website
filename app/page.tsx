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
  description:
    "Independent designer and developer based in Bangalore, crafting tasteful websites, user-interfaces, and web animations for ambitious teams.",
})

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jitendra Nirnejak",
  alternateName: "Jeet",
  url: config.baseUrl,
  image: `${config.baseUrl}/cover.png`,
  jobTitle: "Designer & Developer",
  description:
    "Independent designer and developer based in Bangalore, crafting tasteful websites, user-interfaces, and web animations.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressCountry: "IN",
  },
  sameAs: [
    "https://x.com/jeetnirnejak/",
    "https://github.com/nirnejak/",
    "https://dribbble.com/nirnejak/",
    "https://www.producthunt.com/@nirnejak",
    "https://unsplash.com/@nirnejak/",
    "https://www.instagram.com/jeetnirnejak/",
    "https://layers.to/nirnejak/",
  ],
}

const HomePage: React.FC = () => {
  return (
    <main className="flex min-h-[calc(100dvh-46px)] flex-col justify-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <section className="container my-24 sm:my-0">
        <Image
          src={Photo}
          alt="Jitendra Nirnejak's Photo"
          placeholder="blur"
          className="mb-6 w-16 rounded-full"
        />
        <h1 className="text-title-soft max-w-[36ch] text-2xl font-medium tracking-tighter md:text-3xl">
          Hi, I&apos;m Jitendra Nirnejak (Jeet)
          <br />
          Developer & Designer
          {/* & founder at{" "}
          <a
            target="_blank"
            href="https://oven.studio/"
            className="transition-colors hover:text-label"
            rel="noopener"
          >
            Oven Studio
          </a> */}
          . Crafting tasteful, elegant{" "}
          <span className="text-gradient-blue font-bold">
            user-interfaces,
          </span>{" "}
          <span className="text-gradient-red font-bold">web-animations,</span>{" "}
          and <span className="text-gradient-green font-bold">websites.</span>
        </h1>
        <p className="text-muted mb-16 text-sm font-medium sm:text-base">
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
