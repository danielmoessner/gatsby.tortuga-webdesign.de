const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  siteMetadata: {
    title: 'Yellowcake',
    siteUrl: 'https://yellowcake.netlify.com'
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    // Add static assets before markdown files
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/animals`,
        name: 'animals'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/categories`,
        name: 'categories'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem', 
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/media`,
        name: 'media'
      }
    },
    // images
    
    // {
    //   resolve: 'gatsby-transformer-remark',
    //   options: {
    //     plugins: [
    //       // gatsby-remark-relative-images must
    //       // go before gatsby-remark-images
    //       'gatsby-remark-relative-images',
    //       {
    //         resolve: 'gatsby-remark-images',
    //         options: {
    //           maxWidth: 800,
    //           linkImagesToOriginal: false
    //         }
    //       },
    //       `gatsby-remark-responsive-iframe`
    //     ]
    //   }
    // },
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
