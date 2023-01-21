module.exports = {
  siteMetadata: {
    title: `Profile of Judit Greskovits`,
    description: `Judit Greskovits is a full stack developer with a focus on Javascript, React and Node.js`,
    author: `@juditgreskovits`,
    siteUrl: `https://juditgreskovits.com`,
    index: {
      headline: `My name is  Judit Greskovits.`,
      code: `I mostly  write *code*.`,
      talk: `Sometimes I talk.`,
    },
    social: {
      github: {
        link: `https://github.com/juditgreskovits`,
      },
      linkedIn: {
        link: `https://www.linkedin.com/in/judit-greskovits-00b460b/`,
      },
    },
    talks: [
      {
        link: `https://www.youtube.com/watch?v=aburxGiXb3w`,
        title: `Cypress + Auth0`,
        description: ``,
      },
      {
        link: `https://www.youtube.com/watch?v=72SkKIm9Vgo&t=7s`,
        title: `How to build a Redux Middleware for Analytics`,
        description: ``,
      },
      {
        link: `https://www.youtube.com/watch?v=MPek7QF71SA`,
        title: `Using React with Meteor`,
        description: ``,
      },
      {
        link: `https://www.youtube.com/watch?v=727BMvX6tqw`,
        title: `Portfolio: A case study`,
        description: ``,
      },
    ],
  },
  plugins: [
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
        icon: `src/images/juditgreskovits-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: `Ubuntu`,
            variants: [`500`],
          },
          {
            family: `Ubuntu Mono`,
            variants: [`700`],
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
