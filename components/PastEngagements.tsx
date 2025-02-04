import * as React from "react"

const PastEngagements: React.FC = () => {
  return (
    <div className="-mx-3">
      {engagements.map((client, index) => (
        <div key={index} className="flex items-center gap-2 font-medium p-3">
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
