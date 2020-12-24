import React from 'react'
import { Link } from 'gatsby'
// import { LinkedInIcon } from '../social-share/linkedin-icon'
import { ThemeSwitch } from '../theme-switch'

import './index.scss'

export const Top = ({ title }) =>  (
    <div className="top" style={{position: 'relative'}}>
      <Link to={`/`} className="link">
        {title}
      </Link>
      {/* <Link to={'/about'} className='link' style={{fontSize: '1.2rem', fontWeight: 'normal'}}>
        About
      </Link> */}
      <a href={'/admin/#/'} className='link' style={{fontSize: '1.2rem', fontWeight: 'normal'}}>
        New Thought
      </a>
      <span style={{position: 'absolute', top: '15px', right: '30px'}}>

      <ThemeSwitch />
      </span>
      {/* <LinkedInIcon /> */}
    </div>
  )

