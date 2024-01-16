import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import Loader from '../Loader'
import FailureView from '../FailureView'

const courseDetailsApiUrl = 'https://apis.ccbp.in/te/courses'

const CourseDetails = () => {
  const {id} = useParams()
  const [courseDetails, setCourseDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null) // Change 'error' to 'fetchError'

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(`${courseDetailsApiUrl}/${id}`)

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        setCourseDetails(data.course_details)
      } catch (error) {
        setFetchError(error.message) // Change 'error' to 'fetchError'
      } finally {
        setIsLoading(false)
      }
    }

    fetchCourseDetails()
  }, [id])

  const retryFetchCourseDetails = async () => {
    setIsLoading(true)
    setFetchError(null) // Change 'error' to 'fetchError'

    try {
      const response = await fetch(`${courseDetailsApiUrl}/${id}`)

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data = await response.json()
      setCourseDetails(data.course_details)
    } catch (error) {
      setFetchError(error.message) // Change 'error' to 'fetchError'
    } finally {
      setIsLoading(false)
    }
  }

  let content = null

  if (isLoading) {
    content = <Loader data-testid="loader" />
  } else if (fetchError) {
    content = (
      <div>
        <h2>Oops! Something Went Wrong</h2>
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
          alt="failure view"
        />
        <p>We cannot seem to find the page you are looking for</p>
        <button onClick={retryFetchCourseDetails}>Retry</button>
      </div>
    )
  } else {
    content = (
      <div>
        <img src={courseDetails.image_url} alt={courseDetails.name} />
        <h1>{courseDetails.name}</h1>
        <p>{courseDetails.description}</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Course Item Details Route</h1>
      {content}
      <Link to="/" style={{display: 'block', margin: '20px 0'}}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          alt="website logo"
          style={{width: '50px', height: '50px'}}
        />
      </Link>
    </div>
  )
}

export default CourseDetails
