"use client"
import * as React from "react"

interface ResponseDataType {
  ok: boolean
}

declare global {
  interface Window {
    plausible: any
  }
}

const ContactForm: React.FC = () => {
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
    window.plausible("Submitted Contact Form")
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
    <form
      className="mt-10 flex flex-col gap-3 md:mt-16"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="rounded-md bg-zinc-800 px-4 py-3 text-xs text-zinc-400 placeholder:text-zinc-600"
        placeholder="Name"
        name="name"
        value={state.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        className="rounded-md bg-zinc-800 px-4 py-3 text-xs text-zinc-400 placeholder:text-zinc-600"
        placeholder="Email"
        name="email"
        value={state.email}
        onChange={handleChange}
        required
      />
      <textarea
        className="rounded-md bg-zinc-800 px-4 py-3 text-xs text-zinc-400 placeholder:text-zinc-600"
        placeholder="Message"
        rows={3}
        name="message"
        value={state.message}
        onChange={handleChange}
        required
      />
      <button
        disabled={isSending}
        className="rounded-md bg-zinc-50 px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-zinc-900 transition-transform active:scale-95"
      >
        {isSending ? "SENDING..." : isSent ? "SENT!" : "SEND"}
      </button>
    </form>
  )
}

export default ContactForm
