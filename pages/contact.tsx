import * as React from "react"

import Container from "components/atoms/Container"
import Layout from "components/atoms/Layout"
import AppLink from "components/atoms/Link"

interface ResponseDataType {
  ok: boolean
}

const ContactPage: React.FC = () => {
  const [isSending, setIsSending] = React.useState(false)
  const [isSent, setIsSent] = React.useState(false)

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
    setIsSending(true)
    fetch("https://formspree.io/f/xgerdbkz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    })
      .then(async (response) => await response.json())
      .then((data: ResponseDataType) => {
        setIsSending(false)
        if (data.ok) {
          setIsSent(true)
          setTimeout(() => {
            setIsSent(false)
          }, 3000)
        }
      })
      .catch(() => {
        setIsSending(false)
      })
  }

  return (
    <Layout>
      <Container>
        <section className="flex min-h-screen items-start pt-32 md:pt-40">
          <div className="w-full">
            <h1 className="text-5xl font-bold text-zinc-300">Contact</h1>

            <form
              className="mt-10 flex flex-col gap-3 md:mt-16"
              onSubmit={handleSubmit}
            >
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
                disabled={isSending}
                className="rounded-md bg-white py-3 px-4 text-center text-sm font-bold uppercase tracking-wide"
              >
                {isSending ? "SENDING..." : isSent ? "SENT!" : "SEND"}
              </button>
            </form>
            <div className="mt-10 text-center">
              <p className="text-sm font-bold text-zinc-400">or reach me at</p>
              <AppLink
                href="mailto:hello@nirnejak.com&subject=Website%20Enquiry"
                className="text-sm text-zinc-600"
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
