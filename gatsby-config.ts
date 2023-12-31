import type { GatsbyConfig } from "gatsby"
require("dotenv").config();

const config: GatsbyConfig = {
  pathPrefix: '/takuminishBlogJamstackV2',
  siteMetadata: {
    title: `Takuminish Blog V2`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-force-file-loader',
      options: {
        /* gatsby-plugin-force-file-loader options here */
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/ 
        }
      }
    },
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.MICROCMS_APIKEY,
        serviceId: 'takuminish-blog-jamstack',
        apis: [
          {
            endpoint: "profile",
            format: 'object',
          },
        ],
      },
    },
  ],
}

export default config
