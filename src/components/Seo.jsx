import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";

function SEO({ meta }) {
  const data = useStaticQuery(
    graphql`
      query Favicon {
        settingYaml(slug: { eq: "global" }) {
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
  const favicon = data.settingYaml.favicon.childImageSharp.resize.src;
  const { title, description, image } = meta;

  return (
    <Helmet htmlAttributes={{ lang: "de" }}>
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {image ? <meta name="image" content={image.childImageSharp.resize} /> : null}

      {/* OpenGraph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image ? <meta property="og:image" content={image.childImageSharp.resize} /> : null}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image ? <meta name="twitter:image" content={image.childImageSharp.resize} /> : null}

      {/* Different Favicons */}
      <link rel="icon" type="image/png" href={favicon} sizes="256x256" />
      <link rel="apple-touch-icon" sizes="256x256" href={favicon} />
    </Helmet>
  );
}

SEO.defaultProps = {};

SEO.propTypes = {
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        resize: PropTypes.shape({
          src: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};

export default SEO;

export const metaFragment = graphql`
  fragment meta on PageYaml {
    meta {
      image {
        childImageSharp {
          resize(width: 1200) {
            src
          }
        }
      }
      title
      description
    }
  }
  fragment metaMarkdown on MarkdownRemarkFrontmatter {
    meta {
      image {
        childImageSharp {
          resize(width: 1200) {
            src
          }
        }
      }
      title
      description
    }
  }
`;
