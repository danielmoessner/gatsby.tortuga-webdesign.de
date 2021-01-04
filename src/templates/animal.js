import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Seo from '../components/seo'

export const AnimalTemplate = ({
  title,
  imageComponent,
  imageFluid,
  category,
  excerpt,
  body,
  html,
}) => {
  return (
    <div>
      {imageFluid ? <Seo title={title} description={excerpt} image={imageFluid.src} /> : null}
      <div className="mb-6">
        <Hero
          imageComponent={imageComponent}
          imageFluid={imageFluid}
          alt={title}
        />
      </div>
      <div className="max-w-xl w-full mx-auto mb-3">
        <div className="text-gray-600 uppercase font-medium leading-tight tracking-tight -mb-2">
          {category}
        </div>
        <h2 className="text-5xl font-bold text-gray-800 tracking-tight leading-tight">
          {title}
        </h2>
      </div>
      {html && (
        <article
          className="prose lg:prose-xl max-w-xl w-full mx-auto mb-40"
          dangerouslySetInnerHTML={{ __html: html }}
        ></article>
      )}
      {body && (
        <article className="prose lg:prose-xl max-w-xl w-full mx-auto mb-40">
          {body}
        </article>
      )}
    </div>
  )
}

export default function Animal({ data }) {
  let frontmatter = data.markdownRemark.frontmatter
  let html = data.markdownRemark.html
  let imageFluid = data.markdownRemark.frontmatter.image.childImageSharp.fluid
  return (
    <Layout>
      <AnimalTemplate {...frontmatter} html={html} imageFluid={imageFluid} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
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
