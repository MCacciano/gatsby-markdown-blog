import React from 'react'
import { graphql } from 'gatsby'

// components
import Layout from '../components/Layout'
import Bio from '../components/Bio'

const BlogPost = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  const { date, description, title, featuredImage } = frontmatter

  return (
    <Layout>
      <div className="my-4 px-8 mx-auto w-full max-w-screen-lg bg-white">
        <div className="flex flex-col items-center mb-10">
          <h1
            style={{ fontFamily: 'Rubik' }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1"
          >
            {title}
          </h1>
          {date ? <h3 className="text-1xl font-thin">{date}</h3> : null}
        </div>
        <div
          className="grid grid-cols-1 gap-16 text-xl"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
        <div style={{ fontFamily: 'Rubik' }} className="my-20">
          <Bio />
        </div>
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
