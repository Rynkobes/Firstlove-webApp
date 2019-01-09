import React from 'react'
import {BrowserRouter as Router, NavLink } from 'react-router-dom'


const Test = () => (
    <Router>
      <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pastors">Pastors</NavLink>
      <NavLink to="/church">Churches</NavLink>
      <NavLink to="/denomination">Denomination</NavLink>
      </div>
  </Router>
)

export default Test