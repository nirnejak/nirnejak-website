import * as React from "react"

import { type Metadata } from "next"

import AppLink from "components/atoms/Link"
import ContactForm from "components/ContactForm"
import SocialLinks from "components/SocialLinks"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/contact/",
  title: "Contact | Jitendra Nirnejak",
  description:
    "Contact Jitendra Nirnejak, Fill the form or reach out via email",
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
          <p className="text-xs text-zinc-500 md:text-sm">
            Let{"'"}s get in touch to discuss a project or maybe just say hi :)
          </p>
          <div className="mt-auto">
            <p className="text-sm text-zinc-500">Reach me via email</p>
            <AppLink
              href="mailto:hello@nirnejak.com&subject=Project%20Enquiry"
              className="text-sm font-semibold text-zinc-300"
            >
              hello@nirnejak.com
            </AppLink>
            <div className="-mb-3 -ml-3.5 mt-4">
              <SocialLinks />
            </div>
          </div>
        </div>
        <div className="col-span-3 flex flex-col">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}

export default ContactPage
