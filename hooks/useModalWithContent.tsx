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

  const openModal = (item: T): void => {
    setContent(item)
    setIsOpen(true)
    document.body.style.overflowY = "hidden"
  }

  const closeModal = React.useCallback(() => {
    setIsOpen(false)
    setContent(null)
    document.body.style.overflowY = "unset"
  }, [])

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
