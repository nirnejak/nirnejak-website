import * as React from "react"

interface Props {}

const SideProjects: React.FC<Props> = () => {
  return (
    <div className="-mx-3">
      <p className="text-zinc-200 text-center mb-6 uppercase tracking-wider font-medium">
        SIDE PROJECTS
      </p>
      {projects.map((project, index) => (
        <a
          href={project.link}
          key={index}
          target="_blank"
          className="flex flex-col md:flex-row md:items-center gap-0.5 md:gap-2 font-medium hover-bg p-3"
        >
          <p className="text-zinc-300">{project.name}</p>
          <div className="flex-1 border-t border-dashed border-zinc-700" />
          <p className="flex items-center gap-1 text-zinc-500">
            {project.work}
          </p>
        </a>
      ))}
    </div>
  )
}

export default SideProjects

const projects = [
  {
    name: "SVG Animations Gallery",
    work: "A Gallery of SVG Animations built with Framer Motion",
    link: "https://svg-animations-gallery.vercel.app/",
  },
  {
    name: "Interactive Interfaces",
    work: "UI experiments with React & Framer Motion",
    link: "https://interactive-interfaces.vercel.app/",
  },
  {
    name: "TailwindCSS Animations",
    work: "Copy Paste animations for TailwindCSS",
    link: "https://tailwindanimations.vercel.app/",
  },
  {
    name: "Done Done",
    work: "A Simple Stupid Interactive Todo List",
    link: "https://interactive-interfaces.vercel.app/",
  },
  {
    name: "React Presentation Maker",
    work: "Use your React components as presentation slides",
    link: "https://github.com/nirnejak/react-presentation/",
  },
]
