import React from "react"

// components
import BlogPostItem from "../BlogPostItem"

const BlogPosts = ({ posts }) => (
  <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
    {posts.edges.map(({ node }, i) => (
      <BlogPostItem key={i} post={node} />
    ))}
  </ul>
)

export default BlogPosts
