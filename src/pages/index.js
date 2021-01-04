import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Animal from '../components/animal'
import Seo from '../components/seo'

export default function Index(props) {
  let homePage = props.data.markdownRemark.frontmatter.meta
  let animals = props.data.allMarkdownRemark.edges.map(node => node.node)
  return (
    <Layout>
      <Seo title={homePage.title} description={homePage.description} image={homePage.image.childImageSharp.fluid.src} />
      <div className="">
        <div className="grid grid-cols-3 gap-6">
          {animals.map((animal) => (
            <Animal
              key={animal.id}
              {...animal.frontmatter}
              imageFluid={animal.frontmatter.image.childImageSharp.fluid}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { collection: { eq: "animal" } } }
    ) {
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
    markdownRemark(frontmatter: {collection: {eq: "page"}, slug: {eq: "home"}}) {
      frontmatter {
        meta {
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          description
          title
        }
      }
    }
  }
`
