import * as React from "react"

import BaseLayout from "components/atoms/BaseLayout"
import Container from "components/atoms/Container"
import ContactForm from "components/ContactForm"
import AppLink from "components/atoms/Link"

const ContactPage: React.FC = () => {
  return (
    <BaseLayout>
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
    </BaseLayout>
  )
}

export default ContactPage
