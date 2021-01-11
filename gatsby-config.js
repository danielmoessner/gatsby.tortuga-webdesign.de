module.exports = {
  siteMetadata: {
    siteUrl: 'https://gatsby-netlifycms.tortuga-webdesign.de',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Wildtiere',
        short_name: 'Wildtiere',
        start_url: '/',
        icon: 'static/images/favicon.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        icon: 'static/images/favicon.svg',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    'gatsby-transformer-yaml',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        enableIdentityWidget: true,
        htmlTitle: 'CMS',
        htmlFavicon: `${__dirname}/static/images/favicon.svg`,
      },
    },
    'gatsby-plugin-sitemap'
  ],
}
