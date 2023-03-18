import * as React from "react"

import Container from "components/atoms/Container"
import Layout from "components/atoms/Layout"

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <section className="flex min-h-screen items-start pt-56">
          <div className="w-full">
            <h1 className="text-5xl font-bold text-zinc-300">Contact</h1>

            <form className="mt-16 flex w-full flex-col gap-3 pb-16">
              <input
                type="text"
                className="w-full rounded-md bg-zinc-800 py-3 px-4 text-xs text-white"
                placeholder="Name"
              />
              <input
                type="email"
                className="w-full rounded-md bg-zinc-800 py-3 px-4 text-xs text-white"
                placeholder="Email"
              />
              <textarea
                className="w-full rounded-md bg-zinc-800 py-3 px-4 text-xs text-white"
                placeholder="Message"
                rows={3}
              />
              <button className="rounded-md bg-white py-3 px-4 text-center text-sm font-bold uppercase tracking-wide">
                Submit
              </button>
            </form>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default ContactPage
