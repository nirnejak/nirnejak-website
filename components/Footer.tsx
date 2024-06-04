"use client"
import * as React from "react"

import { Command } from "akar-icons"
import { usePathname } from "next/navigation"

import Container from "./atoms/Container"

const Footer: React.FC = () => {
  const pathname = usePathname()

  const footerClass = React.useMemo(() => {
    if (pathname?.includes("blogs") || pathname?.includes("work")) {
      return ""
    } else if (pathname?.includes("uses")) {
      return "md:fixed bottom-0 w-full"
    } else {
      return "fixed bottom-0 w-full"
    }
  }, [pathname])

  return (
    <footer className={footerClass}>
      <Container>
        <div className="flex w-full flex-col items-center justify-between gap-4 py-3 text-xs text-zinc-400 md:flex-row">
          <div className="text-center md:text-left">
            Designed with ❤️ and a lot of ☕️
          </div>
          <div className="hidden md:flex">
            <p className="flex items-center gap-1 text-zinc-400">
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
