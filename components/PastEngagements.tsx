import type * as React from "react"

import { ENGAGEMENTS } from "@/utils/engagements"

const ROW_CLASS =
  "flex flex-col gap-0.5 p-3 font-medium md:flex-row md:items-center md:gap-2"

const PastEngagements: React.FC = () => {
  return (
    <div className="-mx-3">
      <p className="text-label mb-6 text-center font-medium tracking-wider uppercase">
        Projects & Engagements
      </p>
      {ENGAGEMENTS.map((client) => {
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
          <div key={key} className={ROW_CLASS}>
            {row}
          </div>
        ) : (
          <a
            key={key}
            href={client.link}
            target="_blank"
            rel="noopener"
            className={`hover-bg ${ROW_CLASS}`}
          >
            {row}
          </a>
        )
      })}
    </div>
  )
}

export default PastEngagements
