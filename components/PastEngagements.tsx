import type * as React from "react"
import { Link } from "next-view-transitions"

interface Engagement {
  name: string
  work: string
  // Not rendered — it orders the list and keeps duplicate client names unique.
  year: number
  city: string
  link?: string
}

const rowClass =
  "flex flex-col gap-0.5 p-3 font-medium md:flex-row md:items-center md:gap-2"

const PastEngagements: React.FC = () => {
  return (
    <div className="-mx-3">
      <div className="relative">
        <p className="text-label mb-6 text-center font-medium tracking-wider uppercase">
          Projects & Engagements
        </p>
        <Link
          href={"/contact/"}
          className="border-accent bg-accent/5 text-accent absolute -top-3 -right-3 rotate-12 rounded-md border border-dashed px-1.5 py-1 text-xs"
        >
          More work on request
        </Link>
      </div>
      {engagements.map((client) => {
        // Atollon appears in two separate years, so the key needs both parts.
        const key = `${client.name}-${client.year}`
        const row = (
          <>
            <p className="text-body">{client.name}</p>
            <div className="border-line flex-1 border-t border-dashed" />
            <p className="text-muted flex items-center gap-1">
              {client.work} / <span className="text-body">{client.city}</span>
            </p>
          </>
        )

        // A handful of the oldest engagements have nothing left to link to.
        return client.link === undefined ? (
          <div key={key} className={rowClass}>
            {row}
          </div>
        ) : (
          <a
            key={key}
            href={client.link}
            target="_blank"
            rel="noopener"
            className={`hover-bg ${rowClass}`}
          >
            {row}
          </a>
        )
      })}
    </div>
  )
}

export default PastEngagements

const engagements: Engagement[] = [
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
    city: "Dublin",
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
    city: "Chicago",
  },
  {
    name: "GoVisionary",
    work: "Product Design",
    year: 2025,
    city: "Milan",
    link: "https://govisionary.biz/",
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
