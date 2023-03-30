import * as React from "react"

import { Command } from "akar-icons"
import { useRouter } from "next/router"

import Container from "./atoms/Container"

const Footer: React.FC = () => {
  const router = useRouter()

  const footerClass = React.useMemo(() => {
    if (router.pathname.includes("blogs")) {
      return ""
    } else if (router.pathname.includes("uses")) {
      return "md:fixed bottom-0 w-full"
    } else {
      return "fixed bottom-0 w-full"
    }
  }, [router.pathname])

  return (
    <footer className={footerClass}>
      <Container>
        <div className="flex w-full flex-col justify-between gap-4 py-3 text-xs text-zinc-500 md:flex-row">
          <div className="text-center md:text-left">
            Designed with ❤️ and a lot of ☕️
          </div>
          <div className="hidden md:flex">
            <p className="flex items-center gap-1 text-zinc-500">
              <span className="rounded-md bg-zinc-800 p-1.5">
                <Command size={11} />
              </span>
              <span> + </span>
              <span className="rounded-md bg-zinc-800 px-2 py-1 text-[10px]">
                K
              </span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
