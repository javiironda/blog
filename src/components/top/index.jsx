import React from 'react'
import { Link } from 'gatsby'
import { LinkedInIcon } from '../social-share/linkedin-icon'

import './index.scss'

export const Top = ({ title, location, rootPath }) => {
  const isRoot = location.pathname === rootPath
  return (
    <div className="top">
      {!isRoot && (
        <Link to={`/`} className="link">
          {title}
        </Link>
      )}
      <LinkedInIcon />
    </div>
  )
}
