module.exports = {
  siteMetadata: {
    title: "Business Startup",
    description: "Application"
  },

  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-playground",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: "content"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
              backgroundColor: "transparent"
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/index.js`)
      }
    },
    {
      resolve: "gatsby-plugin-create-client-paths",
      options: { prefixes: ["/private/*"] }
    }
  ]
};
