import type * as React from "react"

interface Props {
  schema: Record<string, unknown> | Record<string, unknown>[]
}

const JsonLd: React.FC<Props> = ({ schema }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
)

export default JsonLd
