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

  const openModal = (item: T): void => {
    setContent(item)
    setIsOpen(true)
  }

  const closeModal = React.useCallback(() => {
    setIsOpen(false)
    setContent(null)
  }, [])

  // Lenis owns the page scroll, so the lock has to go through it. Setting
  // `overflow` on the body instead would turn the body back into a scroll
  // container, which is the thing that stops viewport overflow propagating
  // and leaves Lenis driving an element that no longer scrolls.
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
