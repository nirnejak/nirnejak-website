import * as React from "react"

import { Link } from "next-view-transitions"

const PastEngagements: React.FC = () => {
  return (
    <div className="-mx-3">
      <div className="relative">
        <p
          className="
            mb-6 text-center font-medium tracking-wider text-zinc-200 uppercase
          "
        >
          Projects & Engagements
        </p>
        <Link
          href={"/contact/"}
          className="
            absolute -top-3 -right-3 rotate-12 rounded-md border border-dashed
            border-blue-600 bg-blue-500/5 px-1.5 py-1 text-xs text-blue-600
          "
        >
          Contact for full portfolio
        </Link>
      </div>
      {engagements.map((client, index) => (
        <div
          key={index}
          className="
            flex flex-col gap-0.5 p-3 font-medium
            md:flex-row md:items-center md:gap-2
          "
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
    name: "Nexxel",
    work: "Product and Website Design",
    year: 2025,
    country: "USA",
    link: "https://example.com/",
  },
  {
    name: "Datavidhya",
    work: "Full Stack Development",
    year: 2025,
    country: "India",
    link: "https://datavidhya.com/",
  },
  {
    name: "Radical Labs",
    work: "Logo & Branding",
    year: 2025,
    country: "India",
    link: "https://radicallabs.io/",
  },
  {
    name: "OntuneAI",
    work: "Logo & Branding",
    year: 2025,
    country: "India",
    link: "https://ontune.ai/",
  },
  {
    name: "DevTools Academy",
    work: "Design & Full Stack Development",
    year: 2025,
    country: "Sweden",
    link: "https://www.devtoolsacademy.com/",
  },
  {
    name: "Kylaq Studio",
    work: "Logo & Branding",
    year: 2024,
    country: "India",
    link: "https://kylaqstudio.com/",
  },
  {
    name: "MarchHQ",
    work: "Design Engineering",
    year: 2024,
    country: "USA",
    link: "https://march.cat/",
  },
  {
    name: "Atollon",
    work: "Frontend & CMS Development",
    year: 2024,
    country: "Australia",
    link: "https://atollon.com.au/",
  },
  {
    name: "Roboto Studio",
    work: "Frontend & CMS Development",
    year: 2024,
    country: "UK",
    link: "https://robotostudio.com/",
  },
  {
    name: "Merkle Science",
    work: "Frontend Development",
    year: 2024,
    country: "Singapore",
    link: "https://www.merklescience.com/",
  },
  {
    name: "Draxlr",
    work: "Product Design & Development",
    year: 2024,
    country: "India",
    link: "https://app.draxlr.com/",
  },
  {
    name: "Sup Bot",
    work: "Logo, Product Design & Website",
    year: 2023,
    country: "India",
    link: "https://www.supbot.com/",
  },
  {
    name: "Draxlr",
    work: "Website Design, Animation and Development",
    year: 2022,
    country: "India",
    link: "https://www.draxlr.com/",
  },
  {
    name: "SwitchedOn",
    work: "Product Design and Mobile Development",
    year: 2021,
    country: "USA",
    link: "https://www.switchedontrainingapp.com/",
  },
  {
    name: "Atollon",
    work: "Frontend Development",
    year: 2020,
    country: "Australia",
    link: "https://atollon.com.au/",
  },
  {
    name: "Inkoop",
    work: "Website Design and Development",
    year: 2020,
    country: "India",
    link: "https://www.inkoop.io/",
  },
  {
    name: "Inkoop",
    work: "Social Media Design",
    year: 2020,
    country: "India",
    link: "https://www.instagram.com/inkoopteam/",
  },
  {
    name: "Vnext",
    work: "Product Design",
    year: 2020,
    country: "India",
    link: "https://vnext.in/",
  },
  {
    name: "Draxlr",
    work: "Product Design and Development",
    year: 2020,
    country: "India",
    link: "https://www.draxlr.com/",
  },
  {
    name: "Draxlr",
    work: "Logo and Branding",
    year: 2019,
    country: "India",
    link: "https://www.draxlr.com/",
  },
  {
    name: "Ballers Bridge",
    work: "Frontend Development",
    year: 2019,
    country: "USA",
    link: "https://www.ballersbridge.com/",
  },
  {
    name: "Simula",
    work: "Full Stack Development",
    country: "USA",
    year: 2019,
  },
  {
    name: "AMS Network",
    work: "Frontend Development",
    country: "USA",
    year: 2019,
  },
  {
    name: "Brunch Finder",
    work: "Full Stack Development",
    country: "USA",
    year: 2019,
  },
  {
    name: "Destinations of New York State",
    work: "Full Stack Development",
    country: "USA",
    year: 2019,
  },
]
