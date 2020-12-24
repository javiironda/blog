import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'

import './index.scss'

const maxChars = 2500

export const ThumbnailItem = ({ node }) => (
  <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
    <div key={node.fields.slug}>
      <h3>{node.frontmatter.title || node.fields.slug}</h3>
      <p dangerouslySetInnerHTML={{ __html: node.html.length > maxChars ? node.html.slice(0, maxChars) + '... (read more)' : node.html.slice(0, maxChars) }} />
    </div>
  </Link>
)
