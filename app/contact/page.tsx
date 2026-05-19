import type { Metadata } from "next"
import type * as React from "react"
import AppLink from "@/components/atoms/Link"
import ContactForm from "@/components/ContactForm"
import config from "@/config"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/contact/",
  title: "Contact | Jitendra Nirnejak",
  description:
    "Get in touch with Jitendra Nirnejak — schedule a call, send a project enquiry, or just say hi. Available for select design and frontend engagements.",
})

const ContactPage: React.FC = () => {
  return (
    <main className="min-h-[77vh]">
      <section className="container mt-32 md:mt-40">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-300 md:text-5xl">
          Contact
        </h1>
      </section>
      <section className="container mt-10 grid gap-10 md:mt-16 md:grid-cols-5">
        <div className="col-span-2 flex flex-col">
          <p className="text-xs font-medium text-zinc-500 md:text-sm">
            Let{"'"}s get in touch to discuss a project or maybe just say hi :)
          </p>
          <div className="mt-auto">
            <p className="text-sm font-medium text-zinc-500">
              Reach me via email
            </p>
            <AppLink
              href={`mailto:${config.CONTACT_EMAIL}?subject=Project%20Enquiry`}
              className="text-sm font-semibold text-zinc-300"
            >
              {config.CONTACT_EMAIL}
            </AppLink>
          </div>
        </div>
        <div className="col-span-3">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}

export default ContactPage
