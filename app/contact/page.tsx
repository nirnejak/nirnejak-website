import * as React from "react"
import { type Metadata } from "next"

import generateMetadata from "utils/seo"
import Container from "components/atoms/Container"
import ContactForm from "components/ContactForm"
import AppLink from "components/atoms/Link"

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
          <h1 className="text-5xl font-bold text-zinc-300">Contact</h1>

          <ContactForm />

          <div className="mt-10 text-center">
            <p className="text-sm font-bold text-zinc-400">or reach me at</p>
            <AppLink
              href="mailto:hello@nirnejak.com&subject=Website%20Enquiry"
              className="text-sm text-zinc-600"
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
