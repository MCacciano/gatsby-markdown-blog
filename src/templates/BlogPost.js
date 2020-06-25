import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

// components
import Layout from '../components/Layout'
import Bio from '../components/Bio'

const BlogPost = ({ data }) => {
  console.log('data', data)
  const { markdownRemark, site } = data

  const { author } = site.siteMetadata

  const { frontmatter, html } = markdownRemark
  const { date, description, title, featuredImage } = frontmatter

  return (
    <Layout>
      <div className="w-full bg-white">
        <div className="flex max-w-screen-xl mt-8 px-4 mx-auto justify-center items-center font-rubik relative">
          <div className="relative w-full h-full min-h-full">
            <div className="absolute z-20 w-full h-full bg-black bg-opacity-50" />
            <Img
              className="w-full z-10"
              style={{ maxHeight: '400px' }}
              fluid={featuredImage.childImageSharp.fluid}
            />
          </div>
          <div className="absolute border border-black py-2 px-4 bg-white bg-opacity-50 z-30">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-1">
              {title}
            </h1>
            <div className="flex justify-between pb-2 font-light">
              <h3>{author}</h3>
              {date ? <h3>{date}</h3> : null}
            </div>
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto my-16 px-4">
          <div
            className="grid grid-cols-1 gap-16 text-2xl leading-loose tracking-wide"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
          <Bio className="my-20" />
        </div>
      </div>
    </Layout>
  )
}

export const blogPageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
    }
  }
`

export default BlogPost
