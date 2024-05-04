import * as React from "react"

import { DribbbleFill, GithubFill, LinkOut, LinkedinBoxFill } from "akar-icons"

import AppLink from "./atoms/Link"

const WorkLinks: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-3 text-sm md:grid-cols-3">
      <AppLink
        href="https://github.com/nirnejak/"
        target="_blank"
        className="flex items-center justify-between rounded-md bg-green-800/10 p-3 hover:bg-green-900/20 hover:text-green-400"
      >
        <div className="flex items-center gap-1.5 text-green-500">
          <GithubFill size={15} />
          <span>Github</span>
        </div>
        <p className="text-xs text-green-500">
          <LinkOut size={15} />
        </p>
      </AppLink>
      <AppLink
        href="https://dribbble.com/nirnejak/"
        target="_blank"
        className="flex items-center justify-between rounded-md bg-pink-800/10 p-3 hover:bg-pink-900/20 hover:text-pink-400"
      >
        <div className="flex items-center gap-1.5 text-pink-500">
          <DribbbleFill size={15} />
          <span>Dribbble</span>
        </div>
        <p className="text-xs text-pink-500">
          <LinkOut size={15} />
        </p>
      </AppLink>
      <AppLink
        href="https://www.linkedin.com/in/nirnejak/"
        target="_blank"
        className="flex items-center justify-between rounded-md bg-blue-800/10 p-3 hover:bg-blue-900/20 hover:text-blue-400"
      >
        <div className="flex items-center gap-1.5 text-blue-500">
          <LinkedinBoxFill size={15} />
          <span>LinkedIn</span>
        </div>
        <p className="text-xs text-blue-500">
          <LinkOut size={15} />
        </p>
      </AppLink>
    </div>
  )
}

export default WorkLinks
