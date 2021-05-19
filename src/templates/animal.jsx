import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import AnimalComponent from "../components/Animal";
import Container from "../components/Container";
import Seo from "../components/Seo";

function Page({ data }) {
  const animal = data.markdownRemark.frontmatter;
  const image = animal.image.childImageSharp.gatsbyImageData;
  const { html } = data.markdownRemark;

  const meta = {
    title: animal.title,
    description: animal.excerpt,
    image: animal.image,
  };

  return (
    <Layout>
      <Seo meta={meta} />
      <section className="pt-5">
        <Container layout="sm">
          <AnimalComponent animal={animal} body={html} image={image} />
        </Container>
      </section>
    </Layout>
  );
}

Page.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default Page;

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        category
        excerpt
        slug
        title
        image {
          childImageSharp {
            gatsbyImageData
            resize(width: 1200) {
              src
            }
          }
        }
      }
    }
  }
`;
