import React from "react";
import PropTypes, { string } from "prop-types";
// import { Link } from 'gatsby';
// import { Transition } from '@headlessui/react';
import { graphql } from "gatsby";
import Container from "./Container";

function Component({ header }) {
  return (
    <header>
      <Container layout="sm">
        <div className="py-16 border-b border-gray-200">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">{header.title}</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {header.text}
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
}

Component.defaultProps = {};

Component.propTypes = {
  header: PropTypes.shape({
    title: string,
    text: string,
  }).isRequired,
};

export default Component;

export const metaFragment = graphql`
  fragment header on PageYaml {
    header {
      title
      text
    }
  }
  fragment headerMarkdown on MarkdownRemarkFrontmatter {
    header {
      title
      text
    }
  }
`;
