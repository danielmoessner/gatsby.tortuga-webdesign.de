import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout.js'

export default function Index(props) {
  return (
    <Layout>
      dadam
    </Layout>
    // <ul>
    //   {props.data.allMarkdownRemark.nodes.map(animal => (
    //     <li key={animal.frontmatter.title}>{animal.title}</li>
    //   ))}
    // </ul>
  )
}

// export const query = graphql`
//   {
//     allMarkdownRemark(filter: {fields: {contentType: {eq: "animals"}}}) {
//       nodes {
//         frontmatter {
//           category
//           template
//           title
//         }
//       }
//     }
//   }
// `
