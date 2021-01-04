module.exports = {
  siteMetadata: {
    title: 'Wildtiere',
    siteUrl: 'https://gatsby-netlifycms.tortuga-webdesign.de'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Wildtiere",
        short_name: "Wildtiere",
        start_url: "/",
        icon: "static/images/favicon.svg",
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: 'static/images/favicon.svg'
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content'
      }
    },
    {
      resolve: 'gatsby-source-filesystem', 
      options: {
        path: `${__dirname}/static/images`,
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        stylesPath: `${__dirname}/src/cms/admin.css`,
        enableIdentityWidget: true
      }
    },
  ]
}
