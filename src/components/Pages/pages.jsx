/* eslint-disable no-unused-vars */
import React from "react"
import Header from "../Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Footer from "../Footer"
import App from "../../App"


const Pages = () => {
  return (
    <>
      <Router>
      <Header />
        
        <Switch>
        <Route exact path='/' component={App} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
