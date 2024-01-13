// FailureView.js
import React from 'react'

const FailureView = ({retry}) => (
  <div>
    <p>Failed to fetch data. Please try again.</p>
    <button onClick={retry}>Retry</button>
  </div>
)

export default FailureView
