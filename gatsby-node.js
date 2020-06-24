const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `${__dirname}/content/blog`,
    })

    console.log("slug", slug)
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const BlogPostTemplate = path.resolve("./src/templates/BlogPost.js")

  const {
    data: { blogPosts },
  } = await graphql(`
    query {
      blogPosts: allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              description
              date
            }
            html
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  blogPosts.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: BlogPostTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
