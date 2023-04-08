import { type NextApiRequest, type NextApiResponse } from "next"

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
): NextApiResponse | undefined {
  if (request.method !== "GET") {
    return
  }

  return response.end(`Hello world!`)
}
