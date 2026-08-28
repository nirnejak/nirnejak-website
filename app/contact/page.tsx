import type { Metadata } from "next"
import type * as React from "react"
import AppLink from "@/components/atoms/Link"
import ContactForm from "@/components/ContactForm"
import config from "@/config"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/contact/",
  title: "Contact — Design Engineering Enquiries | Jitendra Nirnejak",
  description:
    "Get in touch with Jitendra Nirnejak — schedule a call, send a project enquiry, or just say hi. Available for select design and frontend engagements.",
})

const ContactPage: React.FC = () => {
  return (
    <main className="min-h-[77vh]">
      <section className="container mt-32 md:mt-40">
        <h1 className="text-title text-4xl font-bold tracking-tight md:text-5xl">
          Contact
        </h1>
      </section>
      <section className="container mt-10 grid gap-10 md:mt-16 md:grid-cols-5">
        <div className="col-span-2 flex flex-col">
          <p className="text-muted text-xs font-medium md:text-sm">
            Let{"'"}s get in touch to discuss a project or maybe just say hi :)
          </p>
          <p className="text-muted mt-4 text-xs font-medium md:text-sm">
            I take on a small number of projects at a time — usually design
            engineering, product interfaces, and motion work. Expect a reply
            within two working days.
          </p>
          <div className="mt-auto">
            <p className="text-muted text-sm font-medium">Reach me via email</p>
            <AppLink
              href={`mailto:${config.CONTACT_EMAIL}?subject=Project%20Enquiry`}
              className="text-body text-sm font-semibold"
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
