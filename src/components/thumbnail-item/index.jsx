import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'

import './index.scss'

export const ThumbnailItem = ({ node }) => (
  <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
    <div key={node.fields.slug}>
      <h3>{node.frontmatter.title || node.fields.slug}</h3>
      <p dangerouslySetInnerHTML={{ __html: node.html.length > 1000 ? node.html.slice(0, 1000) + '... (read more)' : node.html.slice(0, 1000) }} />
    </div>
  </Link>
)
