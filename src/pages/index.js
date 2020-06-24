import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"
import BlogPosts from "../components/BlogPosts"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="max-w-screen-xl mx-auto px-8 w-full my-10">
        <BlogPosts posts={data.posts} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostsQuery {
    posts: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
            date
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          html
        }
      }
    }
  }
`

export default IndexPage
