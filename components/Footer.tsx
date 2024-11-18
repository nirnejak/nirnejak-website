import * as React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="container">
      <div className="flex w-full flex-col items-center justify-between gap-4 py-3 text-xs font-medium text-zinc-400 md:flex-row">
        <div className="text-center md:text-left">
          Designed with ❤️ and a lot of ☕️
        </div>
        <div className="hidden md:flex">
          <p className="flex items-center gap-1 text-zinc-400">
            <span className="rounded-md bg-zinc-800 px-1.5 py-1 text-[10px]">
              ⌘
            </span>
            <span> + </span>
            <span className="rounded-md bg-zinc-800 px-2 py-1 text-[10px]">
              K
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
