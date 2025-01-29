import * as React from "react"

interface Props {}

const PastEngagements: React.FC<Props> = () => {
  return (
    <div className="-mx-3">
      {engagements.map((client, index) => (
        <div
          key={index}
          className="flex items-center gap-2 font-medium hover-bg p-3"
        >
          <p className="text-zinc-300">{client.name}</p>
          <div className="flex-1 border-t border-dashed border-zinc-700" />
          <p className="flex items-center gap-1 text-zinc-500">
            {client.work} / {client.year}
          </p>
        </div>
      ))}
    </div>
  )
}

export default PastEngagements

const engagements = [
  {
    name: "Radical Labs",
    work: "Logo & Branding",
    year: 2025,
  },
  {
    name: "OntuneAI",
    work: "Logo & Branding",
    year: 2025,
  },
  {
    name: "DevTools Academy",
    work: "Design & Full Stack Development",
    year: 2025,
  },
  {
    name: "Kylaq Studio",
    work: "Logo & Branding",
    year: 2024,
  },
  {
    name: "MarchHQ",
    work: "Design Engineering",
    year: 2024,
  },
  {
    name: "Atollon",
    work: "Frontend & CMS Development",
    year: 2024,
  },
  {
    name: "Roboto Studio",
    work: "Frontend & CMS Development",
    year: 2024,
  },
  {
    name: "Merkle Science",
    work: "Frontend Development",
    year: 2024,
  },
  {
    name: "Draxlr",
    work: "Product Design & Development",
    year: 2024,
  },
  {
    name: "Sup",
    work: "Logo, Product Design & Website",
    year: 2023,
  },
  {
    name: "SwitchedOn",
    work: "Product Design and Mobile Development",
    year: 2021,
  },
  {
    name: "Atollon",
    work: "Frontend Development",
    year: 2020,
  },
  {
    name: "Inkoop",
    work: "Website Design and Development",
    year: 2020,
  },
  {
    name: "Inkoop",
    work: "Social Media Design",
    year: 2020,
  },
  {
    name: "Vnext",
    work: "Product Design",
    year: 2020,
  },
  {
    name: "Ballers Bridge",
    work: "Frontend Development",
    year: 2019,
  },
  {
    name: "Simula",
    work: "Full Stack Development",
    year: 2019,
  },
  {
    name: "AMS Network",
    work: "Frontend Development",
    year: 2019,
  },
  {
    name: "Brunch Finder",
    work: "Full Stack Development",
    year: 2019,
  },
  {
    name: "Destinations of New York State",
    work: "Full Stack Development",
    year: 2019,
  },
]
