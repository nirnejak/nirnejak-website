import type * as React from "react"

const SideProjects: React.FC = () => {
  return (
    <div className="-mx-3">
      <p className="text-label mb-6 text-center font-medium tracking-wider uppercase">
        Side Projects
      </p>
      {projects.map((project) => (
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

const projects = [
  {
    name: "Invoy (WIP)",
    work: "Create, send and track beautiful invoices",
    link: "https://invoy.work/",
  },
  {
    name: "Interactive Interfaces",
    work: "UI experiments with React & Motion.dev",
    link: "https://interfaces.show/",
  },
  {
    name: "Peerlist UI Animation Challenge",
    work: "My submission for Peerlist UI animation challenge",
    link: "https://ui-animation-challenge.vercel.app",
  },
  {
    name: "SVG Animations Gallery",
    work: "A Gallery of SVG Animations built with Framer Motion",
    link: "https://svg-animations-gallery.vercel.app/",
  },
  {
    name: "React Presentation Maker",
    work: "Use your React components as presentation slides",
    link: "https://github.com/nirnejak/react-presentation/",
  },
]
