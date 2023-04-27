import * as React from "react"

import { CodepenFill, DribbbleFill, GithubFill } from "akar-icons"

import AppLink from "./atoms/Link"

const File: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-3 text-sm md:grid-cols-3">
      <AppLink
        href="https://github.com/nirnejak/"
        target="_blank"
        className="flex items-center justify-between rounded-md bg-green-800/10 p-3 text-green-500 hover:bg-green-900/20 hover:text-green-400"
      >
        <div className="flex items-center gap-1.5">
          <GithubFill size={15} />
          <span>Github</span>
        </div>
        <p className="text-xs text-green-500">5351</p>
      </AppLink>
      <AppLink
        href="https://dribbble.com/nirnejak/"
        target="_blank"
        className="flex items-center justify-between rounded-md bg-pink-800/10 p-3 text-pink-500 hover:bg-pink-900/20 hover:text-pink-400"
      >
        <div className="flex items-center gap-1.5">
          <DribbbleFill size={15} />
          <span>Dribbble</span>
        </div>
        <p className="text-xs text-pink-500">71</p>
      </AppLink>
      <AppLink
        href="https://codepen.io/nirnejak/"
        target="_blank"
        className="flex items-center justify-between rounded-md bg-blue-800/10 p-3 text-blue-500 hover:bg-blue-900/20 hover:text-blue-400"
      >
        <div className="flex items-center gap-1.5">
          <CodepenFill size={15} />
          <span>Codepen</span>
        </div>
        <p className="text-xs text-blue-500">34</p>
      </AppLink>
    </div>
  )
}

export default File
