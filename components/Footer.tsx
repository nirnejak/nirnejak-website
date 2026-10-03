import type * as React from "react"
import ModifierKey from "@/components/atoms/ModifierKey"

const Footer: React.FC = () => {
  return (
    <footer className="container">
      <div className="text-dim flex w-full flex-col items-center justify-between gap-4 py-3 text-xs font-medium md:flex-row">
        <div className="text-center md:text-left">
          Designed with ❤️ and a lot of ☕️
        </div>
        <div className="hidden md:flex">
          <p className="text-dim flex items-center gap-1">
            <kbd className="bg-surface-inset rounded-md px-1.5 py-1 font-sans text-[10px]">
              <ModifierKey />
            </kbd>
            <span> + </span>
            <kbd className="bg-surface-inset rounded-md px-2 py-1 font-sans text-[10px]">
              K
            </kbd>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
