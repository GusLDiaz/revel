module.exports = {
  siteMetadata: {
    title: `Revel`,
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
        "name": "Eats and drinks",
        "link": "/"
      },
      {
        "name": "venue",
        "link": "/venue"
      },
      {
        "name": "about",
        "link": "/about"
      },
      {
        "name": "contact",
        "link": "/contact"
      },
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
    //`gatsby-theme-massively`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },{
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'krpdiwwt',
        dataset: 'production',
        // a token with read permissions is required
        // if you have a private dataset
        watchMode: true,
        overlayDrafts: true,
        //token: process.env.MY_SANITY_TOKEN, (public for now)skAlSoVklWtFKAbFRzktVoDJZJBrhi7fHZANr0YwE1QIMWUuEMfUkEdNQpCsHyPKGWztqt55aW0VgsXX9hzT0vetEIATg7tkJumFjzLCm6LrG2X3HW3CsP44uEpvmyOJxvM5pbnJp07kJkacmTGMJUmhe70UE2WeWjyXIpYzJLrcsgxCxVoK
      },},
      // {
      // resolve: `gatsby-plugin-layout`,
      // options: {
      //   component: require.resolve(`./relative/path/to/layout/component`),
      // }, maybe use this to maintain cirles cross pages/
    //},
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
