import * as React from "react"

import { type Metadata } from "next"

import AppLink from "components/atoms/Link"
import ContactForm from "components/ContactForm"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/contact/",
  title: "Contact | Jitendra Nirnejak",
  description:
    "Contact Jitendra Nirnejak, Fill the form or reach out via email",
})

const ContactPage: React.FC = () => {
  return (
    <main>
      <section className="container mt-32 md:mt-40">
        <h1 className="mb-5 text-4xl font-bold tracking-tighter text-zinc-300 md:text-5xl">
          Contact
        </h1>
        <p className="text-xs text-zinc-500 md:text-sm">
          Get in touch with me if you want to discuss a project or maybe just
          say hi :)
        </p>
      </section>
      <section className="container mt-10 min-h-[60vh] md:mt-16">
        <ContactForm />

        <div className="mt-10 text-center">
          <p className="text-sm text-zinc-500">or reach me at</p>
          <AppLink
            href="mailto:hello@nirnejak.com&subject=Project%20Enquiry"
            className="text-sm font-semibold text-zinc-300"
          >
            hello@nirnejak.com
          </AppLink>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
