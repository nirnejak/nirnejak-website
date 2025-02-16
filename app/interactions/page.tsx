import * as React from "react"

import type { Metadata } from "next"

import config from "@/config"
import getMetadata from "@/utils/metadata"

import AppLink from "@/components/atoms/Link"
import ContactForm from "@/components/ContactForm"
import SocialLinks from "@/components/SocialLinks"

export const metadata: Metadata = getMetadata({
  path: "/contact/",
  title: "Contact | Jitendra Nirnejak",
  description:
    "Contact Jitendra Nirnejak, get in touch on social media, fill the form or reach out via email",
})

const InteractionsPage: React.FC = () => {
  return (
    <main className="min-h-[77vh]">
      <section className="container mt-32 md:mt-40">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-300 md:text-5xl">
          Interactions
        </h1>
      </section>
      <section className="container mb-16 mt-10 text-sm md:mt-16"></section>
    </main>
  )
}

export default InteractionsPage
