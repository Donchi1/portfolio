import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Contact from './components/Contact'
import About from './components/About'
import Portfolio from './components/Portfolio'

import Home from './components/Home'
import Error404 from './components/Error404'

import Navigation from './components/Navigation'
import Service from './components/Service'

//import 'tailwindcss/tailwind.css'

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact strict component={Error404} />
      </Switch>
    </Router>
  )
}

export default App
