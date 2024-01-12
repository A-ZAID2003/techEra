// App.js
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home'
import CourseItemDetails from './components/CourseItemDetails/CourseItemDetails'
import NotFound from './components/NotFound/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/courses/:id" component={CourseItemDetails} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App // Make sure to export the App component as the default export
