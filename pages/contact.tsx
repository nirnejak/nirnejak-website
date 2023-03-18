import * as React from "react"

import Container from "components/atoms/Container"
import Layout from "components/atoms/Layout"
import AppLink from "components/atoms/Link"

interface ResponseDataType {
  ok: boolean
}

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const [state, setState] = React.useState<{
    name: string
    email: string
    message: string
  }>({ name: "", email: "", message: "" })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setIsSubmitting(true)
    fetch("https://formspree.io/f/xgerdbkz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    })
      .then(async (response) => await response.json())
      .then((data: ResponseDataType) => {
        setIsSubmitting(false)
        if (data.ok) {
          // Show thanks message
        }
      })
      .catch(() => {
        // Show error message
      })
  }

  return (
    <Layout>
      <Container>
        <section className="flex min-h-screen items-start pt-56">
          <div className="w-full">
            <h1 className="text-5xl font-bold text-zinc-300">Contact</h1>

            <form className="mt-16 flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                type="text"
                className="rounded-md bg-zinc-800 py-3 px-4 text-xs text-zinc-400 placeholder:text-zinc-600"
                placeholder="Name"
                name="name"
                value={state.name}
                onChange={handleChange}
              />
              <input
                type="email"
                className="rounded-md bg-zinc-800 py-3 px-4 text-xs text-zinc-400 placeholder:text-zinc-600"
                placeholder="Email"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
              <textarea
                className="rounded-md bg-zinc-800 py-3 px-4 text-xs text-zinc-400 placeholder:text-zinc-600"
                placeholder="Message"
                rows={3}
                name="message"
                value={state.message}
                onChange={handleChange}
              />
              <button
                disabled={isSubmitting}
                className="rounded-md bg-white py-3 px-4 text-center text-sm font-bold uppercase tracking-wide"
              >
                {isSubmitting ? "SENDING..." : "SEND"}
              </button>
            </form>
            <div className="mt-10 text-center">
              <p className="text-sm font-bold text-zinc-400">or reach me at</p>
              <AppLink
                href="mailto:hello@nirnejak.com&subject=Website%20Enquiry"
                className="text-sm font-light text-zinc-600"
              >
                jeetnirnejak@gmail.com
              </AppLink>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default ContactPage
