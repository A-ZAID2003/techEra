// Home.js
import React, {useState, useEffect} from 'react'
import Loader from '/Loader'
import FailureView from '/FailureView'

const coursesApiUrl = 'https://apis.ccbp.in/te/courses'

const Home = () => {
  const [courses, setCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(coursesApiUrl)
        const data = await response.json()
        setCourses(data.courses)
        setIsLoading(false)
      } catch (error) {
        setIsError(true)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

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
          <h1>Home Route</h1>
          <ul>
            {courses.map(course => (
              <li key={course.id}>
                <img src={course.logo_url} alt={course.name} />
                <p>{course.name}</p>
                {/* Add a link to course details page */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Home
