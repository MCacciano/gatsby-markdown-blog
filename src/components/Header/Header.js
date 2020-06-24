import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="h-16 bg-blue-700">
    <div className="flex items-center px-8 w-full h-full max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-semibold text-white">
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
