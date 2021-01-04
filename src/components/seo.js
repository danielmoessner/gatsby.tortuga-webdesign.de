import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({ url, title, description, image, isBlogPost }) => (
  <Helmet>
    {/* General tags */}
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="image" content={image} />
    <link rel="canonical" href={url} />

    {/* OpenGraph tags */}
    <meta property="og:url" content={url} />
    {isBlogPost ? <meta property="og:type" content="article" /> : null}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />

    {/* Twitter Card tags */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </Helmet>
)

SEO.defaultProps = {
  isBlogPost: false,
}

export default SEO
