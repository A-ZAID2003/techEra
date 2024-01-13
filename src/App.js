// App.js
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import CourseDetails from './components/CourseDetails'
import NotFound from './components/NotFound'

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/courses/:id" component={CourseDetails} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
)

export default App
