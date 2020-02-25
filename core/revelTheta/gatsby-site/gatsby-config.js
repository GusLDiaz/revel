module.exports = {
  siteMetadata: {
    title: `Gatsby Revel`,
    description: ``,
    author: `@gusldiaz`,
    siteUrl: 'https://www.Romshua.com/',
    social: {
      twitter: 'http://twitter.com/',
      facebook: 'http://facebook.com/',
      snapchat: 'http://snapchat.com/',
      instagram: 'http://instagram.com/',
      medium: 'http://medium.com/'
    },
    menuLinks: [
      {
        "name": "home",
        "link": "/"
      },
      {
        "name": "about",
        "link": "/about"
      }
    ],
    contact: {
      info: 'This is information about you',
      email: 'information@untitled.tld',
      tel: '(000) 000-0000',
      address: '1234 Somewhere Road Nashville, TN 00000-0000'
    }
  },
  // pathPrefix: "/massively-demo",
  plugins: [
    `gatsby-theme-massively`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
