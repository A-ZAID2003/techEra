// NotFound.js
import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>Not Found Route</h1>
      <p>Oops! Page not found.</p>
      <Link to="/">
        <img
          src="path/to/your/logo/image.png"
          alt="Website Logo"
          style={{width: '100px', height: 'auto'}}
        />
      </Link>
    </div>
  )
}

export default NotFound
