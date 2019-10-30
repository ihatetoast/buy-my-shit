module.exports = {
  siteMetadata: {
    title: `Buy My Shit`,
    description: `A store that will trade you useless junk for money.`,
    author: `@i_hate_toast`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-stripe",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-stripe",
      options: {
        objects: ["Product", "Sku"],
        secretKey: "sk_test_eOfJ3jZe301LoUbgF0QbyVjC00uWgU8T36",
        downloadFiles: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
