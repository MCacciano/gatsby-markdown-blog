import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Image from '../Image'

const Bio = ({ className = '' }) => {
  const occupations = ['Web Developer, Content Creator']

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
    <div
      className={`flex flex-col max-w-2xl border border-gray-500 rounded shadow p-4 ${className}`}
    >
      <div className="flex">
        <Img
          className="w-10 h-10 rounded shadow flex-shrink-0"
          fluid={data.bioImage.childImageSharp.fluid}
        />
        <div className="flex flex-col items-start pl-2 font-rubik">
          <h2 className="text-md md:text-lg lg:text-xl font-medium">
            {data.site.siteMetadata.author}
          </h2>
          <ul className="text-xs font-thin">
            {occupations.map(occupation => (
              <li>
                <p>{occupation}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="font-thin pt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illo
        at dolor inventore nihil aspernatur cum quasi, animi odio facere ipsa,
        ratione suscipit vel consequuntur laboriosam. Sit natus totam voluptas!
      </p>
    </div>
  )
}

Bio.propTypes = {}

export default Bio
