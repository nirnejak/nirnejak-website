"use client"
import * as React from "react"

import { motion, AnimatePresence } from "motion/react"

interface ResponseDataType {
  ok: boolean
}

declare global {
  interface Window {
    plausible: (event: string) => void
  }
}

const INITIAL_STATE = { name: "", email: "", message: "" }

const ContactForm: React.FC = () => {
  const [formState, setFormState] = React.useState("Send")

  const [state, setState] = React.useState<{
    name: string
    email: string
    message: string
  }>(INITIAL_STATE)

  const variants = {
    initial: { opacity: 0, y: -25 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 25 },
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setFormState("Sending...")
    window.plausible("Submitted Contact Form")
    fetch("https://formspree.io/f/xgerdbkz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    }) // eslint-disable-next-line @typescript-eslint/promise-function-async
      .then((response) => response.json())
      .then((data: ResponseDataType) => {
        setFormState("Sent!")
        if (data.ok) {
          setTimeout(() => {
            setFormState("Send")
            setState(INITIAL_STATE)
          }, 1500)
        }
        return data.ok
      })
      .catch(() => {
        setFormState("Send")
      })
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="rounded-md bg-zinc-800 px-4 py-3 text-xs font-medium text-zinc-300 outline-hidden placeholder:text-zinc-500"
        placeholder="Name"
        name="name"
        value={state.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        className="rounded-md bg-zinc-800 px-4 py-3 text-xs font-medium text-zinc-300 outline-hidden placeholder:text-zinc-500"
        placeholder="Email"
        name="email"
        value={state.email}
        onChange={handleChange}
        required
      />
      <textarea
        className="rounded-md bg-zinc-800 px-4 py-3 text-xs font-medium text-zinc-300 outline-hidden placeholder:text-zinc-500"
        placeholder="Message"
        rows={5}
        name="message"
        value={state.message}
        onChange={handleChange}
        required
      />
      <button
        disabled={formState === "Sending..." || formState === "Sent!"}
        className="rounded-md bg-zinc-50 px-4 py-3 text-center text-sm font-semibold uppercase tracking-wide text-zinc-900 outline-hidden transition-all hover:bg-zinc-200 focus:bg-zinc-200 active:scale-95 disabled:cursor-not-allowed disabled:bg-zinc-400"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            transition={{ type: "spring", duration: 0.3, bounce: 0 }}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            key={formState}
            className="flex w-full items-center justify-center"
          >
            {formState}
          </motion.span>
        </AnimatePresence>
      </button>
    </form>
  )
}

export default ContactForm
