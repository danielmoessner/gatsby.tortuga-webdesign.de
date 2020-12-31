import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout.js'
import Animal from '../components/animal.js'

export default function Index(props) {
  console.log(props.data.allMarkdownRemark.edges)
  return (
    <Layout>
      <div className="pt-5">
      <div className="grid grid-cols-3 gap-4">
        {props.data.allMarkdownRemark.edges.map(node => (
          <Animal key={node.node.id} animal={node.node.frontmatter} />
        ))}
      </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
{
  allMarkdownRemark(filter: {frontmatter: {collection: {eq: "animal"}}}) {
    edges {
      node {
        frontmatter {
          slug
          excerpt
          category
          title
        }
        id
      }
    }
  }
}
`
