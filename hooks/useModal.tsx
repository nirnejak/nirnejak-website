import * as React from "react"

interface HookReturn {
  isOpen: boolean
  content: string
  openModal: (imageUrl: string) => void
  closeModal: () => void
}

const useModal = (): HookReturn => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [content, setContent] = React.useState("")

  const openModal = (imageUrl: string): void => {
    setContent(imageUrl)
    setIsOpen(true)
    document.body.style.overflowY = "hidden"
  }

  const closeModal = React.useCallback(() => {
    setIsOpen(false)
    setContent("")
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

export default useModal
