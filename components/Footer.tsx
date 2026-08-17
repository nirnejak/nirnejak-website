import type * as React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="container">
      <div className="text-dim flex w-full flex-col items-center justify-between gap-4 py-3 text-xs font-medium md:flex-row">
        <div className="text-center md:text-left">
          Designed with ❤️ and a lot of ☕️
        </div>
        <div className="hidden md:flex">
          <p className="text-dim flex items-center gap-1">
            <span className="bg-surface-inset rounded-md px-1.5 py-1 text-[10px]">
              ⌘
            </span>
            <span> + </span>
            <span className="bg-surface-inset rounded-md px-2 py-1 text-[10px]">
              K
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
