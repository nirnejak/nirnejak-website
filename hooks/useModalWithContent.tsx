import * as React from "react"
import { type StaticImageData } from "next/image"

interface HookReturn {
  isOpen: boolean
  content: StaticImageData | null
  openModal: (image: StaticImageData) => void
  closeModal: () => void
}

const useModalWithContent = (): HookReturn => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [content, setContent] = React.useState<StaticImageData | null>(null)

  const openModal = (image: StaticImageData): void => {
    setContent(image)
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
