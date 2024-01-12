// CourseItemDetails.js
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Loader from './Loader'
import FailureView from './FailureView'

const courseDetailsApiUrl = 'https://apis.ccbp.in/te/courses'

const CourseItemDetails = () => {
  const {id} = useParams()
  const [courseDetails, setCourseDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${courseDetailsApiUrl}/${id}`)
        const data = await response.json()
        setCourseDetails(data.course_details)
        setIsLoading(false)
      } catch (error) {
        setIsError(true)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id])

  const retryFetch = () => {
    setIsLoading(true)
    setIsError(false)
    fetchData()
  }

  return (
    <div>
      {isLoading && <Loader data-testid="loader" />}
      {isError && <FailureView retryFetch={retryFetch} />}
      {!isLoading && !isError && (
        <div>
          <h1>Course Item Details Route</h1>
          <img src={courseDetails.image_url} alt={courseDetails.name} />
          <p>{courseDetails.description}</p>
        </div>
      )}
    </div>
  )
}

export default CourseItemDetails
