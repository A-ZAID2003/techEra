// NotFound.js
import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => (
  <div>
    <h1>Page Not Found</h1>
    <img
      src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png "
      alt="website logo"
      style={{width: '50px', height: '50px'}}
    />
    <img
      src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
      alt="not found"
    />
    <p>We are sorry, the page you requested could not be found</p>
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png "
        alt="website logo"
        style={{width: '50px', height: '50px'}}
      />
    </Link>
  </div>
)

export default NotFound
