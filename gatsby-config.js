require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Tasty Recipes",
    description: "easy and delicious recipes site",
    author: "@karthikeya",
    person: {name: "karthikeya", age: 24},
    simpleData: ["item 1", "item 2"],
    complexData: [
      {
        name: "kaushik",
        age: "20"
      },
      {
        name: "vivek",
        age: "30"
      },
    ]

  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `pr5cxw1lm41u`,
        accessToken: process.env.CONTENTFULL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400"],
            },
            {
              family: "Inconsolata",
              variants: ["300", "500", "600", "700"],
            },
          ],
        },
      },
    },
    
  ],
};
