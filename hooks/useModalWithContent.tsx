import { useLenis } from "lenis/react"
import * as React from "react"

interface HookReturn<T> {
  isOpen: boolean
  content: T | null
  openModal: (content: T) => void
  closeModal: () => void
}

const useModalWithContent = <T,>(): HookReturn<T> => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [content, setContent] = React.useState<T | null>(null)

  const lenis = useLenis()

  // Memoised so consumers can hand it to memoised children without
  // re-rendering them on every parent render.
  const openModal = React.useCallback((item: T) => {
    setContent(item)
    setIsOpen(true)
  }, [])

  const closeModal = React.useCallback(() => {
    setIsOpen(false)
    setContent(null)
  }, [])

  // Lenis owns the page scroll, so the lock goes through it rather than
  // through `body.style.overflow` — that only wins while Lenis happens to be
  // smoothing, and on the native-scroll fallback it would leave the body a
  // scroll container with a stray inline style behind it.
  React.useEffect(() => {
    if (!isOpen) return
    lenis?.stop()
    return () => lenis?.start()
  }, [isOpen, lenis])

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        closeModal()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, closeModal])

  return { isOpen, content, openModal, closeModal }
}

export default useModalWithContent
