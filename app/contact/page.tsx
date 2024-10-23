import * as React from "react"

import { type Metadata } from "next"

import Container from "components/atoms/Container"
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
    <Container>
      <section className="flex min-h-screen items-start pt-32 md:pt-40">
        <div className="w-full">
          <h1 className="text-4xl font-bold tracking-tighter text-zinc-300 md:text-5xl">
            Contact
          </h1>

          <ContactForm />

          <div className="mt-10 text-center">
            <p className="text-sm font-bold text-zinc-400">or reach me at</p>
            <AppLink
              href="mailto:hello@nirnejak.com&subject=Website%20Enquiry"
              className="text-sm text-zinc-500"
            >
              hello@nirnejak.com
            </AppLink>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default ContactPage
