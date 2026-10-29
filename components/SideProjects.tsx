import type * as React from "react"

import { SIDE_PROJECTS } from "@/utils/projects"

const SideProjects: React.FC = () => {
  return (
    <div className="-mx-3">
      <p className="text-label mb-6 text-center font-medium tracking-wider uppercase">
        Side Projects
      </p>
      {SIDE_PROJECTS.map((project) => (
        <a
          href={project.link}
          key={project.name}
          target="_blank"
          rel="noopener"
          className="hover-bg flex flex-col gap-0.5 p-3 font-medium md:flex-row md:items-center md:gap-2"
        >
          <p className="text-body">{project.name}</p>
          <div className="border-line flex-1 border-t border-dashed" />
          <p className="text-muted flex items-center gap-1">{project.work}</p>
        </a>
      ))}
    </div>
  )
}

export default SideProjects
