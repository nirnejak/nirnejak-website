import { type GetServerSideProps } from "next"

function generateSiteMap(): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="https://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="https://www.w3.org/1999/xhtml" xmlns:image="https://www.google.com/schemas/sitemap-image/1.1" xmlns:video="https://www.google.com/schemas/sitemap-video/1.1">
     <url>
       <loc>https://nirnejak.com/</loc>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>https://nirnejak.com/work/</loc>
       <changefreq>daily</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>https://nirnejak.com/blogs/</loc>
       <changefreq>daily</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>https://nirnejak.com/photos/</loc>
       <changefreq>daily</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>https://nirnejak.com/uses/</loc>
       <changefreq>daily</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>https://nirnejak.com/contact/</loc>
       <changefreq>daily</changefreq>
       <priority>0.7</priority>
     </url>
   </urlset>
 `
}

const SiteMap = (): void => {
  // getServerSideProps will do the heavy lifting, this component is just a wrapper
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const sitemap = generateSiteMap()

  context.res.setHeader("Content-Type", "text/xml")
  context.res.write(sitemap)
  context.res.end()

  return {
    props: {},
  }
}

export default SiteMap