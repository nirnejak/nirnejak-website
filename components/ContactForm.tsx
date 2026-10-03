"use client"

import { AnimatePresence, motion } from "motion/react"
import * as React from "react"

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
    // Without `Accept: application/json` Formspree answers with an HTML
    // redirect, and the status is the only reliable signal either way.
    fetch("https://formspree.io/f/xgerdbkz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((response) => {
        if (!response.ok) throw new Error(`Formspree ${response.status}`)
        setFormState("Sent!")
        setTimeout(() => {
          setFormState("Send")
          setState(INITIAL_STATE)
        }, 1500)
      })
      .catch(() => {
        // The message is still in the fields, so a retry is one click.
        setFormState("Try again")
      })
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="bg-surface-raised text-body placeholder:text-muted border-line focus:border-accent rounded-md border px-4 py-3 text-xs font-medium outline-hidden transition-colors"
        placeholder="Name"
        aria-label="Name"
        name="name"
        value={state.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        className="bg-surface-raised text-body placeholder:text-muted border-line focus:border-accent rounded-md border px-4 py-3 text-xs font-medium outline-hidden transition-colors"
        placeholder="Email"
        aria-label="Email"
        name="email"
        value={state.email}
        onChange={handleChange}
        required
      />
      <textarea
        className="bg-surface-raised text-body placeholder:text-muted border-line focus:border-accent rounded-md border px-4 py-3 text-xs font-medium outline-hidden transition-colors"
        placeholder="Message"
        aria-label="Message"
        rows={5}
        name="message"
        value={state.message}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        aria-label="Send message"
        disabled={formState === "Sending..." || formState === "Sent!"}
        className="bg-inverse text-on-inverse hover:bg-inverse-hover focus:bg-inverse-hover disabled:bg-inverse-disabled rounded-md px-4 py-3 text-center text-sm font-semibold tracking-wide uppercase outline-hidden transition-all active:scale-95 disabled:cursor-not-allowed"
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
