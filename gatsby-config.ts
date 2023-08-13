import type { GatsbyConfig } from "gatsby"
require("dotenv").config({
  path: ".env",
})

const config: GatsbyConfig = {
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
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ 
        }
      }
    },
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: "2E5Yy5u9pqBLfw4NPFS36Xs4vhaJjIOrPhAn",
        serviceId: 'takuminish-blog-jamstack',
        apis: [
          {
            endpoint: "profile",
            format: 'object',
          },
        ],
      },
    }
  ],
}

export default config
