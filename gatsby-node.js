const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Create the animal pages
  const result = await graphql(`
    query {
      allMarkdownRemark(filter: { frontmatter: { collection: { eq: "animal" } } }) {
        nodes {
          frontmatter {
            slug
          }
          id
        }
      }
    }
  `);
  result.data.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: `wildtiere/${node.frontmatter.slug}/`,
      component: path.resolve("./src/templates/animal.jsx"),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.frontmatter.slug,
        id: node.id,
      },
    });
  });
};
