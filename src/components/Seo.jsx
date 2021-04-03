import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

function SEO({ title, description, image }) {
  const data = useStaticQuery(
    graphql`
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
    `
  );
  const favicon = data.settingsYaml.favicon.childImageSharp.resize.src;

  return (
    <Helmet htmlAttributes={{ lang: 'de' }}>
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {image ? <meta name="image" content={image} /> : null}

      {/* OpenGraph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image ? <meta property="og:image" content={image} /> : null}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image ? <meta name="twitter:image" content={image} /> : null}

      {/* Different Favicons */}
      <link rel="icon" type="image/png" href={favicon} sizes="256x256" />
      <link rel="apple-touch-icon" sizes="256x256" href={favicon} />
    </Helmet>
  );
}

SEO.defaultProps = {
  image: '',
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default SEO;
