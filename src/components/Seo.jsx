import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

function SEO({ url, title, description, image, isBlogPost }) {
  return (
    <Helmet htmlAttributes={{ lang: 'de' }}>
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {image ? <meta name="image" content={image} /> : null}
      <link rel="canonical" href={url} />

      {/* OpenGraph tags */}
      {url ? <meta property="og:url" content={url} /> : null}
      {isBlogPost ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image ? <meta property="og:image" content={image} /> : null}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image ? <meta name="twitter:image" content={image} /> : null}

      {/* Different Favicons */}
      <StaticQuery
        query={graphql`
          query Favicon {
            settingsYaml(slug: { eq: "global" }) {
              favicon {
                childImageSharp {
                  resize(width: 256, height: 256, cropFocus: CENTER) {
                    src
                  }
                }
              }
            }
          }
        `}
        render={(data) => (
          <>
            <link
              rel="icon"
              type="image/png"
              href={data.settingsYaml.favicon.childImageSharp.resize.src}
              sizes="256x256"
            />
            <link
              rel="apple-touch-icon"
              sizes="256x256"
              href={data.settingsYaml.favicon.childImageSharp.resize.src}
            />
          </>
        )}
      />
    </Helmet>
  );
}

SEO.defaultProps = {
  isBlogPost: false,
  url: '',
  image: '',
};

SEO.propTypes = {
  url: PropTypes.string,
  isBlogPost: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default SEO;
