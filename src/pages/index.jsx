import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import AnimalCard from "../components/AnimalCard";
import Seo from "../components/Seo";
// import Animate from '../components/Animate';
import Animate from "../components/AnimateNew2";

function index({ data }) {
  const homePage = data.pagesYaml;
  const animals = data.allMarkdownRemark.nodes.map((node) => node.frontmatter);

  return (
    <Layout>
      <>
        <Seo
          title={homePage.meta.title}
          description={homePage.meta.description}
          image={homePage.meta.image.childImageSharp.resize.src}
        />
        <div className="">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:gap-6">
            {animals.map((animal) => (
              <Animate key={animal.slug}>
                <AnimalCard animal={animal} image={animal.image.childImageSharp.gatsbyImageData} />
              </Animate>
            ))}
          </div>
        </div>
      </>
    </Layout>
  );
}

index.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default index;

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { collection: { eq: "animal" } } }) {
      nodes {
        frontmatter {
          slug
          excerpt
          category
          title
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    pagesYaml(slug: { eq: "home" }) {
      meta {
        image {
          childImageSharp {
            resize(width: 1200) {
              src
            }
          }
        }
        description
        title
      }
    }
  }
`;
