import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Loader from '../Loader'
import FailureView from '../FailureView'

const coursesApiUrl = 'https://apis.ccbp.in/te/courses'

const Home = () => {
  const [courses, setCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(coursesApiUrl)
        const data = await response.json()
        setCourses(data.courses)
      } catch (error) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCourses()
  }, [])

  const retryFetchCourses = async () => {
    setIsLoading(true)
    setIsError(false)

    try {
      const response = await fetch(coursesApiUrl)
      const data = await response.json()
      setCourses(data.courses)
    } catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  let content

  if (isLoading) {
    content = <Loader data-testid="loader" />
  } else if (isError) {
    content = (
      <FailureView
        retry={retryFetchCourses}
        imageUrl="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png "
        alt="failure view"
        headingText="Oops! Something Went Wrong"
        paragraphText="We cannot seem to find the page you are looking for"
        buttonText="Retry"
      />
    )
  } else {
    content = (
      <div>
        <h1>Courses</h1>
        <ul>
          {courses.map(course => (
            <li key={course.id}>
              <Link to={`/courses/${course.id}`}>
                <img src={course.logo_url} alt={course.name} />
                <p>{course.name}</p>
              </Link>
            </li>
          ))}
        </ul>
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

  return (
    <div>
      <h1>Home Route</h1>
      {content}
    </div>
  )
}

export default Home
