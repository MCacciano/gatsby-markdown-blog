import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const BlogPost = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  const { date, description, title, featuredImage } = frontmatter

  return (
    <Layout>
      <div className="my-4 px-8 w-full max-w-screen-xl bg-white">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date
      }
    }
  }
`

export default BlogPost
