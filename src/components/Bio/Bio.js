import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Image from '../Image'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
        }
      }
      bioImage: file(relativePath: { eq: "me-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="flex items-center border border-gray-500 rounded shadow p-4">
      <Img
        className="w-10 h-10 rounded shadow"
        fluid={data.bioImage.childImageSharp.fluid}
      />
      <div className="flex flex-col pl-4">
        <h2 className="text-md md:text-lg lg:text-xl font-medium">
          {data.site.siteMetadata.author}
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illo
          at dolor inventore nihil aspernatur cum quasi, animi odio facere ipsa,
          ratione suscipit vel consequuntur laboriosam. Sit natus totam
          voluptas!
        </p>
      </div>
    </div>
  )
}

Bio.propTypes = {}

export default Bio
