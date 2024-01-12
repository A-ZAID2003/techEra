// FailureView.js
import React from 'react'

const FailureView = ({retryFetch}) => {
  return (
    <div>
      <p>Failed to fetch data.</p>
      <button onClick={retryFetch}>Retry</button>
    </div>
  )
}

export default FailureView
