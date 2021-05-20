import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Container from "../components/Container";

function Page({ data }) {
  const legal = { html: data.markdownRemark.html, ...data.markdownRemark.frontmatter };

  const meta = {
    title: legal.title,
    description: "",
  };

  const header = {
    title: legal.title,
    text: "",
  };

  return (
    <Layout>
      <Seo meta={meta} />
      <Header header={header} />
      <section className="pt-5 pb-20">
        <Container layout="sm">
          <article
            className="prose"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: legal.html }}
          />
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
        title
      }
    }
  }
`;
