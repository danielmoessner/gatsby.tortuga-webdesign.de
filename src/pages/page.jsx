// import { graphql } from 'gatsby';
import React from "react";
// import PropTypes from 'prop-types';
// import { Link, graphql } from 'gatsby';
// import { Transition } from '@headlessui/react';
// import Container from '../components/Container';

function Page() {
  return (
    <div>
      <div>Page</div>
    </div>
  );
}

Page.defaultProps = {};

Page.propTypes = {
  // eslint-disable-next-line
  // data: PropTypes.object.isRequired,
};

export default Page;

// export const query = graphql`
//   {
//     pagesYaml(slug: { eq: "NONE" }) {
//       meta {
//         image {
//           childImageSharp {
//             resize(width: 1200) {
//               src
//             }
//           }
//         }
//         description
//         title
//       }
//     }
//   }
// `;
