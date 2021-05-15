module.exports = {
  siteMetadata: {
    title: "Netti Design",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "netti-design",
        accessToken:
          "MC5ZSkNiZXhBQUFDSUFWYlpZ.BHtfKy7vv73vv70Z77-9fe-_ve-_ve-_ve-_vVt477-9Z--_ve-_vSjvv73vv73vv70c77-9BUrvv70V77-977-9",
        schemas: {
          homepage: require("./custom_types/homepage.json"),
        },
      },
    },
  ],
}
