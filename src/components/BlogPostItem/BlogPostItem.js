import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const BlogPostItem = ({ post }) => {
  console.log("post", post)
  const { frontmatter, html, fields } = post
  const { date, description, title, featuredImage } = frontmatter

  return (
    <li className="border border-black rounded shadow bg-white">
      <Link className="flex flex-col" to={fields.slug}>
        <div className="flex justify-center items-center h-40 relative">
          <Img
            className="h-full w-full"
            fluid={featuredImage.childImageSharp.fluid}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
          <div className="absolute">
            <h2 className="text-white text-2xl font-medium">{title}</h2>
          </div>
        </div>
        <p className="my-4 p-4">{description}</p>
      </Link>
    </li>
  )
}

export default BlogPostItem
