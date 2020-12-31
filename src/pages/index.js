import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout.js'
import Animal from '../components/animal.js'
import Hero from '../components/hero.js'

export default function Index(props) {
  return (
    <Layout>
      {/* <Hero image={props.data.file.childImageSharp.fluid} /> */}
      <div className="">
      <div className="grid grid-cols-3 gap-6">
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
          image {
            childImageSharp {
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
          }
        }
        id
      }
    }
  }
  file(relativePath: {eq: "media/elch.jpg"}) {
    childImageSharp {
      fluid {
        aspectRatio
        base64
        sizes
        src
        srcSet
      }
    }
  }
}
`
