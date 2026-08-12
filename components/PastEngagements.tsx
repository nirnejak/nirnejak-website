import { Link } from "next-view-transitions"
import type * as React from "react"

const PastEngagements: React.FC = () => {
  return (
    <div className="-mx-3">
      <div className="relative">
        <p className="mb-6 text-center font-medium tracking-wider text-zinc-200 uppercase">
          Projects & Engagements
        </p>
        <Link
          href={"/contact/"}
          className="absolute -top-3 -right-3 rotate-12 rounded-md border border-dashed border-blue-600 bg-blue-500/5 px-1.5 py-1 text-xs text-blue-600"
        >
          Contact for full portfolio
        </Link>
      </div>
      {engagements.map((client) => (
        <div
          key={client.name}
          className="flex flex-col gap-0.5 p-3 font-medium md:flex-row md:items-center md:gap-2"
        >
          <p className="text-zinc-300">{client.name}</p>
          <div className="flex-1 border-t border-dashed border-zinc-700" />
          <p className="flex items-center gap-1 text-zinc-500">
            {client.work} / <span className="text-zinc-300">{client.city}</span>
          </p>
        </div>
      ))}
    </div>
  )
}

export default PastEngagements

const engagements = [
  {
    name: "Acquisity",
    work: "Design Engineering",
    year: 2026,
    city: "New York",
    link: "https://acquisity.ai/",
  },
  {
    name: "Superserve",
    work: "Design Engineering",
    year: 2026,
    city: "San Francisco",
    link: "https://www.superserve.ai/",
  },
  {
    name: "Studio Saol",
    work: "Design Engineering",
    year: 2026,
    city: "Ireland",
    link: "https://studiosaol.com/",
  },
  {
    name: "AnywhereAI",
    work: "Logo & Branding",
    year: 2026,
    city: "San Francisco",
    link: "https://anywhereai.co/",
  },
  {
    name: "Nexxel",
    work: "Product and Website Design",
    year: 2025,
    city: "San Francisco",
    link: "https://example.com/",
  },
  {
    name: "Datavidhya",
    work: "Full Stack Development",
    year: 2025,
    city: "Mumbai",
    link: "https://datavidhya.com/",
  },
  {
    name: "Radical Labs",
    work: "Logo & Branding",
    year: 2025,
    city: "Bangalore",
    link: "https://radicallabs.io/",
  },
  {
    name: "OntuneAI",
    work: "Logo & Branding",
    year: 2025,
    city: "San Francisco",
    link: "https://ontune.ai/",
  },
  {
    name: "DevTools Academy",
    work: "Design & Full Stack Development",
    year: 2025,
    city: "Stockholm",
    link: "https://www.devtoolsacademy.com/",
  },
  {
    name: "Kylaq Studio",
    work: "Logo & Branding",
    year: 2024,
    city: "Bangalore",
    link: "https://kylaqstudio.com/",
  },
  {
    name: "MarchHQ",
    work: "Design Engineering",
    year: 2024,
    city: "San Francisco",
    link: "https://march.cat/",
  },
  {
    name: "Atollon",
    work: "Frontend & CMS Development",
    year: 2024,
    city: "Australia",
    link: "https://atollon.com.au/",
  },
  {
    name: "Roboto Studio",
    work: "Frontend & CMS Development",
    year: 2024,
    city: "London",
    link: "https://robotostudio.com/",
  },
  {
    name: "Merkle Science",
    work: "Frontend Development",
    year: 2024,
    city: "Singapore",
    link: "https://www.merklescience.com/",
  },
  {
    name: "Draxlr",
    work: "Product Design & Development",
    year: 2024,
    city: "Bangalore",
    link: "https://app.draxlr.com/",
  },
  {
    name: "Sup Bot",
    work: "Brand, Website & Product Design",
    year: 2023,
    city: "Bangalore",
    link: "https://www.supbot.com/",
  },
  {
    name: "SwitchedOn",
    work: "Product Design and Mobile Development",
    year: 2021,
    city: "San Francisco",
    link: "https://www.switchedontrainingapp.com/",
  },
  {
    name: "Atollon",
    work: "Frontend Development",
    year: 2020,
    city: "Melbourne",
    link: "https://atollon.com.au/",
  },
  {
    name: "Inkoop",
    work: "Website Design and Development",
    year: 2020,
    city: "Bangalore",
    link: "https://www.inkoop.io/",
  },
  {
    name: "Vnext",
    work: "Product Design",
    year: 2020,
    city: "Hyderabad",
    link: "https://vnext.in/",
  },
  {
    name: "Ballers Bridge",
    work: "Frontend Development",
    year: 2019,
    city: "Atlanta",
    link: "https://www.ballersbridge.com/",
  },
  {
    name: "Simula",
    work: "Full Stack Development",
    city: "San Francisco",
    year: 2019,
  },
  {
    name: "AMS Network",
    work: "Frontend Development",
    city: "Toronto",
    year: 2019,
  },
  {
    name: "Brunch Finder",
    work: "Full Stack Development",
    city: "New York",
    year: 2019,
  },
  {
    name: "Destinations of New York State",
    work: "Full Stack Development",
    city: "New York",
    year: 2019,
  },
]
