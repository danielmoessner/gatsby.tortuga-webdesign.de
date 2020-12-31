import React from "react"
import Img from 'gatsby-image'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'

export default function Animal({data}) {
  console.log(data);
  return (
    <Layout>
      <div className="mb-6">
        <Hero image={data.markdownRemark.frontmatter.image.childImageSharp.fluid} alt={data.markdownRemark.frontmatter.title} />
      </div>
      <div className="max-w-xl w-full mx-auto mb-3">
      <div className="text-gray-600 uppercase font-medium leading-tight tracking-tight -mb-2">{data.markdownRemark.frontmatter.category}</div>
      <h2 className="text-5xl font-bold text-gray-800 tracking-tight leading-tight">{data.markdownRemark.frontmatter.title}</h2>
      </div>
      <article className="prose lg:prose-xl max-w-xl w-full mx-auto mb-40" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}></article>
    </Layout>
  )
}

export const query = graphql`
query($slug: String!){
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    id
    html
    frontmatter {
      category
      excerpt
      slug
      title
      image {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            src
            sizes
            srcSet
          }
        }
      }
    }
  }
}
`