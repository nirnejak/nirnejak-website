const path = require(`path`)
require(`dotenv`).config({ path: `.env` })

module.exports = {
  siteMetadata: {
    title: `Jitendra Nirnejak - Portfolio`,
    description: `Portfolio website of Jitendra Nirnejak, I am a full-stack developer, UI/UX Designer, and Tech Blogger.`,
    author: `Jitendra Nirnejak`,

    siteLanguage: `en`,
    siteUrl: `https://nirnejak.com`,
    siteImage: `https://nirnejak.com/sitecover.png`,

    social: {
      github: `nirnejak`,
      codepen: `nirnejak`,
      dribbble: `nirnejak`,
      behance: `nirnejak`,
      linkedin: `nirnejak`,
      twitter: `jeetnirnejak`,
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    // `gatsby-plugin-feed`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(`./src`),
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "GITHUB",
        fieldName: "github",
        url: `https://api.github.com/graphql`,
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jitendra Nirnejak`,
        short_name: `nirnejak`,
        start_url: `/`,
        background_color: `#027BFF`,
        theme_color: `#027BFF`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
