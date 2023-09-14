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
    .filter((slug: string) => !slug.includes(".HEIC"))
    .filter((slug: string) => !slug.includes(".heic"))
    .filter((slug: string) => !slug.includes("IMG_0135"))
    .filter((slug: string) => !slug.includes("IMG_7217"))
    .filter((slug: string) => !slug.includes("IMG_7214"))
    .filter((slug: string) => !slug.includes("IMG_0807"))
    .filter((slug: string) => !slug.includes("IMG_4671"))
    .filter((slug: string) => !slug.includes("IMG_6442"))
    .filter(
      (slug: string) => !slug.includes("EFF085DC-8EF6-4AC4-8E8B-714C1B20F6F5")
    )
  return images
}
