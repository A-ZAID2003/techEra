import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import Loader from '../Loader'

const courseDetailsApiUrl = 'https://apis.ccbp.in/te/courses'

const CourseDetails = () => {
  const {id} = useParams()
  const [courseDetails, setCourseDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const fetchCourseDetails = async () => {
    try {
      const response = await fetch(`${courseDetailsApiUrl}/${id}`)
      const data = await response.json()
      setCourseDetails(data.course_details)
    } catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCourseDetails()
  }, [id])

  const retryFetchCourseDetails = async () => {
    setIsLoading(true)
    setIsError(false)

    try {
      const response = await fetch(`${courseDetailsApiUrl}/${id}`)
      const data = await response.json()
      setCourseDetails(data.course_details)
    } catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  const renderContent = () => {
    if (isLoading) {
      return <Loader data-testid="loader" />
    }

    if (isError) {
      return (
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
    }

    return (
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
      {renderContent()}
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
