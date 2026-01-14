import * as React from "react"

const SideProjects: React.FC = () => {
  return (
    <div className="-mx-3">
      <p
        className="
          mb-6 text-center font-medium tracking-wider text-zinc-200 uppercase
        "
      >
        Side Projects
      </p>
      {projects.map((project, index) => (
        <a
          href={project.link}
          key={index}
          target="_blank"
          className="
            hover-bg flex flex-col gap-0.5 p-3 font-medium
            md:flex-row md:items-center md:gap-2
          "
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
    name: "Invoy (WIP)",
    work: "Create, send and track beautiful invoices",
    link: "https://invoy.work/",
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
    name: "Interactive Interfaces",
    work: "UI experiments with React & Framer Motion",
    link: "https://interactive-interfaces.vercel.app/",
  },
  // {
  //   name: "TailwindCSS Animations",
  //   work: "Copy Paste animations for TailwindCSS",
  //   link: "https://tailwindanimations.vercel.app/",
  // },
  // {
  //   name: "Done Done",
  //   work: "A Simple Stupid Interactive Todo List",
  //   link: "https://done-done-beta.vercel.app/",
  // },
  {
    name: "React Presentation Maker",
    work: "Use your React components as presentation slides",
    link: "https://github.com/nirnejak/react-presentation/",
  },
]
