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

const INITIAL_STATE = { name: "", email: "", message: "" }

const ContactForm: React.FC = () => {
  const [isSending, setIsSending] = React.useState(false)
  const [isSent, setIsSent] = React.useState(false)

  const [state, setState] = React.useState<{
    name: string
    email: string
    message: string
  }>(INITIAL_STATE)

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
            setState(INITIAL_STATE)
          }, 3000)
        }
      })
      .catch(() => {
        setIsSending(false)
      })
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="rounded-md bg-zinc-800 px-4 py-3 text-xs font-medium text-zinc-300 placeholder:text-zinc-500"
        placeholder="Name"
        name="name"
        value={state.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        className="rounded-md bg-zinc-800 px-4 py-3 text-xs font-medium text-zinc-300 placeholder:text-zinc-500"
        placeholder="Email"
        name="email"
        value={state.email}
        onChange={handleChange}
        required
      />
      <textarea
        className="rounded-md bg-zinc-800 px-4 py-3 text-xs font-medium text-zinc-300 placeholder:text-zinc-500"
        placeholder="Message"
        rows={3}
        name="message"
        value={state.message}
        onChange={handleChange}
        required
      />
      <button
        disabled={isSending || isSent}
        className="rounded-md bg-zinc-50 px-4 py-3 text-center text-sm font-semibold uppercase tracking-wide text-zinc-900 transition-all hover:bg-zinc-200 focus:bg-zinc-200 active:scale-95 disabled:cursor-not-allowed disabled:bg-zinc-400"
      >
        {isSending ? "SENDING..." : isSent ? "SENT!" : "SEND"}
      </button>
    </form>
  )
}

export default ContactForm
