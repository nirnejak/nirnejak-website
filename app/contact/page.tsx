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
    <main className="container">
      <section className="mt-32 flex min-h-screen items-start md:mt-40">
        <div className="w-full">
          <h1 className="mb-5 text-4xl font-bold tracking-tighter text-zinc-300 md:text-5xl">
            Contact
          </h1>
          <p className="text-xs text-zinc-400 md:text-sm">
            Get in touch with me if you want to discuss a project or maybe just
            say hi :)
          </p>

          <ContactForm />

          <div className="mt-10 text-center">
            <p className="text-sm font-bold text-zinc-300">or reach me at</p>
            <AppLink
              href="mailto:hello@nirnejak.com&subject=Project%20Enquiry"
              className="text-sm text-zinc-600"
            >
              hello@nirnejak.com
            </AppLink>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
