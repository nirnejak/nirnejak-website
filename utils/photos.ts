import fs from "fs"
import { join } from "path"

const imagesDirectory = join(process.cwd(), "public/photos")

export const getImageDirectories = (): any => {
  return fs.readdirSync(imagesDirectory)
}

export const getAllImages = (): string[] => {
  const directories = getImageDirectories()
  const images = directories
    .map((slug: string) => slug)
    .filter((slug: string) => !slug.includes(".DS_Store"))
  return images
}
