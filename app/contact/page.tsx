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
      <section className="flex min-h-screen items-start pt-32 md:pt-40">
        <div className="w-full">
          <h1 className="mb-5 text-4xl font-bold tracking-tighter text-zinc-900 md:text-5xl dark:text-zinc-300">
            Contact
          </h1>
          <p className="text-xs text-zinc-700 md:text-sm dark:text-zinc-400">
            Get in touch with me if you want to discuss a project or maybe just
            say hi :)
          </p>

          <ContactForm />

          <div className="mt-10 text-center">
            <p className="text-sm font-bold text-zinc-900 dark:text-zinc-300">
              or reach me at
            </p>
            <AppLink
              href="mailto:hello@nirnejak.com&subject=Website%20Enquiry"
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
